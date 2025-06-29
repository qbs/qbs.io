---
title: Qbs 3.0 released
date: '2025-06-27'
author: Christian Kandeler
---

The [Qbs build tool](http://qbs.io) version 3.0.1 is available. Note that this is
the first release in the 3.0 series, as we skipped 3.0.0 due to a relase management
hiccup.

## What's new

<!--more-->

### General

* There are two improvements related to handling errors during project resolving, a general one and
  a concrete one: The first is that we now print a sort of stack trace, hopefully giving users a
  better idea about what is going wrong. The second is that we now properly diagnose infinite
  recursions in property bindings instead of triggering a crash
  (https://bugreports.qt.io/browse/QBS-1793).
* The JavaScript backend was switched to the actively maintained
  [QuickJS-NG](https://github.com/quickjs-ng/quickjs).


### Language
* Relative paths in [Export](https://doc.qt.io/qbs/qml-qbslanguageitems-export.html) items are now
  resolved relative to the importing product, rather than the exporting one.
* Top-level list property assignments no longer act as fallbacks for
  [Properties](https://doc.qt.io/qbs/qml-qbslanguageitems-properties.html) items, but
  unconditionally contribute to the aggregate value of the property.
* We added a new property
  [minimal](https://doc.qt.io/qbs/qml-qbslanguageitems-depends.html#minimal-prop) to the `Depends`
  item. It controls whether the dependency should get built in its entirety or only as far as
  needed by the rules in the depending product.

### API
* It is now possible to [add dependencies](https://doc.qt.io/qbs/json-api.html#adding-dependencies)
  to a product.

### C/C++ support
* We added support for C++ standard library modules ("import std;" and "import std.compat;").
* We fixed support for arm64/armv7 with MSVC.
* We fixed the [Conan module provider]( https://doc.qt.io/qbs/qml-qbsmoduleproviders-conan.html)
  for the case of multiple values in an array.

### Qt Support
* A new module [Qt.shadertools]( https://doc.qt.io/qbs/qml-qbsmodules-qt-shadertools.html) was added.
* moc now uses response files, if necessary.

### Apple support
* The [bundle module](https://doc.qt.io/qbs/qml-qbsmodules-bundle.html) now uses file tags
  instead of properties to collect header and resource files
  (https://bugreports.qt.io/browse/QBS-1726).


## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/3.0.1/).

Please report issues in our [bug tracker](https://bugreports.qt.io/browse/QBS/).

Join our [Discord server](https://discord.gg/zhMHvC5GNa) for live discussions.

You can use our [mailing list](https://lists.qt-project.org/mailman/listinfo/qbs) for questions and discussions.

The [documentation](https://qbs.io/docs/index.html) and [wiki](https://wiki.qt.io/Qbs) are also good places to get started.

Qbs is also available from a number of package repositories ([Chocolatey](https://chocolatey.org/packages/qbs), [MacPorts](https://www.macports.org/ports.php?by=name&substr=qbs), [Homebrew](https://formulae.brew.sh/formula/qbs)) and is updated on each release by the Qbs development team. It can also be installed through the native package management system on a number of Linux distributions. Please find a complete overview on [repology.org](https://repology.org/project/qbs/versions).

### Contribute

If you are a happy user of Qbs, please tell others about it.
But maybe you would like to contribute something.
Everything that makes Qbs better is highly appreciated.
Contributions may consist of reporting bugs or fixing them right away.
But also new features are very welcome.
Your patches will be automatically sanity-checked, built and verified on Linux, macOS and Windows by our CI bot.
Get started with instructions in the [Qbs Wiki](https://wiki.qt.io/Qbs).

Thanks to everybody who made the 3.0.1 release happen:

* Christian Kandeler
* Danya Patrushev
* Ivan Komissarov
* Richard Weickelt
