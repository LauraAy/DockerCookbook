FROM node: 16

WORKDIR /YWC-api
COPY package.json
RUN nmp install
COPY . .
CMD npm start