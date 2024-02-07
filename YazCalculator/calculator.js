
let keys = document.getElementsByClassName('key');
let display = document.getElementById("display");
let calculation = document.getElementById("calculation");

var clear = 0;
for (let i = 0; i < keys.length; i++) {
	let id = keys[i].id
	document.getElementById(id).addEventListener('click', function(){
		switch (id){
			case 'love':
				document.querySelector(".heart").style.display = "block";
				setTimeout(function(){
					document.querySelector(".heart").style.display = "none";
				}, 2000);
				break;

			case 'play':
				let exercise = display.textContent;
				calculation.innerHTML=exercise;

				exercise = exercise.replace('÷','/');
				exercise = exercise.replace('−','-');
				exercise = exercise.replace('×','*');

				display.textContent = eval(exercise);
				clear = 1;
				break;

			case 'delete':
				display.innerHTML = '<p id="null-num">0</p>';
				calculation.innerHTML = '';
				break;

			default:
				keyValue = keys[i].textContent;
				if(display.innerHTML == '<p id="null-num">0</p>' || clear == 1){
					display.innerHTML = keyValue;
					clear = 0;
				}else{
					if(display.textContent.length >= 11){
						alert('Máximo 11 caracteres')
					}else{
						display.textContent = display.textContent + keyValue;	
					}
				}
				break;	
		}
	})
}