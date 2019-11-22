FROM node:10-alpine

WORKDIR /usr/app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4545 

CMD ["npm","start"]