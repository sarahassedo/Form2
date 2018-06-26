// Validate the following form in a javascript file.
// In case of error make sure to delete the input and leave it empty for the user to reenter the correct input.
// Show error messages in red and with bigger font size
// Create a css file with nice style and js file with validation rules.
// Validation rules:
// If it is F or M one of those needs to be selected, also terms and conditions and one of the options from the list.
// Name needs to be: length between 2 and 14, only letters (no numbers or other characters), and case insensitive.

var form = document.querySelector("form");

form.addEventListener("submit", function (e) { 
	var contact = form.elements.contact_name.value;
	var regex = /^[a-z]{2,14}/gi;
	var contactVal = regex.test(contact);

	if (!contactVal) {
		e.preventDefault();
		message = "Error on the name";
		document.getElementById("contactNameError").innerText = message;
		document.getElementById("contactNameError").style.color = "red";
		document.getElementById("contactNameError").className = "class";
	  //document.getElementById("contactNameError").classList.add("class"); (another way of adding)

	} else {
e.preventDefault();
message1 = "Name is valid";
document.getElementById("contactNameError").innerText = message1;
document.getElementById("contactNameError").style.color = "green";
}
});
