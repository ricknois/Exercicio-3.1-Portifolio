#!/bin/bash
path=$1
if [ -d "$path" ]
then
    echo "é um diretorio"
elif [ -f "$path" ]
    then
    echo "é um arquivo comum"    
else
    echo "é outra coisa"
fi               
ls -l $path





