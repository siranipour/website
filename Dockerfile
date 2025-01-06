FROM rust:1.83-alpine AS rust-builder

RUN apk add --no-cache build-base

WORKDIR /rust-wasm

COPY boids ./boids

RUN cargo install wasm-pack && \
    wasm-pack build --target web boids

FROM node:23-alpine AS node-builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

COPY --from=rust-builder /rust-wasm/boids/pkg /app/boids/pkg

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]

