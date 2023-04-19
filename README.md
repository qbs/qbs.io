<!--
SPDX-FileCopyrightText: 2023 Janet Blackquill <uhhadd@gmail.com>

SPDX-License-Identifier: CC0-1.0
-->

# qbs.io

## Preparing the build

qbs.io is built with Hugo; refer to [Hugo docs](https://gohugo.io/getting-started/usage/) for how to build it.
Before building with Hugo, do the following:

- run `yarn` in the repo root to install the node packages
- initialize submodules to check out Qbs docs (`git submodule update --init`)
- run `./_generate.sh` in the scripts subdirectory to compile qbs qdocs and process them for hugo
