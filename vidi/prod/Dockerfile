FROM mapcentia/vidi:base
MAINTAINER Martin Høgh<mh@mapcentia.com>

RUN export DEBIAN_FRONTEND=noninteractive
ENV DEBIAN_FRONTEND noninteractive


# Clone Vidi from GitHub
RUN cd  ~ &&\
	git  clone http://github.com/mapcentia/vidi.git --branch master

# Install grunt
RUN cd ~/vidi &&\
    npm install grunt-cli -g --save-dev

# Install packages
RUN cd ~/vidi &&\
	npm install

RUN cd ~/vidi/public/js/lib/bootstrap-material-design &&\
	npm install

#Add custom config files from Git repo
COPY config.js /root/vidi/config/config.js
COPY _variables.less /root/vidi/config/_variables.less

#Run Grunt
RUN cd ~/vidi &&\
    grunt production

EXPOSE 3000

# Share the source dir
VOLUME  ["/root/vidi"]
