#baseline
FROM node:14-alpine AS base
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

# client build
FROM base AS builder-client
WORKDIR /home/node/app
COPY --chown=node:node . ./
USER node
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]