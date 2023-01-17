# Fueled Data Webserver!

This simple Web Server app serves a simple HTTP message.

## Running Locally

First, run the development server:

```
npm install
npm start
```

Then open your browser and go to `http://localhost:8080`

## Health check

```
GET /healthcheck
```


## Using Docker

1. Install Docker on your machine.
2. Build your container: `docker build -t webserver:latest .`
3. Run your container: `docker run -p 8080:8080 webserver:latest`.

You can view your images created with `docker images`.
