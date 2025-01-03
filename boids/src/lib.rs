use std::f64::consts::PI;

use rand::Rng;
use serde::{Serialize, Deserialize};
use serde_wasm_bindgen::to_value;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
pub struct Simulation {
    boids: Vec<Boid>,
}

#[wasm_bindgen]
impl Simulation {
    #[wasm_bindgen(constructor)]
    pub fn new(n: u32) -> Self {
        let mut boids: Vec<Boid> = vec![];
        for _ in 0..n {
            boids.push(Boid::new())
        }
        Self { boids }
    }

    pub fn iterate(&mut self) {}

    pub fn randomize(&mut self) {
        self.boids.iter_mut().for_each(|boid| boid.randomize());
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
#[derive(Serialize, Deserialize)]
pub struct Boid {
    pub x: f64,
    pub y: f64,
    theta: f64,
}

impl Boid {
    fn new() -> Self {
        let mut rng = rand::thread_rng();
        let init_theta = rng.gen_range(0.0..2_f64 * PI);
        Self {
            x: 0_f64,
            y: 0_f64,
            theta: init_theta,
        }
    }

    pub fn theta(&self) -> f64 {
        self.theta % (2_f64 * std::f64::consts::PI)
    }

    pub fn randomize(&mut self) {
        let mut rng = rand::thread_rng();
        let rand_x = rng.gen_range(0.0..1.0);
        let rand_y = rng.gen_range(0.0..1.0);
        let rand_theta = rng.gen_range(0.0..2_f64 * PI);

        self.x = rand_x;
        self.y = rand_y;
        self.theta = rand_theta;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_sim_initialization() {
        let s = Simulation::new(50);
        assert_eq!(s.boids.len(), 50);

        for boid in &s.boids {
            assert_eq!(boid.x, 0_f64);
            assert_eq!(boid.y, 0_f64);
        }
    }

    #[test]
    fn test_sim_ranomization() {
        let mut s = Simulation::new(50);
        s.randomize();
        assert_eq!(s.boids.len(), 50);
    }
}
