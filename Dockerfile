FROM node:latest

WORKDIR /app/server

COPY package.*json /app/server/

RUN npm i

COPY . /app/server/

EXPOSE 5000

CMD ["npm","start"]
