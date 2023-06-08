FROM node:latest

RUN mkdir app
WORKDIR /app
RUN npm install -g http
RUN apt update
RUN apt install vim git -y

CMD node index.mjs