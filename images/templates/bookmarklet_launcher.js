(function(){
	if (window.myBookmarklet != undefined) {
		myBookmarklet();
	}   
	else {
		alert('-------------------------');
		document.body.appendChild(document.createElement('script')).src='https://cdn.rawgit.com/alariver/jslib/master/images/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999)
	}
})();