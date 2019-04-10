#!/usr/bin/env bash

basedir=$(dirname $0)

instance_name=$(cat ${basedir}/../../settings.gradle | grep "rootProject.name" | cut -d\= -f2 | tr -d '[:space:]'| tr -d '"')

echo ${instance_name}
