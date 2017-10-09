function check(){
	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
	var correct=0;



	if(question1=="jaipur"){
		correct++;
	}
	if(question2=="delhi"){
		correct++;

	}
	if(question3=="washington"){
		correct++;}
	var messages=["Great job","Thats ok","You really need to do better"];
	var pictures=["yepy.gif","sorry.gif","http://cdn.list25.com/wp-content/uploads/2011/11/penguifall.gif"];
	var range;
	if(correct<1){
		range=2;
	}
	if(correct>0 && correct<3){
		range=1;
	}
	if(correct>2){
		range=0;
	}






document.getElementById("afert").style.visibility="visible";
document.getElementById("message").innerHTML=messages[range];
document.getElementById("afer").innerHTML="You got " + correct + " correct answers";
document.getElementById("pic").src=pictures[range];



}
