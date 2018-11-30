function drawImageRot(micontexto, img, x, y, width, height, rad) {
	//Convert degrees to radian 

	//Set the origin to the center of the image
	micontexto.translate(x + width / 2, y + height / 2);
	//Rotate the canvas around the origin
	micontexto.rotate(rad - Math.PI / 2);
	//draw the image    
	micontexto.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
	//reset the canvas  
	micontexto.rotate((rad - Math.PI / 2) * (-1));
	micontexto.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}