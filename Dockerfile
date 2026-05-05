FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

COPY package.json package-lock.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/index.js ./index.js

EXPOSE 8080

CMD ["npm", "start"]
