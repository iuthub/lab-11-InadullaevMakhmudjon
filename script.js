
const elements = {
	textarea: document.getElementById('textarea'),
	biggerbtn: document.getElementById('button'),
	checkbox: document.getElementById('checkbox')
};


elements.biggerbtn.onclick = ()=>{
	if(elements.checkbox.checked){
		elements.textarea.style.transition = '2s ease-in';
		elements.textarea.style.fontWeight = 'bold';
		elements.textarea.style.color = 'green';
		elements.textarea.style.textDecoration = 'underline';
	}else{
		elements.textarea.style.transition = '2s ease-out';
		elements.textarea.style.fontWeight = 'normal';
		elements.textarea.style.color = 'black';
		elements.textarea.style.textDecoration = 'none';

	}
	elements.textarea.style.fontSize = '24pt';
}
