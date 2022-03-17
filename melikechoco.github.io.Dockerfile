FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./

COPY .yarn/releases ./.yarn/releases

RUN yarn install

COPY . .

ENV PORT=80

EXPOSE 80

CMD sh -c "yarn build && yarn test pipes section tooltip services in-view stylesheet"