# pull official base image
FROM node:13.12.0-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn --silent
#RUN yarn add react-scripts@3.4.1 -g --silent
COPY . ./
RUN yarn build
# add app

#COPY build/ /usr/share/nginx/html
# start app
#CMD ["yarn", "start"]


# pull official base image
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]