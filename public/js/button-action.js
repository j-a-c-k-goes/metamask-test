const btn = document.querySelector("#eth-btn");
btn.addEventListener("mouseover", ()=>{
	btn.style.color = "white";
	btn.style.borderColor = "white";
	btn.style.borderWidth = "4px";
	btn.innerText = "Enabling Ethereum";
	btn.style.cursor = "pointer";	
	document.body.style.color = "white";
	document.body.style.background = "black";
	document.body.style.transition = "all 2.24s";
});

btn.addEventListener("mouseout", ()=>{
	btn.style.borderWidth = "1px";
	btn.style.color = "black";
	btn.style.borderColor = "black";
	btn.style.background = "none";
	btn.innerText = btn.name;
	document.body.style.background = "white";
	document.body.style.color = "black";
	document.body.style.transition = "all 2.24s";
});
