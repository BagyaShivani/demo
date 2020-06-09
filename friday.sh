foldername=$2
commitmsg=$3

pushrepo(){
    git init 
    git remote add origin git@github.com:BagyaShivani/$foldername.git
    git add .
    git commit -m "$commitmsg"
    git push -u origin master
}

update(){
    git add .
    git commit -m "$foldername"
    git push
}



if [ $1 == "repo" ]
then
    node C:/Users/ca_user1/Desktop/automatejs-master/automatejs-master/index.js $2 $3
elif [ $1 == "pushrepo" ]
then
    pushrepo
elif [ $1 == "update" ]
then
    update
fi