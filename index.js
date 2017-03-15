	var div = document.getElementById('one');
	var x, y;

    var drag = false;
    div.onmousedown = function() {
        drag = true;
    };
    div.onmouseup = function() {
        drag = false;
    };
    div.onmousemove = function(event) {
        if (drag) {
            x = event.clientX;
            y = event.clientY;
         	// div.style.left = x + "px";
        	// div.style.top = y + "px";
        }
        div.style.left = x + "px";
        div.style.top = y + "px";
    };

    