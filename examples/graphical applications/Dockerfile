FROM --platform=i386 docker.io/i386/debian:buster
ARG DEBIAN_FRONTEND=noninteractive
RUN useradd -m user && echo "user:password" | chpasswd
RUN echo 'root:password' | chpasswd
RUN apt-get update && apt-get install -y xorg
CMD [ "/bin/bash" ]
