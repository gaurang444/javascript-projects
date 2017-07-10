function c(val){
	document.getElementById('display').value=val;
}
function math(val){
	document.getElementById('display').value+=val;
}function e()
{
    try
    {
      c(eval(document.getElementById("d").value))
    }
    catch(e)
    {
      c('Error')
    }
}