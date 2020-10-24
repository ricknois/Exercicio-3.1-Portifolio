#!/bin/bash
path="/Users/ricksousa/Documents/teste.txt"
if [ -e "$path" ]
    then   
        echo "O caminho $path está habillitado!"
fi
if [ -w "$path" ]
    then
        echo "Voce nao tem permissão"
    else
        echo "voce tem permissão"       
        fi 