const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

//Set database object here
const database = firebase.database().ref();

/*
 * Updates the database with the username and message.
 */
function updateDB(event) {
    event.preventDefault();
    const username = usernameElement.value;
    const message = messageElement.value;
    // console.log(username + " : " + message);

    usernameElement.value = "";
    messageElement.value = "";

    const value = {
        NAME: username,
        MESSAGE: message
    }

    //Update database here
    database.push(value);

}

// Set database "child_added" event listener here

database.on('child_added', addMessage);

function addMessage(data) {
    let mess = data.val().MESSAGE;
    let nam = data.val().NAME;
    let msgCont = document.querySelector('.allMessages');

    let p = document.createElement('p');
    p.innerHTML = `${nam}: ${mess}`;
    msgCont.appendChild(p);

    console.log(`${nam}: ${mess}`);
}