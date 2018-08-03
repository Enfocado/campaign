FROM mysql:5.7

ENV MYSQL_DATABASE campaign
ENV MYSQL_USER root
ENV MYSQL ALLOW_EMPTY_PASSWORD yes

ADD schema/schema.sql /docker-entrypoint-initdb.d
