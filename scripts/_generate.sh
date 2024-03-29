#!/usr/bin/env bash

shopt -s nullglob

export QMAKE_PATH=${QMAKE_PATH:-$(which qmake)}

export QT_INSTALL_DOCS=${QT_INSTALL_DOCS:-}

if [ -z "${QT_INSTALL_DOCS}" ]; then
    if [ -z "${QMAKE_PATH}" ]; then
        echo "Either QT_INSTALL_DOCS must be set or qmake should be in PATH"
        exit 1
    else
        QT_INSTALL_DOCS="$(qmake -query QT_INSTALL_DOCS)"
        export QT_INSTALL_DOCS
    fi
fi

QBS_VERSION=$(cat _qbs/VERSION)
export QBS_VERSION
export QBS_VERSION_TAG=${QBS_VERSION//[.-]/}

pushd _qbs/doc || exit 1
qdoc qbs-hugo.qdocconf --outputdir=../../../content/docs
popd || exit 1

echo "postprocessing with adjust.mjs..."

./adjust.mjs ../content/docs/*.html || exit 1

mkdir -p ../static/img/docs/ || exit 1

mv ../content/docs/index.html ../content/docs/_index.html
mv ../content/docs/images/* ../static/img/docs/
