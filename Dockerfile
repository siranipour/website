FROM rust:1.72-alpine AS rust-builder

RUN apk add --no-cache build-base

WORKDIR /rust-wasm

COPY boids ./

RUN cargo install wasm-pack && \
    wasm-pack build --target web

FROM node:20-alpine AS node-builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]

