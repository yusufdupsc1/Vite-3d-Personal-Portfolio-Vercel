# syntax=docker/dockerfile:1.7

# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app

ENV CI=true

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Production stage ---
FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
