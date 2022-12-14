FROM node:latest As development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:latest as production
ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}
ARG PORT=3001
ENV PORT=${PORT}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=prod
COPY . .
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]