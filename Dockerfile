FROM node:18

WORKDIR /client

COPY package.json package-lock.json ./
RUN npm i

CMD npm run start
