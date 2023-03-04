FROM node:15.11.0-alpine
RUN mkdir /app
WORKDIR /app # 기본 경로 설정
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --no-cache
COPY . /app
CMD ["npm", "run", "server"]
