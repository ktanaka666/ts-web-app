FROM node:10.16.0-alpine

WORKDIR /var/www

RUN apk --no-cache add git

COPY ./api/package.json .
COPY ./api/yarn.lock .
COPY ./api/nodemon.json .
COPY ./api/tsconfig.json .
COPY ./api/src .

RUN yarn

CMD yarn dev
