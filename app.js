var bot = document.getElementById("chatBoxBot");



function retrieveValue(){
	var user = document.getElementById("chatBoxUser");
	var lastUserMessage = user.value;

	console.log(lastUserMessage);

	var userButt = document.getElementById("userBtn");
	userButt.addEventListener("click", retrieveValue);

	var botMsg = document.getElementById("botMessage");
	console.log(botMsg);

	//print message
	if(lastUserMessage === ""){
		botMsg.innerHTML = "Yo Einstein! My name is Alice.";
	} else if(lastUserMessage === "hello"){
		botMsg.innerHTML = "Hi there!  I've got a few riddles for you to solve.  Let's see if you figure them out.  The first riddle clue: It belongs to you but others use it more than you.";
	} else if(lastUserMessage === "name"){
		botMsg.innerHTML = "Nice work!  You've got a few more riddles to solve.  What runs without legs?";
	} else if(lastUserMessage === "water"){
		botMsg.innerHTML = "Wonderful!  Here's the last riddle: What has heads, tails, is brown, and has no legs?";
	} else if(lastUserMessage === "a penny"){
		botMsg.innerHTML = "You've solved all of our riddles!  Have a great day!"
	}
	else
		botMsg.innerHTML = "Not quite the answer.  Try again."
}

retrieveValue();
	

