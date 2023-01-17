This is a [Next.js](https://nextjs.org/) project that connects with a backend service and displays the message on the page

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Health check

```
GET /api/healthcheck
```

## Build and run Production

```bash
npm run build
npm start
```

## Using Docker

1. Install Docker on your machine.
2. Build your container: `docker build -t webfrontend:latest ..`
3. Run your container: `docker run -p 3000:3000 webfrontend:latest`.

To pass in the base url of the backend service run your container with `-e API_BASE_URL='http://localhost:9000`.

```
docker run -e API_BASE_URL='http://localhost:9000 -p 3000:3000 webfrontend:latest
```

You can view your images created with `docker images`.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
