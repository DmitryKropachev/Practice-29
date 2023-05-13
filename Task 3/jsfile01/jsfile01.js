// jsfile01.js
var posArray2 = [
		[55.76, 56.01, 56.11, 55.88, 55.99],
		[49.10, 50.23, 48.98, 51.45, 50.55]
		];

function onClickSave() {
	alert("Clicked button: Save");
	var file = new Blob([posArray2.join('; ')], {type:'text/plain'});
//	  var a = document.getElementById("a");
	var a = document.createElement("a"),
		url = URL.createObjectURL(file);
	a.href = url;
//	  Comment this to download in browser tab.
	a.download = "001track.txt";
	document.body.appendChild(a);
	a.click();
	setTimeout(function() {
	  document.body.removeChild(a);
	  window.URL.revokeObjectURL(url);
	}, 0);
	return false;
	}