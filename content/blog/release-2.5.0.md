---
title: Qbs 2.5.0 released
date: '2024-12-04'
author: Christian Kandeler
---

The [Qbs build tool](http://qbs.io) version 2.5.0 is available.

Qbs is a community-driven language-agnostic build automation system. It is fast and offers an easy-to-learn language based upon QML.

## What's new

<!--more-->

### Standout features

#### Language improvements
A long-standing annoyance when writing qbs project files was that you were often forced to repeat the same condition in different contexts. For instance:

```qbs
CppApplication {
    Depends { name: "ib"; condition: qbs.targetOS.contains("darwin") }
    Properties {
        condition: qbs.targetOS.contains("darwin")
        cpp.defines: "DARWIN_FEATURES"
    }
    Group {
        name: "darwin-specific files"
        condition: qbs.targetOS.contains("darwin")
        files: [ /* ... */ ]
    }
}
```

From qbs 2.5 on, you can clean up this somewhat messy structure by using the common condition as a central grouping criterion:

```qbs
CppApplication {
    Group {
        name: "darwin-specific"
        condition: qbs.targetOS.contains("darwin")
        Depends { name: "ib" }
        product.cpp.defines: "DARWIN_FEATURES"
        files: [ /* ... */ ]
    }
}
```

The product above demonstrates two new features of the
[Group](../../docs/qml-qbslanguageitems-group) item:

* It can now contain other items, namely `Depends`, `FileTagger`, `Rule` and `Scanner`, with its condition applying implicitly to these sub-items as well.
* It can now act like a `Properties` item, conditionally setting module properties for all artifacts in the product.

Speaking of the [Properties](../../docs/qml-qbslanguageitems-properties) item, this one got a long-needed major overhaul as well. Most importantly, their conditions can now overlap so several of them can contribute to the same list property:

```qbs
Properties {
    condition: qbs.targetOS.contains("unix")
    cpp.includePaths: "myincludes/unix/common"
}
Properties {
    condition: qbs.targetOS.contains("linux")
    cpp.includePaths: "myincludes/unix/linux"
}
```

In the above example, building for a Linux target (which is also a Unix) will use both include paths, while e.g. a FreeBSD target will only use the first one. In previous versions of qbs, the second property would have had no effect, because at most one alternative was used.

Note that this means it does not make sense anymore for a top-level (list) property binding to act as an "implicit else case"; instead, it should unconditionally contribute to the property value. For backward compatibility, this particular feature will be introduced gradually. Relying on the old behavior will trigger a warning in qbs 2.6, and the semantics will change afterwards. The new way of specifying a fallback value is to use a `Properties` item with its condition set to undefined.

For even more language improvements, check the
[change log](https://download.qt.io/official_releases/qbs/2.5.0/changes-2.5.0.md).

#### C++ modules
We are excited to announce that this version of qbs also comes with experimental support for [C++ modules](https://en.cppreference.com/w/cpp/language/modules). For now, you have to turn it on
explicitly by setting the `cpp.forceUseCxxModules` property. Detailed instructions can be found [here](../../docs/tutorial-10/). Do not hesitate to file a
[bug report](https://bugreports.qt.io/projects/QBS/) if you encounter any problems.

#### WebAssembly support
As the third big new feature, we now support the [WebAssembly](https://www.w3.org/TR/wasm-core-2/)
technology via the [emscripten](https://emscripten.org/) toolchain. To this end, we have introduced
a new toolchain type `emscripten` and an associated back-end for the [cpp](../../docs/qml-qbsmodules-cpp) module. [Qt for WebAssembly](https://doc.qt.io/qt-6/wasm.html) is also
supported.

### Other noteworthy changes
Also new in this release:

* The [freedesktop](../../docs/qml-qbsmodules-freedesktop/) module now supports localization and
  deployment of more than one icon.
* The [JSON API](../../docs/json-api/) now supports renaming files.

And here are some more interesting features introduced since our last blog post:

* The [conan](../../docs/qml-qbsmoduleproviders-conan/) module provider.
* The [flatbuffers](../../docs/qml-qbsmodules-flatbuf-cpp/) module.
* The [Exporter.cmake](../../docs/qml-qbsmodules-exporter-cmake) module.
* An [LSP](https://microsoft.github.io/language-server-protocol/) server (seen in action in Qt
  Creator in the screenshot below).

![qbs_lsp](../../img/blog/qbs_lsp.png)

## Try it

Qbs is available for download on the [download page](https://download.qt.io/official_releases/qbs/2.5.0/).

Please report issues in our [bug tracker](https://bugreports.qt.io/browse/QBS/).

Join our [Discord server](https://discord.gg/zhMHvC5GNa) for live discussions.

You can use our [mailing list](https://lists.qt-project.org/mailman/listinfo/qbs) for questions and discussions.

The [documentation](https://qbs.io/docs/index.html) and [wiki](https://wiki.qt.io/Qbs) are also good places to get started.

Qbs is also available from a number of package repositories ([Chocolatey](https://chocolatey.org/packages/qbs), [MacPorts](https://www.macports.org/ports.php?by=name&substr=qbs), [Homebrew](https://formulae.brew.sh/formula/qbs)) and is updated on each release by the Qbs development team. It can also be installed through the native package management system on a number of Linux distributions. Please find a complete overview on [repology.org](https://repology.org/project/qbs/versions).

Qbs 2.5.0 is also included in Qt Creator 15.0.0.

### Contribute
If you are a happy user of Qbs, please tell others about it. But maybe you would also like to contribute something. Everything that makes Qbs better is highly appreciated. Contributions may consist of reporting bugs or fixing them right away. But also new features are very welcome. Your patches will be automatically sanity-checked, built and verified on Linux, macOS and Windows by our CI bot.
Get started with instructions in the [Qbs Wiki](https://wiki.qt.io/Qbs).

Thanks to everybody who made the 2.5 release happen:

* Aaron McCarthy
* Christian Kandeler
* Danya Patrushev
* Ivan Komissarov
* Leon Buckel
* Roman Telezhynsky