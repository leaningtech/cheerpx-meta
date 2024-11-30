This README will guide you through creating a custom disk image using a Dockerfile and converting it into an ext2 image for use with tools like CheerpX. By the end of this guide, you'll have a custom disk image ready for use. Follow the steps below to get started.

## 1. Creating the Disk Image

### Step 1.1: Build the Docker Image

Use the provided Dockerfile to build the Docker image. Run the following command in the same directory as the Dockerfile:

```bash
buildah build -f Dockerfile --platform linux/i386 -t cheerpximage
```

This creates a Docker image named `cheerpximage`.

### Step 1.2: Create a Container

Create a container from the newly built image:

```bash
podman create --name cheerpxcontainer cheerpximage
```

### Step 1.3: Extract the Filesystem

Create a directory to store the container's filesystem:

```bash
mkdir cheerpXFS
```

Copy the filesystem from the container into the directory:

```bash
podman unshare podman cp cheerpxcontainer:/ cheerpXFS/
```

`podman unshare` ensures proper permissions are maintained during the copy process.

### Step 1.4: Create an ext2 Image

Convert the extracted filesystem into an ext2 disk image:

```bash
podman unshare mkfs.ext2 -b 4096 -d cheerpXFS/ cheerpXImage.ext2 600M
```

### Step 1.5: Clean Up Resources

Once the disk image is created, remove unused resources to save space:

```bash
podman rm cheerpxcontainer
buildah rmi cheerpximage
rm -rf cheerpXFS
```

## 2. Setting Up the Server

Use the included `nginx.conf` file to run a server with the disk image.

### Start the Nginx Server

Run the following command to start Nginx using the provided configuration:

```bash
nginx -c nginx.conf -p .
```

Navigate to http://localhost:8080/ in your browser to verify the setup.

Congratulations! You've successfully created the image and set up your server. Enjoy exploring your new environment!

For detailed instructions on creating a disk or configuring your setup, visit our [guides](https://cheerpx.io/docs/guides).