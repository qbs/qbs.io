---
title: Qbs 2.5.1 released
date: '2024-01-28'
author: Ivan Komissarov
---

The [Qbs build tool](http://qbs.io) version 2.5.1 is available.

## What's new

<!--more-->

This is a minor bugfix release that contains some fixes such as:

* Fixed use of wrong declaration when looking up properties via the parent item
  ([QBS-1821](https://bugreports.qt.io/projects/QBS/issues/QBS-1821)).
* Fixed crash when resolving Probes.

Sources, binaries, etc can be found
[here](https://download.qt.io/official_releases/qbs/2.5.1/).

This release of qbs is also part of Qt Creator 15.0.1.

Also, Qbs binaries are available via different package managers such as
[Chocolatey](https://community.chocolatey.org/packages/qbs),
[Brew](https://formulae.brew.sh/formula/qbs), [macports](https://ports.macports.org/port/qbs/) and
[others](https://repology.org/metapackage/qbs/versions).

### Contributors
Thanks to everybody who made the 2.5.1 release happen:

* Christian Kandeler
* Ivan Komissarov