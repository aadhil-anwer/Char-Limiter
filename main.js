var tweet = prompt("Enter Your tweet");
var tweetlen = tweet.length;

alert("You Have Written " + tweetlen + " Characters. You Have "+ (140-tweetlen) +" Characters Left")
tweet =(tweet.slice(0,20));
alert(tweet)
