#!/usr/bin/env bash

shopt -s nullglob

pushd _qbs/doc || exit 1
qdoc qbs-hugo.qdocconf --outputdir=../../../content/docs
popd || exit 1

for f in ../content/docs/*.html
do
    echo "Postproc $f"
    ./adjust.py "$f" || exit 1
done

mv ../content/docs/index.html ../content/docs/_index.html
