var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createElement() {
	var li = document.createElement("li");
	var checkbox = document.createElement("input");
	var btn = document.createElement('button');
	btn.innerText = "Del"

	checkbox.setAttribute('type', 'checkbox');
	checkbox.id = 'check-box';
	btn.className = "btn";

	li.appendChild(checkbox);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(btn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createElement();
	}
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); 






















