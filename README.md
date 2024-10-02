<h1><img src="assets/logotype.svg" alt="CheerpX" height="96"></h1>

[![Discord server](https://img.shields.io/discord/988743885121548329?color=%237289DA&logo=discord&logoColor=ffffff)](https://discord.leaningtech.com)
[![GitHub Issues](https://img.shields.io/github/issues/leaningtech/cheerpx-meta.svg)](https://github.com/leaningtech/cheerpX-meta/issues)
[![npm](https://img.shields.io/npm/v/cheerpx)](https://npm.im/cheerpx)

CheerpX enables running X86 binary applications and libraries in the browser within a secure WebAssembly sandbox.

[Documentation](https://cheerpx.io/docs)
[Issues](https://github.com/leaningtech/cheerpx-meta/issues)
[Discord server](https://discord.leaningtech.com)

## What is CheerpX?

CheerpX is a powerful X86 virtualization library designed to run unmodified binary applications and libraries in the browser. It leverages a WebAssembly-based sandbox and standard browser APIs to ensure security, even when executing untrusted code. CheerpX supports Linux-compatible system calls and can run many common applications, including complete Linux distributions.

CheerpX features an advanced Just-In-Time compiler that dynamically translates X86 code to WebAssembly as needed. This engine is highly robust, capable of handling dynamically generated and self-modifying code.

To see CheerpX in action, visit [WebVM](https://webvm.io) for shell access to a complete Debian machine running in the browser.

## Limitations

 * Currently, only 32-bit x86 binaries are supported. Future updates will include support for 64-bit binaries and other architectures.
 * 3D accelerated graphics are not yet supported.

## Licensing

CheerpX is proprietary software and it's free to use only for personal and open-source projects. Commercial support, feature fast tracking, sponsored development and consulting packages are available for Enterprise customers.
