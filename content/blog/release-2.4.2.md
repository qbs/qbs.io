---
title: Qbs 2.4.2 released
date: '2024-10-01'
author: Ivan Komissarov
---

The [Qbs build tool](http://qbs.io) version 2.4.2 is available.

## What's new

<!--more-->

This is a minor bugfix release that contains several important fixes:

* Fixed possible crash when exiting Qbs Session ([QBS-1803](https://bugreports.qt.io/projects/QBS/issues/QBS-1803)).
* Fixed possible "undefined" value passed to the filterFunction in ProcessCommandExecutor.
* Undefined module properties are now omitted in JSON API.

Sources, binaries, etc can be found
[here](https://download.qt.io/official_releases/qbs/2.4.2/).

This release of qbs is also part of Qt Creator 14.0.2.

Also, Qbs binaries are available via different package managers such as
[Chocolatey](https://community.chocolatey.org/packages/qbs),
[Brew](https://formulae.brew.sh/formula/qbs), [macports](https://ports.macports.org/port/qbs/) and
[others](https://repology.org/metapackage/qbs/versions).

### Contributors
Thanks to everybody who made the 2.4.2 release happen:

* Christian Kandeler
* Ivan Komissarov