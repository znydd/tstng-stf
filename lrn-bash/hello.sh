#!/usr/bin/env bash

for Output in ./*.txt 
do
    cat "$Output"
done

for Variable in {A..Z}
do
    echo "$Variable"
done

content=$(cat file.txt)
echo -e "This is the content:\n $content"
cat file.txt
ls -R

echo "Hello world"; echo "Hello Bitch"

x="shebang boi yee, waht the hell" # not x = "shebang" nor x ="shebang" so space sensitive

echo $x
echo "$x ppepep mew"
echo '$x ppepep mew'
echo "${x/boi/boy}"

var="Nabil"

echo "${var:0:4}" # slice
echo "${var: -2}" # reverse slice
echo "${#var}" # length

y="x"

echo "${!y}" # it will show the value of 'x'

arr=(1 2 3 4 5 6)

echo "${arr[2]}"
echo "${arr[@]}" # whole array
echo "${#arr[@]}" # array length
echo "${arr[@]:1:4}" # array slice

for item in "${arr[@]}";
do
    echo "${item}"
done

# There are some useful built-in variables, like:
echo "Last program's return value: $?"
echo "Script's PID: $$"
echo "Number of arguments passed to script: $#"
echo "All arguments passed to script: $@"
echo "Script's arguments separated into different variables: $1 $2..."

echo {1..8}
echo {A..Z}


echo "i am in $(pwd)"
echo "i am in $PWD"

echo "What is your name?"
#read name # no need to declaration this is the declaration
#echo "$name"
echo "$USER"

# if [[ "$name" != "$USER" ]];
# then
#     echo "Your name isn't your username"
# else
#     echo "Your name is your username"
# fi
p="g" # if p is not defined it wont go inside bcz of "-n" flag
if [[ -n "$p" ]];
then
    echo "Asi vai"
fi
email="me@example.com"
if [[ "$email" =~ [a-z]+@[a-z]{2,}\.(com|net|org) ]]
then
    echo "Valid email!"
fi
sleep 30 &
# List background jobs
jobs

