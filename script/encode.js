function encode(value){
	return btoa(value);
}

function decode(value){
	return atob(value);
}

function submit(){
	var input = document.querySelector('#input').value;
	var type = "E";
	 if(document.querySelector('#decode').checked)
		 type="D";
	 var output;
	 if(type == "E")
		output = encode(input);
	 else
		 output=decode(input);
	 
	 document.querySelector('#output').value=output;
		 
}

function copy(){
	var copyField = document.querySelector('#output');
	copyField.select();
	document.execCommand('copy');
	
}