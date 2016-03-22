/**
 * @author Administrator
 */


$(document).ready(function(){

var pristineFlagTaskDescription = true;
var pristineFlagTaskTitle = true;
var pristineFlagTaskDate = true;

var TaskDescriptionEmpty = true;
var TaskTitleEmpty = true;
var TaskDateEmpty = true;

var numberOfTasksCreated = 0;

$("#PendingOverall").height("300px");
$("#InProgressOverall").height("300px");
$("#CompletedOverall").height("300px");

//$("#InProgressTasks").height("200px");

$("#taskDescription").text("Task Description");
$("#taskDescription").focus(function(){
	if(pristineFlagTaskDescription == true)
		{
		$("#taskDescription").val("");
		pristineFlagTaskDescription = false;
		} 
});

$("#taskTitle").text("Name Of Task");
$("#taskTitle").focus(function(){
	if(pristineFlagTaskTitle == true)
		{
		$("#taskTitle").val("");
		pristineFlagTaskTitle = false;
		} 
});

$("#taskDate").text("Date Of Task");
$("#taskDate").focus(function(){
	if(pristineFlagTaskDate == true)
		{
		$("#taskDate").val("");
		pristineFlagTaskDate = false;
		} 
});


$("#submitButtonInsideTask").click(function(){
	if (InputFormFieldWasEmpty() == false) {
		numberOfTasksCreated++;
		var contentToAdd = $("#taskDate").val();
		var htmlVariable = "<div id='anId'";
		htmlVariable = htmlVariable + (numberOfTasksCreated).toString() + " "; 
		htmlVariable = htmlVariable + "draggable='true' ondragstart='drag(event)'>";
		alert("numberOfTasksCreated");
		alert(numberOfTasksCreated);
		htmlVariable = htmlVariable + "<div>"+$("#taskDate").val()+"</div>";
		htmlVariable = htmlVariable + "<div>"+$("#taskTitle").val()+"</div>";
		var taskDescriptionString = "<div>"+ $("#taskDescription").val().replace(/\n/g,"<br>")+"</div>";
		htmlVariable = htmlVariable + taskDescriptionString;		
		htmlVariable = htmlVariable + "</div>";
		htmlVariable = htmlVariable + "<br>";		


//		alert("where is the carraige drag");
//		alert(htmlVariable.indexOf("drag"));
//		alert("slice");
//		alert(htmlVariable.slice(5,10));


		htmlVariable = htmlVariable + "</div>";

		alert("htmlvariable here");
		alert(htmlVariable);
		
		$("#PendingOverall").height("auto");		
		$("#PendingTasks").prepend(htmlVariable);

		if(Number($("#PendingOverall").height()) < 300){
			$("#PendingOverall").height("300px");
		}
	
	}
});


$("#clearButtonInsideTask").click(function(){
//	alert("clicked");
//	var htmlVariable = "<p>"+contentToAdd+"</p>";
//	$("#PendingTasks").val() = htmlVariable;
$("#PendingTasks").remove();
});




function InputFormFieldWasEmpty() {
	if($("#taskDescription").val() == "" || pristineFlagTaskDescription == true) {
		TaskDescriptionEmpty = true;
	}
	else
		TaskDescriptionEmpty = false;
	
	
	if($("#taskTitle").val() == "" || pristineFlagTaskTitle == true) {
		TaskTitleEmpty = true;
	}
	else
		TaskTitleEmpty = false;


	if($("#taskDate").val() == "" || pristineFlagTaskDate == true) {
		TaskDateEmpty = true;
	}
	else
		TaskDateEmpty = false;


	if(TaskTitleEmpty == true){
		alert("You need to enter task title");
	}			
	
	if(TaskDescriptionEmpty == true){
		alert("You need to enter task description");
	}
	
	if(TaskDateEmpty == true){
		alert("You need to enter task date");
	}
	
	return (TaskDescriptionEmpty || TaskTitleEmpty || TaskDateEmpty);		

}





});

function MaybeMakePanelsHeightASetHeight() {
	if($("#PendingOverall").height() > "300px"){
		$("#PendingOverall").height("auto");
	}
	else {
		$("#PendingOverall").height("auto");
	}
			
}

function AdjustAndCheckHeightOfPanels(){
	alert("made it here");
	alert();
	alert("before adjustments");

	if($("#PendingOverall").height() > "300px"){
		$("#PendingOverall").height("auto");
	}
	else{
		$("#PendingOverall").height("300px");		
	}

	if($("#InProgressOverall").height() > "300px"){
		$("#InProgressOverall").height("auto");
	}
	else{
		$("#InProgressOverall").height("300px");		
	}

	if($("#CompletedOverall").height() > "300px"){
		$("#CompletedOverall").height("auto");
	}
	else{
		$("#CompletedOverall").height("300px");		
	}
	
				alert("after adjustments");
}


function allowDrop(ev) {
    ev.preventDefault();
//    alert("in allowdrop");
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//<!--function below is jqueryui stuff-->
  $(function() {
    $( "#taskDate" ).datepicker();
  });