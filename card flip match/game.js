var mem=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var meomvalu=[];
var memtileid=[];
var tiles_flipped=0;//keeping tracks of how many tiles are flipped
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}//USING SHUUFFLE METHOD FOR SHUUFLING THE CONTENTS OF THE ARRAY
//THIS function to generate the newboard
function newboard(){
	tiles_flipped=0;
	var output='';
	mem.memory_tile_shuffle();//this will shuuffle the original given array
	for(var i = 0; i < mem.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+mem[i]+'\')"></div>';
	}
	document.getElementById('memory').innerHTML=output;



}





