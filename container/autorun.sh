#!/usr/bin/env bash

# Read possible environment files in the root folder (docker configs attached to this container).
envFiles=$(ls /*.env)
if [ "${envFiles}" != "" ]; then
  for file in ${envFiles}
  do
    echo "Including environment values from ${file}"
    cat ${file}
    echo "********"
    source ${file}
  done
fi

/waitForDependencies.sh

(cd /usr/src/ && yarn start ) 2>&1
