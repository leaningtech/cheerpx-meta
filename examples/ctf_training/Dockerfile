FROM --platform=i386 docker.io/i386/debian:buster
ARG DEBIAN_FRONTEND=noninteractive
RUN useradd -m user && echo "user:password" | chpasswd
RUN echo 'root:password' | chpasswd
CMD ["/bin/bash"]
