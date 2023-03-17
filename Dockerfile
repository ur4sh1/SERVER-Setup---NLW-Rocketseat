FROM node:18-alpine
WORKDIR /home/server && chown -R
COPY package.json tsconfig.json .env ./
COPY prisma ./
RUN npm install
RUN npx prisma migrate dev
COPY . .
EXPOSE 3333
CMD [ "npm","run","dev" ]

