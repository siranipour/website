use rand::Rng;
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::to_value;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

// in pixels the radius in which boids steer clear of obstructions
const PROTECTED_RANGE: u32 = 80;
// in pixels the radius in which boids observe flocking behaviour
const VISUAL_RANGE: u32 = 300;

const AVOID_FACTOR: f64 = 0.013;
const COHESION_FACTOR: f64 = 0.001;
const MATCH_FACTOR: f64 = 0.02;

// max speed in units of pixel per second
const MAX_SPEED: f64 = 100_f64;
const MIN_SPEED: f64 = 5_f64;

#[wasm_bindgen]
pub struct Simulation {
    boids: Vec<Boid>,
    width: u32,
    height: u32,
}

#[wasm_bindgen]
impl Simulation {
    #[wasm_bindgen(constructor)]
    pub fn new(n: u32, width: u32, height: u32) -> Self {
        let mut boids: Vec<Boid> = vec![];
        for _ in 0..n {
            boids.push(Boid::new())
        }
        Self {
            boids,
            width,
            height,
        }
    }

    pub fn iterate(&mut self) {
        //TODO: probably not the most efficient implementation
        let prev_state = self.boids.clone();

        for boid in self.boids.iter_mut() {
            let width = self.width as f64;
            let height = self.height as f64;
            let mut close_dx = 0_f64;
            let mut close_dy = 0_f64;

            let mut neighbors = 0;
            let mut vx_avg = 0_f64;
            let mut vy_avg = 0_f64;
            let mut x_avg = 0_f64;
            let mut y_avg = 0_f64;
            for other in prev_state.iter() {
                let dx =
                    shortest_distance(other.x.rem_euclid(width), boid.x.rem_euclid(width), width);
                let dy = shortest_distance(
                    other.y.rem_euclid(height),
                    boid.y.rem_euclid(height),
                    height,
                );
                let distance_px2 = dx.powi(2) + dy.powi(2);

                if distance_px2 == 0.0 {
                    continue;
                }

                if distance_px2 <= (PROTECTED_RANGE as f64).powi(2) {
                    close_dx += dx;
                    close_dy += dy;
                }
                if distance_px2 <= (VISUAL_RANGE as f64).powi(2) {
                    vx_avg += other.v_x;
                    vy_avg += other.v_y;
                    x_avg += other.x.rem_euclid(width);
                    y_avg += other.y.rem_euclid(height);
                    neighbors += 1;
                }
            }

            let mut dx_to_center = 0.0;
            let mut dy_to_center = 0.0;
            if neighbors > 0 {
                vx_avg /= neighbors as f64;
                vy_avg /= neighbors as f64;
                x_avg /= neighbors as f64;
                y_avg /= neighbors as f64;

                dx_to_center =
                    shortest_distance(boid.x.rem_euclid(width), x_avg.rem_euclid(width), width);
                dy_to_center =
                    shortest_distance(boid.y.rem_euclid(height), y_avg.rem_euclid(height), height);
            }

            boid.v_x += close_dx * AVOID_FACTOR
                + (vx_avg - boid.v_x) * MATCH_FACTOR
                + dx_to_center * COHESION_FACTOR;
            boid.v_y += close_dy * AVOID_FACTOR
                + (vy_avg - boid.v_y) * MATCH_FACTOR
                + dy_to_center * COHESION_FACTOR;

            let speed = (boid.v_x.powi(2) + boid.v_y.powi(2)).powf(0.5);
            let clipped_speed = MAX_SPEED.min(speed).max(MIN_SPEED);

            boid.v_x *= clipped_speed / speed;
            boid.v_y *= clipped_speed / speed;
        }

        self.render();
    }

    pub fn render(&mut self) {
        let update_fn = |boid: &mut Boid| {
            boid.x = (boid.x + boid.v_x).rem_euclid(self.width as f64);
            boid.y = (boid.y + boid.v_y).rem_euclid(self.height as f64);
            boid.theta = boid.theta()
        };
        self.boids.iter_mut().for_each(update_fn);
    }

    pub fn randomize(&mut self) {
        self.boids
            .iter_mut()
            .for_each(|boid| boid.randomize(self.width as f64, self.height as f64));
    }

    pub fn get_boids(&self) -> Vec<JsValue> {
        //To handle crossing over into the javascript boundary, we serialize the struct instead of
        //opening a Vec<Boid> downstream.
        self.boids
            .iter()
            .map(|boid| {
                to_value(boid).unwrap() // Convert Boid to JsValue (serialize)
            })
            .collect()
    }
}

#[wasm_bindgen]
#[derive(Clone, Default, Serialize, Deserialize)]
pub struct Boid {
    pub x: f64,
    pub y: f64,
    pub v_x: f64,
    pub v_y: f64,
    theta: f64,
}

#[wasm_bindgen]
impl Boid {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let mut rng = rand::thread_rng();
        let init_vx = rng.gen_range(-1.0..1.0);
        let init_vy = rng.gen_range(-1.0..1.0);
        Self {
            x: 0_f64,
            y: 0_f64,
            v_x: init_vx,
            v_y: init_vy,
            theta: init_vy.atan2(init_vx),
        }
    }

    pub fn theta(&self) -> f64 {
        self.v_y.atan2(self.v_x)
    }

    pub fn randomize(&mut self, max_x: f64, max_y: f64) {
        let mut rng = rand::thread_rng();
        let rand_x = rng.gen_range(0.0..max_x);
        let rand_y = rng.gen_range(0.0..max_y);
        let rand_vx = rng.gen_range(-1.0..1.0);
        let rand_vy = rng.gen_range(-1.0..1.0);

        self.x = rand_x;
        self.y = rand_y;
        self.v_x = rand_vx;
        self.v_y = rand_vy;
        self.theta = self.v_y.atan2(self.v_x)
    }
}

fn shortest_distance(a: f64, b: f64, size: f64) -> f64 {
    let raw_distance = b - a;
    if raw_distance > size / 2.0 {
        raw_distance - size
    } else if raw_distance < -size / 2.0 {
        raw_distance + size
    } else {
        raw_distance
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    const WIDTH: u32 = 800;
    const HEIGHT: u32 = 800;

    #[test]
    fn test_sim_initialization() {
        let s = Simulation::new(50, WIDTH, HEIGHT);
        assert_eq!(s.boids.len(), 50);

        for boid in &s.boids {
            assert_eq!(boid.x, 0_f64);
            assert_eq!(boid.y, 0_f64);
        }
    }

    #[test]
    fn test_sim_randomization() {
        let mut s = Simulation::new(50, WIDTH, HEIGHT);
        s.randomize();
        assert_eq!(s.boids.len(), 50);
    }

    #[test]
    fn test_sim() {
        let mut s = Simulation::new(50, WIDTH, HEIGHT);
        s.randomize();
        s.iterate();
        assert_eq!(s.boids.len(), 50);
    }
}
