---
title: Qbs 3.1 released
date: '2025-10-13'
author: Christian Kandeler
---

The [Qbs build tool](http://qbs.io) version 3.1.0 is available. 

## What's new

<!--more-->

### General
* Three new convenience modules were added to help with customizing non-trivial projects:
  [config.build](https://doc.qt.io/qbs/qml-qbsmodules-config-build.html), 
  [config.install](https://doc.qt.io/qbs/qml-qbsmodules-config-install.html), and 
  [installpaths](https://doc.qt.io/qbs/qml-qbsmodules-config-install.html).
* Somewhat related to the above, the 
  [install](https://doc.qt.io/qbs/qml-qbsconvenienceitems-application.html#install-prop)
  property in various convenience items now defaults to `true`.
* There is now an [errorString](https://doc.qt.io/qbs/jsextension-process.html#errorstring)
  method in the `Process` service.
* The [vcs](https://doc.qt.io/qbs/qml-qbsmodules-vcs.html) module now supports the
  [Mercurial tool](https://www.mercurial-scm.org). It also received three new properties:
  [repoLatestTag](https://doc.qt.io/qbs/qml-qbsmodules-vcs.html#repoLatestTag-prop),
  [repoCommitsSinceTag](https://doc.qt.io/qbs/qml-qbsmodules-vcs.html#repoCommitsSinceTag-prop), and
  [repoCommitSha](https://doc.qt.io/qbs/qml-qbsmodules-vcs.html#repoCommitSha-prop).
* Qbs now displays installation info during the build process, showing which files
  are getting installed where.
* A [Graphviz](https://graphviz.org) generator was added to visualize project structures.
* The bundled [QuickJS-NG](https://github.com/quickjs-ng/quickjs) was updated to version 0.10.1.

### Language
* Expansion of wildcards appearing on the right-hand side of a `files` property is now
  done in a case-sensitive manner on non-Windows hosts (https://bugreports.qt.io/browse/QBS-1844).

### C/C++ support
* The [CppStd](https://doc.qt.io/qbs/qml-qbsconvenienceitems-cppstd.html) convenience item was 
  introduced to be able to use the `std.cppm` C++ module without having to build it for every product.

### Qt Support
* Fixed iOS support with Qt >= 6.8 (https://bugreports.qt.io/browse/QBS-1839).

### Apple support
* Added support for Xcode 26.0.
* Added support for embedding dependencies into a bundle.

### API
* The LSP support was extended to implement "go to definition" for module names, module properties,
  user-defined items and the content of the 
  [files](https://doc.qt.io/qbs/qml-qbslanguageitems-product.html#files-prop) and 
  [references](https://doc.qt.io/qbs/qml-qbslanguageitems-project.html#references-prop) properties.

## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/3.1.0/).

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

Thanks to everybody who made the 3.1.0 release happen:

* Christian Kandeler
* Ivan Komissarov
* Jan Blackquill
* Pino Toscano
* Roman Telezhynskyi
