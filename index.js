	var div = document.getElementById('one');
	// var x, y;

 //    var drag = false;
 //    div.onmousedown = function() {
 //        drag = true;
 //    };
 //    div.onmouseup = function() {
 //        drag = false;
 //    };
 //    div.onmousemove = function(event) {
 //        if (drag) {
 //            x = event.clientX;
 //            y = event.clientY;
 //         	// div.style.left = x + "px";
 //        	// div.style.top = y + "px";
 //        }
 //        div.style.left = x + "px";
 //        div.style.top = y + "px";
 //    };

    var drag = false, x, y, posx, posy, first = true;
    div.onmousedown = function() {
        drag = true;
    };
    div.onmouseup = function() {
        drag = false;
        first = true;
    };
    div.onmousemove = function(e) {
        if (drag) {
            if (first) {
                x = e.offsetX;
                y = e.offsetY;
                first = false;
            }
            posx = e.clientX - x;
            posy = e.clientY - y;
            posx = e.clientX;
            posy = e.clientY;
            this.style.left = posx + 'px';
            this.style.top = posy + 'px';
        }
    }; 