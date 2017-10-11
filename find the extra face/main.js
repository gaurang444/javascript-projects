window.onload = function(){
	var points = 0;
	var NumberOfFaces = 5;
	var leftSide = document.getElementById('left_side');
	var rightSide = document.getElementById('right_side');
	generateFaces();
	function generateFaces( number = 5) {
		while(number > 0){
			var img = document.createElement("img");
			img.setAttribute( "src" , "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
			var left = Math.round(Math.random() * 50);
			var top = Math.round(Math.random() * 400);
			img.style.left = left + '%';
			img.style.top = top + 'px';

			leftSide.appendChild(img);
			number--;

		}
		
		createRightSide();
		leftSide.lastChild.onclick = function(e){
			points++;
			e.stopPropagation();
			NumberOfFaces += 5;
			while(leftSide.hasChildNodes()){
				leftSide.removeChild(leftSide.firstChild);
			}
			while(rightSide.hasChildNodes()){
				rightSide.removeChild(rightSide.firstChild);
			}

			generateFaces(NumberOfFaces);
		}
						
	}

	function createRightSide(){
		
		var cloneLeft = leftSide.cloneNode(true);
		cloneLeft.removeChild(cloneLeft.lastChild);
		rightSide.appendChild(cloneLeft);
	}
	var body = document.getElementsByTagName('body')[0];
	body.onclick = function(){
		alert("Game Over !!\n\nYou got "+points+" points");
		body.onclick = null;
		leftSide.lastChild.onclick = null;
		var choice = confirm("Want to try again ??");
		if(choice) window.location.reload();
	}
	
	
}