FROM node:10.15-alpine

RUN apk update && apk add bash && apk add --no-cache git
COPY container/ /

# Copy app source inside the container
COPY ./ /usr/src

# Build the sources inside the container
RUN cd /usr/src && FORCE_COLOR=0 yarn install --emoji=false --no-color --no-progess --frozen-lockfile && yarn build

HEALTHCHECK --interval=10s --timeout=2s CMD /wait-for-it.sh localhost:3001 --timeout=1
ENTRYPOINT ["/autorun.sh"]
