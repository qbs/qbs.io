---
title: Qbs 3.3 released
date: '2026-06-17'
author: Christian Kandeler
---

The [Qbs build tool](http://qbs.io) version 3.3.0 is available.

## What's new

<!--more-->

### Language
* Scanner items now participate in change tracking ([QBS-1092](https://bugreports.qt.io/browse/QBS-1092)).

### C/C++ support
* Introduced new [cpp.libraries](../../docs/qml-qbsmodules-cpp/#libraries-prop) property
  ([QBS-1157](https://bugreports.qt.io/browse/QBS-1157)).
* Added support for clang's `-ftime-trace` flag via the
  [cpp.enableTimeTrace](../../docs/qml-qbsmodules-cpp/#enableTimeTrace-prop) property.
* Static linking on Unix systems will now use response files if necessary
  ([QBS-751](https://bugreports.qt.io/browse/QBS-751)).
* Added support for the `LoongArch` architecture.
* Fixed WebAssembly support for emscripten >= 3.1.68
  ([QBS-1876](https://bugreports.qt.io/browse/QBS-1876)).

### Qt support
* Moc scanner now supports the `Q_NAMESPACE_EXPORT` macro.

### Apple
* Fixed installation of code-signed static frameworks on macOS 26.

## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/3.3.0/).

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

Thanks to everybody who made the 3.3.0 release happen:

* Christian Kandeler
* Ivan Komissarov
* Maximilian Hrabowski
* Pino Toscano
* Thorbjørn Lindeijer
