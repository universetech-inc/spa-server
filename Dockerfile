FROM node:lts-alpine

COPY package.json ./
COPY yarn.lock ./

RUN yarn --frozen-lockfile

COPY index.js ./

EXPOSE 3000
CMD [ "node", "index.js" ]
