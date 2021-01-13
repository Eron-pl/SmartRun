var slider_img = document.querySelector('.shoe_image');
var images = ['shoe_green.png', 'shoe_red.png', 'shoe_blue.png', 'shoe_yellow.png', 'shoe_black.png'];
var i = 0; 

function prev() 
{
	if(i <= 0) i = 5;
	i--;
	return setImg();
}

function next() 
{
	if(i >= 4) i = -1;
	i++;
	return setImg();
}

function setImg() 
{
	return slider_img.setAttribute('src', 'images/shoes/'+images[i]);
}