#!/bin/bash

test() {
    echo "ya it works"
}

up() {
    npm install && docker-compose build && docker-compose up
}

down(){

}
case $@ in
    test) test
    ;;
    up) up
    ;;
    *) echo "auch! cannot resolve '$@' :("
    ;;
esac

