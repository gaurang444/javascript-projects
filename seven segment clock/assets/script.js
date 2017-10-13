$(document).ready(function(){
    $interval = setInterval(setd, 500);
})

function setd()
{
    let d = new Date();
    let date = d.toTimeString();
    let time = date.split(' ')[0];
    let hr = time.split(':')[0];
    let min = time.split(':')[1];
    let sec = time.split(':')[2];
    sethr(hr);
    setmin(min);
    setsec(sec);
}

function sethr(hr)
{
    var digit = hr.split('');
    setdigit('.hr1', Number(digit[0]));
    setdigit('.hr2', Number(digit[1]));
}

function setmin(min)
{
    var digit = min.split('');
    setdigit('.min1', Number(digit[0]));
    setdigit('.min2', Number(digit[1]));
}


function setsec(sec)
{
    var digit = sec.split('');
    setdigit('.sec1', Number(digit[0]));
    setdigit('.sec2', Number(digit[1]));
}

function setdigit(target , val)
{
    switch(val)
    {
        case 0:
            $(target).attr('id', 'zero');
            break;
        case 1:
            $(target).attr('id','one');
            break;
        case 2:
            $(target).attr('id','two');
            break;
        case 3:
            $(target).attr('id','three');
            break;
        case 4:
            $(target).attr('id','four');
            break;
        case 5:
            $(target).attr('id','five');
            break;
        case 6:
            $(target).attr('id','six');
            break;
        case 7:
            $(target).attr('id','seven');
            break;
        case 8:
            $(target).attr('id','eight');
            break;
        case 9:
            $(target).attr('id','nine');
            break;
    }
}