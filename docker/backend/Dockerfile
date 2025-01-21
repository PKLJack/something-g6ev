FROM docker.io/library/php:8.4-apache-bookworm AS final
ARG ini=production

## Install
RUN apt update && apt upgrade -y


## Update php.ini
RUN mv "$PHP_INI_DIR/php.ini-${ini}" "$PHP_INI_DIR/php.ini"


COPY ./backend .
