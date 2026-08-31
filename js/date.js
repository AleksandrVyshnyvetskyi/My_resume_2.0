const birthDateString = "1994-06-21";

export function getCalculatedAge() {
	const today = new Date();
	const birthDate = new Date(birthDateString);

	let age = today.getFullYear() - birthDate.getFullYear();
	birthDate.setFullYear(today.getFullYear());

	if (today < birthDate) age--;

	return age;
}

export function updateAgeDOM() {
	const myAgeElement = document.querySelector(".my-age");
	if (myAgeElement) {
		myAgeElement.innerText = getCalculatedAge();
	}
}
