#!/usr/bin/env bash
# Check Yarn Installed
# Check none of these directories exist

command -v yarn >/dev/null 2>&1 || { echo >&2 "I require yarn but it's not installed.  Aborting."; exit 1; }

for i in connect-hooks connect-only hooks-only
do
    if [ -d "./$i" ]
    then
        echo "Error: Directory $i already exists.  Please delete it."
        echo "Copy and paste: "
        echo "rm -rf connect-hooks connect-only hooks-only"
        exit 1
    fi
done

for i in connect-hooks connect-only hooks-only
do
    yarn create react-app $i
    cd $i
    yarn add redux react-redux
    cd ..
    cp -R src/base/* $i/src/
done

## Connect-only: Already set up, since src/base/ only uses hooks
## Hooks-only: Overwrite all containers
cp src/hooks/containers/* hooks-only/src/containers/
## Connect-hooks: Overwrite FilterLink only which uses useDispatch and useSelector
cp src/hooks/containers/FilterLink.js connect-hooks/src/containers/

## All 3 should be set up properly
## Now build

for i in connect-hooks connect-only hooks-only
do
    cd $i
    yarn build
    cd ..
done

### Show file sizes
find . -name "*chunk.js" | grep -v node_modules | xargs ls -l
