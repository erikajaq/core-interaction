var block = document.querySelector('.block');
var colors = ['black', 'orange', 'blue', 'green'];
//the different img src will be the colors...and then youll call them in a string//

var colorIndex = 0

//var blockOneIsActive = false//

window.addEventListener('mousemove', function (event) {

//if (blockOneIsActive)
{
		block.style.top = event.pageY + 'px';
		block.style.left = event.pageX + 'px';

		if (colorIndex >= colors.length) {
			colorIndex = 0;
		} else {
			colorIndex = colorIndex + 1
		}

		block.style.backgroundColor = colors[colorIndex]
	}


})

// you need to make it so that this happens when you click down, then when you drag it changes it,//
//you need to make it so that instead of colors, its img srcs...ask m about this//
// blockOne will be individual albums so Boysdontcry is blockOne nevermind is blockTwo etc.//
//you need to make it so that you add a boolean where its like every 10 px instead of as fast as its going now//
