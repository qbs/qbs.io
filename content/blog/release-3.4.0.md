---
title: Qbs 3.4 released
date: '2026-11-12'
author: Christian Kandeler
---

The [Qbs build tool](http://qbs.io) version 3.4.0 is available. 

## What's new

<!--more-->

### General
* A new tool [qbs-init](https://qbs.io//docs/cli-init) was added. 
  It creates a Qbs project from scratch.
* The [list-products](https://qbs.io//docs/cli-list-products) command has a new `--tags` option.
* The [run](https://qbs.io//docs/cli-run) command now releases the build graph, allowing a 
  concurrent re-build.
* The bundled [QuickJS-NG](https://github.com/quickjs-ng/quickjs) was updated to version 0.16.2.

### Language
We improved [scanners](https://qbs.io//docs/qml-qbslanguageitems-scanner): They can now 
attach properties to artifacts. These can then be accessed from rules via the new 
[scannerId](https://qbs.io//docs/qml-qbslanguageitems-scanner/#scannerId-prop) property.

### C/C++ support
* We improved our [modules](https://qbs.io//docs/tutorial-10) support:
  * Internal partitions can now be imported into implementation units.
  * Various mis-parsing were fixed that caused spurious detection of module and import statements.
* The [cpp.linkerVariant](https://qbs.io//docs/qml-qbsmodules-cpp/#linkerVariant-prop) now supports 
  the [wild linker](https://github.com/wild-linker/wild).
* Added the new [cpp.pchDependsOnSystemHeaders](https://qbs.io//docs/qml-qbsmodules-cpp/#pchDependsOnSystemHeaders-prop) 
  property to prevent pre-compiled headers breaking the build after a toolchain update.
* We now support `.def` files with the `MinGW` toolchain 
  ([QBS-1869](https://qt-project.atlassian.net/browse/QBS-1869)).

### Qt Support
* We adapted to the introduction of C++ modules support for [moc](https://doc.qt.io/qt-6/moc.html) 
  in Qt 6.13.
* QML modules are now properly supported via the new 
  [QmlModule](https://qbs.io//docs/qml-qbsconvenienceitems-qmlmodule) item.

### Code signing
There were a number of improvements in this area, namely:
  * Code signing support was added to BareMetal as well as the 
    [wix](https://qbs.io//docs/qml-qbsmodules-wix) module.
  * Signing can now be done via the [osslsigncode](https://github.com/mtrojnar/osslsigncode) tool.
  * The [NSIS](https://qbs.io//docs/qml-qbsmodules-nsis/) and 
    [InnoSetup](https://qbs.io//docs/qml-qbsconvenienceitems-innosetup/) installers 
    can now be signed.
  * Binaries created with `MinGW` can now be signed.

## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/3.4.0/).

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

Thanks to everybody who made the 3.4.0 release happen:

* Christian Kandeler
* Denis Shienkov
* Heiko Nardmann
* Ivan Komissarov
* Roman Telezhynskyi
