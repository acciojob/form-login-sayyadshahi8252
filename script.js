function getFormvalue(event) {
    //Write your code here
	event.preventDefault()
	let firstnameval=document.getElementById("firstname").value;
	let lastnameval=document.getElementById("lastname").value;
	let cleanfirstname=firstnameval.trim()
	let cleanlastname=lastnameval.trim()
	alert(`${cleanfirstname} ${cleanlastname}`)

}
