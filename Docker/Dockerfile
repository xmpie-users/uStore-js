FROM node:16.3.0

WORKDIR /app

COPY ["./", "./"]

WORKDIR /app/src

RUN npm cache clean --force
RUN npm install --legacy-peer-deps
RUN npm install css-loader --save-dev
RUN npm install style-loader --save-dev

ENV PORT=5000
ENV PATH /node_modules/.bin:$PATH

EXPOSE 5000

CMD ["npm", "start", "--", "server={YOUR_SERVER_IP_OR_DOMAIN}"]