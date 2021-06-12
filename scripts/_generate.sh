#!/usr/bin/env bash

shopt -s nullglob

export QT_INSTALL_DOCS=/home/jpontaoski/kde/qt5/doc
export QBS_VERSION=master
export QBS_VERSION_TAG=master

pushd _qbs/doc || exit 1
qdoc qbs-hugo.qdocconf --outputdir=../../../content/docs
popd || exit 1

echo "postprocessing with adjust.mjs..."

./adjust.mjs ../content/docs/*.html || exit 1

mv ../content/docs/index.html ../content/docs/_index.html
