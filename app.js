var bot = document.getElementById("chatBoxBot");

function retrieveValue(){	
	var user = document.getElementById("chatBoxUser");
	var lastUserMessage = user.value;
	console.log("test");	
	console.log(lastUserMessage);
}

var userButt = document.getElementById("userBtn");

userButt.addEventListener("click", retrieveValue);