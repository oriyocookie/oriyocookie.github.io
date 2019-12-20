
M.AutoInit();

function watashiHover(element) {
	element.setAttribute('src', 'images/oportunitygrabbed.jpg');
}

function watashiUnhover(element) {
	element.setAttribute("src", "images/oportunity.png");
}

 var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);
