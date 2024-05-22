let email = document.querySelector('#email');
let password = document.querySelector('#password');
let button = document.querySelector('#button');


let users = {};

function User(email, password) {
    this.email = email;
    this.password = password;
}

function createID(users) {
    return Object.keys(users).length;
}

button.addEventListener('click', () => {
    const emailUser = email.value;
    const passwordUser = password.value;

    const user = new User(emailUser, passwordUser);

    const userId = 'Users' + createID(users);
    users[userId] = user;

    console.log(users)

    alert(`${emailUser}, вы успешно прошли авторизацию!`)


})
