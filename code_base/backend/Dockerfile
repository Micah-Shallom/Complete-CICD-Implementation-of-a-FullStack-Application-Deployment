FROM node:19-alpine3.16 as deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./ 

RUN npm ci


FROM node:19-alpine3.16

COPY . /app

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

EXPOSE 8080

CMD ["npm", "start"]
