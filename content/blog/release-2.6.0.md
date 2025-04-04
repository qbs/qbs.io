---
title: Qbs 2.6.0 released
date: '2025-03-21'
author: Ivan Komissarov
---

The [Qbs build tool](http://qbs.io) version 2.6.0 is available.

## What's new

<!--more-->

### General

* When building only specific products via the `-p` option, dependent products
  are not necessarily built in their entirety anymore. Instead, only the artifacts
  required for the requested products are built.
* Command descriptions have been updated to show the product name as a prefix rather than a suffix,
  making the output more readable.
* The [ConanfileProbe](../../docs/qml-qbsprobes-conanfileprobe/) now supports Conan 2 and
  the [QbsDeps](https://docs.conan.io/2/reference/tools/qbs/qbsdeps.html) generator.
* In IDE mode, messages of type "error" instead of "warning" are now emitted
  for errors that would stop the build in non-IDE mode
  ([QBS-1818](https://bugreports.qt.io/browse/QBS-1818)).

### Language

* Added new `Rule` property
  [auxiliaryInputsFromDependencies](../../docs/qml-qbslanguageitems-rule/#auxiliaryInputsFromDependencies-prop).
* The `Rule` property
 [explicitlyDependsOnFromDependencies](../../docs/qml-qbslanguageitems-rule/#explicitlyDependsOnFromDependencies-prop) now matches all artifacts from the dependencies,
  not just target artifacts.
* The version requirement in a `Depends` item is now checked earlier, fixing
  the problem that a non-matching version of a library could break project
  resolving if it was found before the matching version.

### Qt Support

* Added support for `lupdate` through the new [QtLupdateRunner](../../docs/qml-qbsconvenienceitems-qtlupdaterunner/) item
([QBS-486](https://bugreports.qt.io/browse/QBS-486)).

### Apple support

* Added support for privacy manifests in frameworks
  ([QBS-1812](https://bugreports.qt.io/browse/QBS-1812)), improving compliance with Apple's
  privacy requirements.

## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/2.6.0/).

Please report issues in our [bug tracker](https://bugreports.qt.io/browse/QBS/).

Join our [Discord server](https://discord.gg/zhMHvC5GNa) for live discussions.

You can use our [mailing list](https://lists.qt-project.org/mailman/listinfo/qbs) for questions and discussions.

The [documentation](https://qbs.io/docs/index.html) and [wiki](https://wiki.qt.io/Qbs) are also good places to get started.

Qbs is also available from a number of package repositories ([Chocolatey](https://chocolatey.org/packages/qbs), [MacPorts](https://www.macports.org/ports.php?by=name&substr=qbs), [Homebrew](https://formulae.brew.sh/formula/qbs)) and is updated on each release by the Qbs development team. It can also be installed through the native package management system on a number of Linux distributions. Please find a complete overview on [repology.org](https://repology.org/project/qbs/versions).

### Contribute

If You are a happy user of Qbs, please tell others about it. But maybe you would like to contribute something. Everything that makes Qbs better is highly appreciated. Contributions may consist of reporting bugs or fixing them right away. But also new features are very welcome. Your patches will be automatically sanity-checked, built and verified on Linux, macOS and Windows by our CI bot. Get started with instructions in the [Qbs Wiki](https://wiki.qt.io/Qbs).

Thanks to everybody who made the 2.6 release happen:

* Christian Kandeler
* Ivan Komissarov
* Marcus Tillmanns
* Orgad Shaneh
* Turkaev Usman