FROM node

RUN mkdir /app

WORKDIR /app

COPY . .

EXPOSE 5678

CMD [ "pnpm", "start" ]