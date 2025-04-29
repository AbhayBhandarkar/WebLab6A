FROM node:21-slim

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]
