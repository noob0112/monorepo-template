FROM node:18-alpine as builder

RUN npm init --yes && \
    npm install -g pnpm

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json ./

COPY --chown=node:node . .

RUN pnpm install \
    && pnpm prisma:generate \
    && pnpm build
RUN pnpm install --prod  --force

FROM node:18-alpine as product

EXPOSE 2021

RUN npm init --yes && \
    npm install -g pnpm

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json ./
COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/app/.dist ./.dist

CMD [ "node", "./.dist/start.js" ]
