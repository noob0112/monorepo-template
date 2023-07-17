FROM node:18-alpine as base

RUN npm init --yes && \
    npm install -g pnpm

FROM base as builder

USER node

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN pnpm install \
    && pnpm build \
    && rm -rf ./node_modules/.pnpm \
    && pnpm i --prod \
    && npx prisma && pnpm prisma:generate

FROM base as product

EXPOSE 2021

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json ./
COPY --chown=node:node --from=builder /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /home/node/app/.dist ./.dist

CMD [ "node", "./.dist/start.js" ]
