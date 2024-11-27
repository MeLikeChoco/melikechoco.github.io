FROM node:lts-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV PORT=80

EXPOSE 80

CMD sh -c "pnpm build && pnpm test pipes section tooltip services in-view stylesheet"