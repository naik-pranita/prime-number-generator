FROM node

MAINTAINER Pranita Naik
ENV PORT=3000

COPY . /png/www
WORKDIR /png/www
RUN  yarn


EXPOSE $PORT

ENTRYPOINT ["yarn", "start"]