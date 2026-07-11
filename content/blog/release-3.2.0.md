---
title: Qbs 3.2 released
date: '2026-03-12'
author: Christian Kandeler
---

The [Qbs build tool](http://qbs.io) version 3.2.0 is available.

## What's new

<!--more-->

### General
* Fixed restoring integer configuration values ([QBS-1739](https://bugreports.qt.io/browse/QBS-1739)).
* Fixed resources location detection when Qbs is called via symlink on macOS
  ([QBS-1873](https://bugreports.qt.io/browse/QBS-1873)).
* Updated QuickJS to version 0.11.0.
* Fixed missing TLS plugins in Qbs build with bundled Qt.

### Language
* The `SubProject` item can now override properties of a loaded `Product` item
  ([QBS-1661](https://bugreports.qt.io/browse/QBS-1661)).
* Module properties provided via the command line are now considered when evaluating
  the respective module's condition ([QBS-1841](https://bugreports.qt.io/browse/QBS-1841)).

### C/C++ support
* Added an `ObjectLibrary` item ([QBS-1834](https://bugreports.qt.io/browse/QBS-1834)).
* Added a `CppLibrary` convenience item.
* Added support for C++26.
* Added a `cpp.rpathLinkDirs` property ([QBS-1501](https://bugreports.qt.io/browse/QBS-1501)).
* With MSVC, manifest files are now also generated for DLLs
  ([QBS-1857](https://bugreports.qt.io/browse/QBS-1857)).

### Apple
* Added support for IconComposer icons ([QBS-1871](https://bugreports.qt.io/browse/QBS-1871)).
* Updated dmgbuild to fix an issue with background images on macOS Tahoe 26.2
  ([QBS-1872](https://bugreports.qt.io/browse/QBS-1872)).
* Fixed provisioning profiles location with XCode 26
  ([QBS-1875](https://bugreports.qt.io/browse/QBS-1875)).

## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/3.2.0/).

Please report issues in our [bug tracker](https://bugreports.qt.io/browse/QBS/).

Join our [Discord server](https://discord.gg/zhMHvC5GNa) for live discussions.

You can use our [mailing list](https://lists.qt-project.org/mailman/listinfo/qbs) for questions and discussions.

The [documentation](https://qbs.io/docs/index.html) and [wiki](https://wiki.qt.io/Qbs) are also good places to get started.

Qbs is also available from a number of package repositories ([Chocolatey](https://chocolatey.org/packages/qbs), [MacPorts](https://www.macports.org/ports.php?by=name&substr=qbs), [Homebrew](https://formulae.brew.sh/formula/qbs)) and is updated on each release by the Qbs development team. It can also be installed through the native package management system on a number of Linux distributions. Please find a complete overview on [repology.org](https://repology.org/project/qbs/versions).

### Contribute

If you are a happy user of Qbs, please tell others about it.
Maybe you would even like to contribute something yourself?
Everything that makes Qbs better is highly appreciated.
Contributions may consist of reporting bugs or fixing them right away, but new features are also
very welcome.
Your patches will be automatically sanity-checked, built and verified on Linux, macOS and Windows by our CI bot.
Get started with instructions in the [Qbs Wiki](https://wiki.qt.io/Qbs).

Thanks to everybody who made the 3.2.0 release happen:

* Björn Schäpers
* Christian Kandeler
* Denis Shienkov
* Ivan Komissarov
