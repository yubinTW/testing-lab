# Build stage
FROM node:16-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Assuming this compiles TypeScript or similar

# Production stage
FROM node:16-alpine AS production-stage
WORKDIR /app
COPY --from=build-stage /app/package*.json ./
RUN npm install --only=production
COPY --from=build-stage /app/dist ./dist
EXPOSE 8888
CMD ["node", "dist/index.js"]
