FROM nginx:stable-alpine

WORKDIR /usr/src/app

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
