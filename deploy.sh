#!/usr/bin/env sh

set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

 git push -f git@github.com:OneEyed1366/3d-modelling.git master:gh-pages

cd -
