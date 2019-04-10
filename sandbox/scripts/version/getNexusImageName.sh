#!/usr/bin/env bash

basedir=$(dirname $0)
version=$(${basedir}/getVersion.sh)
nexusData=$(cat ${basedir}/../nexus.data)
instance_name=$(cat ${basedir}/../instance_name)

echo ${nexusData}/${instance_name}:${version}