const input = document.querySelector('.useranswer-wrapper').getElementsByTagName('input')[0];
var i = -1;
var unlocked = false;
let enterEvent = new KeyboardEvent("keyup", {
  key: "Enter",
  keyCode: 13,
  which: 13
});
check();
var find = (e) => {
    if (e.key == " ") {
		if (i == -1) {i++;return;};
		var letter1 = document.querySelector('.trigram.w' + String(i) + " .letter.l0").innerText;
		var letter2 = document.querySelector('.trigram.w' + String(i) + " .letter.l1").innerText;
		var letter3 = document.querySelector('.trigram.w' + String(i) + " .letter.l2").innerText;
		setTimeout(function(){
			input.value = letter1+letter2+letter3;
			input.dispatchEvent(enterEvent);
		} ,750);
        i++;
    };
};
document.addEventListener("keyup", find);