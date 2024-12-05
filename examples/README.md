CheerpX examples are self-contained and demonstrate specific use cases of the technology with the simplest possible setup. All examples require a custom ext2 image to be build and a local Web server to serve the page. This directory contains a known-good configuration for `nginx` which we recommend to use for these examples.

All the following commands should be run from one of the sub-directories of this directory.

## 1. Creating the Disk Image

To create the custom ext2 disk image required for CheerpX examples, please see the official documentation on [disk image creation](https://cheerpx.io/docs/guides/custom-images). This guide walks you through creating a properly configured disk image that's fully compatible with the examples. Once your disk image is created, proceed to the next step: **Setting Up the Server**.

## 2. Setting Up the Server

Use the included `nginx.conf` file to run a server with the disk image.

### Start the Nginx Server

Run the following command to start Nginx using the provided configuration:

```bash
nginx -c ../nginx.conf -p .
```

Navigate to http://localhost:8080/ in your browser to verify the setup.

Congratulations! You've successfully created the image and set up your server. Enjoy exploring your new environment!
