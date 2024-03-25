# Testing Lab

## Backend

Fastify Server

### Set your environment variable

```
cd backend
cp .env.sample .env
```

### Development

run a mongo container
```
docker run -d -p 27017:27017 mongo
```

start development mode
```
npm run dev
```

## Frontend

React (by vite)

start development mode
```
cd frontend
npm run dev
```