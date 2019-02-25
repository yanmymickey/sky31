window.onload = function  () {
				var Carousel_map_box = document.getElementById('Carousel_map_box');
				var Carousel_map = document.getElementById('Carousel_map');
				var buttons = document.getElementById('buttons').getElementsByTagName('span');
				var up = document.getElementById('up');
				var next = document.getElementById('next');
				var index = 1;
				var whatd = false;
				function onbutton () {
					for (var i = 0;i < buttons.length; i++) {
						if (buttons[i].className == 'on') {
							buttons[i].className = '';
							break;
						}
					}
					buttons[index -1].className = 'on';
				}
				
				function what (offset) {
					whatd = true;
					var newleft = parseInt(Carousel_map.style.left) + offset;
					var time =350;
					var interval = 10;
					var speed = offset/(time/interval);
					
					function letgo () {
						if( (speed < 0 && parseInt(Carousel_map.style.left) > newleft) || (speed > 0 && parseInt(Carousel_map.style.left) < newleft) ){
						Carousel_map.style.left = parseInt(Carousel_map.style.left) + speed + 'px';
							setTimeout(letgo, interval);
						} else {
							whatd = false;
							Carousel_map.style.left = newleft + 'px';
							if(newleft > -1300) {
								Carousel_map.style.left = -6500 + 'px';
							}
							if(newleft < -6500) {
								Carousel_map.style.left = -1300 + 'px';
							}
							
					}
				}
					letgo();
			}
			
			next.onclick = function  () {
				if (index ==5) {
					index = 1; 
				}
				else{
					index +=1;
				}
				
				onbutton();
				if (whatd == false) {
					what(-1300);
				}
			}
			up.onclick = function  () {
				if (index == 1) {
					index = 5; 
				}
				else{
					index -=1;
				}
				
				onbutton();
				if (whatd == false) {
					what(1300);
				}
			}
			for (var i = 0; i < buttons.length;i++) {
				buttons[i].onclick = function  () {
					if (this.className == 'on') {
						return;
					}
					var newindex = parseInt(this.getAttribute('index'));
					var offset = -1300 * (newindex - index);
					index = newindex;
					onbutton();
					if (whatd == false) {
					what(offset);
				}
					
				}
			}
			}