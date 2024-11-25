FROM --platform=i386 docker.io/i386/debian:buster
ARG DEBIAN_FRONTEND=noninteractive

# Create a user and set passwords for root and user
RUN useradd -m user && echo "user:password" | chpasswd
RUN echo 'root:password' | chpasswd

# Update the package list, upgrade the system, and install curl and g++
RUN apt-get update && apt-get -y upgrade && apt-get -y install curl g++

# Set the default command to run a bash shell
CMD ["/bin/bash"]
