---
title: Qbs 2.6.1 released
date: '2025-04-11'
author: Ivan Komissarov
---

The [Qbs build tool](http://qbs.io) version 2.6.1 is available.

## What's new

<!--more-->

This is a minor bugfix release that contains several fixes:

* Fixed behavior of `SubProject.inheritProperties` ([QBS-1836](https://bugreports.qt.io/projects/QBS/issues/QBS-1836)).
* Fixed generating iOS codesign entitlements ([QBS-1826](https://bugreports.qt.io/projects/QBS/issues/QBS-1826)).
* Fixed Qt module provider when multiple qmake binaries are present in PATH.

Sources, binaries, etc can be found [here](https://download.qt.io/official_releases/qbs/2.6.1/).

Also, Qbs binaries are available via different package managers such as
[Chocolatey](https://community.chocolatey.org/packages/qbs),
[Brew](https://formulae.brew.sh/formula/qbs), [macports](https://ports.macports.org/port/qbs/) and
[others](https://repology.org/metapackage/qbs/versions).

### Contributors
Thanks to everybody who made the 2.6.1 release happen:

* Christian Kandeler
* Ivan Komissarov