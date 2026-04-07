let friends = [];

function showFriends(){
    if(friends.length <= 0){
        console.log("You don't have friend yet.");
    }else{
        console.log(friends);
    }
}

function addFriend(name){
    let checkFriend = friends.includes(name.toUpperCase());

    if(checkFriend == true){
        console.log(`${name.toUpperCase()} is already on your friend list.`);
    }else{
        friends.push(name.toUpperCase())
        console.log(`You added ${name.toUpperCase()}. `);
    }
}

// Remove specific friend -> using their name
// removerFriend

function removeFriend(name) {
    let friendList = friends.indexOf(name.toUpperCase());

    if(friendList == true){
        friends.splice(friendList, 1);
        console.log(`You removed ${name.toUpperCase()}.`);
    }else{
        console.log(`${name.toUpperCase()} is not on your friend list.`);
    }
}
