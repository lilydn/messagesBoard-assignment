import predefinedList from './pre-defined-messagesList';


// find if message from the same email exists to determine avatar
const userExists = (email, messagesList) => {
	const user = messagesList.find(
		element => element.email.toLowerCase() === email.toLowerCase()
	);
	return user;
};


// email validation, if valid returns true
// returns true if email is valid or empty 
const validateEmail = (email) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase()) || email === '';
};


// - localStorage - //
// write data
const writeToLocalStorage = messagesList => {
	return localStorage.setItem('messagesList', JSON.stringify(messagesList));
};

// load pre-defined example list if there is no data in the local storage
const loadFromLocalStorage = () => {
	let data = localStorage.getItem('messagesList');
	return data // if data exists
		? JSON.parse(data)
		: predefinedList;
};


// - - - - - - - - //

export default function utils() {
  return {
    userExists,
    validateEmail,
    writeToLocalStorage,
    loadFromLocalStorage,
  }
};