# Use the specified base image
FROM --platform=i386 docker.io/i386/debian:buster
ARG DEBIAN_FRONTEND=noninteractive

# Create a user and set passwords
RUN useradd -m user && echo "user:password" | chpasswd
RUN echo 'root:password' | chpasswd

# Install Python
RUN apt-get update && apt-get install -y python3

# Set the default command
CMD [ "/bin/bash" ]
