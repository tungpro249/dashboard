FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5000

ENV NODE_ENV=development
ENV WATCHPACK_POLLING=true

CMD ["npm", "run", "dev"]