
const elements = {
	textarea: document.getElementById('textarea'),
	biggerbtn: document.getElementById('button'),
	checkbox: document.getElementById('checkbox')
};


elements.biggerbtn.onclick = ()=>{
	elements.textarea.style.fontSize = '24pt';
}
