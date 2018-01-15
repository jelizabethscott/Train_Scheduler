// 1. Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjd9rPQrnAnn_2j94r0xlaGfAQ6JobXA0",
    authDomain: "gtbootcamp-cebbd.firebaseapp.com",
    databaseURL: "https://gtbootcamp-cebbd.firebaseio.com",
    projectId: "gtbootcamp-cebbd",
    storageBucket: "gtbootcamp-cebbd.appspot.com",
    messagingSenderId: "151496263351"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// 2. Button for adding Train
$(".btn").on("click", function(){

	// Grabs user input
	var name = $("#trainName").val().trim();
	var trainDestination = $("#destination").val().trim();
	var time = moment($("#trainTime").val().trim(), "HH:mm");
	var trainFrequency = $("#frequency").val().trim();

// Creates local "temporary" object for holding train data
	var newTrain = {
		trainName:  name,
		destination: trainDestination,
		trainTime: time,
		frequency: trainFrequency
	}

	// Uploads train data to the database
	database.ref().push(newTrain);

	// Logs everything to console
	console.log(newTrain.trainName);
	console.log(newTrain.destination);
	console.log(newTrain.trainTime);
	console.log(newTrain.frequency);

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainName").val("");
	$("#destination").val("");
	$("#trainTime").val("");
	$("#frequency").val("");

	// Prevents moving to new page
	return false;
});
// Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var name = childSnapshot.val().trainName;
	var trainDestination = childSnapshot.val().destination;
	var trainTime = childSnapshot.val().time;
	var trainFrequency = childSnapshot.val().frequency;

	// train Info
	console.log(name);
	console.log(trainDestination);
	console.log(trainTime);
	console.log(trainFrequency);
