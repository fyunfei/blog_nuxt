FROM node:8.11.3-alpine
RUN mkdir -p /app
COPY . /app
WORKDIR /app
EXPOSE 3001
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
ENV NODE_ENV=production
ENV HOST 0.0.0.0
CMD ["npm","start"]