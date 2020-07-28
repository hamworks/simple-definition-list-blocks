#!/usr/bin/env bash

set -ex

if [ $# -lt 2 ]; then
	echo "usage: $0 <plugin-name> <version>"
	exit 1
fi

pluginname=$1
version=$2

if [ ! `echo $version | grep -e 'alpha' -e 'beta' -e 'RC' -e 'rc'` ] ; then
  sed -i.bak -e "s/^Stable tag: .*/Stable tag: ${version}/g" readme.txt;
fi
rm readme.txt.bak

sed -i.bak -e "s/^ \* Version: .*/ * Version: ${version}/g" ${pluginname}.php;
sed -i.bak -e "s/^ \* @version .*/ * @version ${version}/g" ${pluginname}.php;

rm ${pluginname}.php.bak
npm install
npm run build

rsync -a --exclude-from=.distignore ./ ./nightly/

rm -rf build

