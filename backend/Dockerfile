FROM node:10.16.0-alpine

RUN npm install -g yarn && yarn global add knex && yarn global add pm2

WORKDIR /usr/app

# COPY package*.json ./

# RUN yarn install

# COPY . .

USER node

EXPOSE 3000

# CMD ["yarn", "start"]