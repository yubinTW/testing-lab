# Build stage for compiling assets, etc.
FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage with Nginx to serve static files and proxy /api requests
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /app/nginx.conf  
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
