var container = document.querySelector('.container')
var image = document.querySelector('.image')

var mouseCounter = 0;
var imageCounter = 0;

var images = ['nevermind.png', 'nevermind2.jpg', 'nevermind3.jpg']



window.addEventListener('mousemove', function(event) {

	mouseCounter++
	image.style.top = event.pageY + 'px'
	image.style.left = event.pageX + 'px'

	if (mouseCounter % 20 === 0) {
		console.log(imageCounter)
		image.src = images[imageCounter]

		if (imageCounter < images.length - 1) {
			imageCounter++
		} else {
			imageCounter = 0
		}

	}

})
