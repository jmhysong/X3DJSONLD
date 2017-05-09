#!/bin/sh


# Run the Test Suite

# accepts files with .x3d extension
export PROCESSORS=${PROCESSORS-8}

. ./classpath

javac RunSaxon.java
python classes.py

echo translating to json
(ls "$@" | grep -v intermediate | grep -v "\.new") | xargs -P $PROCESSORS java RunSaxon ---silent
echo translating to ecmascript 5
(ls "$@" | grep -v intermediate | grep -v "\.new") | xargs -P $PROCESSORS java RunSaxon --X3dToES5.xslt -sail.js
echo translating to java
(ls "$@" | grep -v intermediate | grep -v "\.new") | xargs -P $PROCESSORS java RunSaxon ---overwrite --X3dToJava.xslt -java
echo replacing NeedClassName
(ls "$@" | grep -v intermediate | grep -v "\.new") | xargs -P $PROCESSORS sh replaceclass.sh
echo compiling
(ls "$@" | grep -v intermediate | grep -v "\.new") | sed 's/\.x3d$/.java/' | xargs -L 1 -P $PROCESSORS javac -J-Xss1g -J-Xmx4g
echo running
(ls "$@" | grep -v intermediate | grep -v "\.new") | sed 's/\.x3d$//' | sed 's/^\.*\///' | xargs -L 1 -P $PROCESSORS  java -d64 -Xss1g -Xmx4g # sh runToError.sh
echo diffing
for NEW in `(ls "$@" | grep -v intermediate | grep -v "\.new") | sed 's/\.x3d$/.new.json/'| sed 's/\/c\/x3d-code\/www.web3d.org/www_web3d_org/'`
do
	JSON=`dirname $NEW | sed 's/www_web3d_org/\/c\/x3d-code\/www.web3d.org/' `/`basename $NEW .new.json`.json
	if [ -e $NEW ]
	then if [ -n "`${NODE} jsondiff.js $JSON $NEW`" ]
		then
			echo ================================================================================
			echo ${NODE} jsondiff.js $JSON $NEW
			${NODE} jsondiff.js $JSON $NEW
		fi
	fi
done

echo running jjs
(ls "$@" | grep -v intermediate | grep -v "\.new") | sed "s/\.x3d$/.sail.js/" | sed 's/\/c\/x3d-code\/www.web3d.org/www_web3d_org/' | xargs -L 1 -P $PROCESSORS jjs -J-Xss1g -J-Xmx4g -cp "${NASHORN_CLASSPATH}"

echo diffing
for i in `(ls "$@" | grep -v intermediate | grep -v "\.new") | sed 's/\.x3d$/.new.x3d/'| sed 's/\/c\/x3d-code\/www.web3d.org/www_web3d_org/'`
do
	X3D=`dirname $i | sed 's/www_web3d_org/\/c\/x3d-code\/www.web3d.org/' `/`basename $i .new.x3d`.X3d
	if [ -e $i ]
	then
		if [ -n "`${NODE} xmldiff.js $X3D $i`" ]
		then
			echo ================================================================================
			echo ${NODE} xmldiff.js $X3D $i
			${NODE} xmldiff.js $X3D $i
		fi
	fi
done
