	// var div = document.getElementById('one');
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

// var drag = false, x, y, posx, posy, first = true;
// div.onmousedown = function() {
//     drag = true;
// };
// div.onmouseup = function() {
//     drag = false;
//     first = true;
// };
// div.onmousemove = function(e) {
//     if (drag) {
//         if (first) {
//             x = e.offsetX;
//             y = e.offsetY;
//             first = false;
//         }
//         posx = e.clientX - x;
//         posy = e.clientY - y;
//         posx = e.clientX;
//         posy = e.clientY;
//         this.style.left = posx + 'px';
//         this.style.top = posy + 'px';
//     }
// }; 

var el = document.getElementById('one');
    var eltop = 0, elleft = 0;
    var mouseX = 0, mouseY = 0;
    document.addEventListener('mousedown','down');
    document.addEventListener('mouseup','up');

    function down(e) {
     if (e.target === el) {
         mouseX = e.clientX;
         mouseY = e.clientY;

         eltop = Number(el.style.top.val.replace('px', ''));
         elleft = Number(el.style.left.val.replace('px', ''));

         document.addEventListener('nmousemove','move');
     }
    }

    function move(e) {
     var delX = e.clientX - mouseX;
     var delY = e.clientY - mouseY;
     el.style.top = (eltop + delY) + "px";
     el.style.left = (elleft + delX) + "px";
    }

    function up(e) {
     document.removeEventListener('mousemove','move');
    }
