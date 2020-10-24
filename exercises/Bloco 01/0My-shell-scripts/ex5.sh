#!/bin/bash
echo "Digite o path de um arquivo ou diretorio"
read path
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