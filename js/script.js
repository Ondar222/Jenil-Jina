let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repeat__password = document.querySelector('#repeat__password');
let button = document.querySelector('#button');


let users = {};

function User(name, email, password, repeat__password, regisered) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.repeat__password = repeat__password;
}

function createID(users) {
    return Object.keys(users).length;
}

button.addEventListener('click', () => {
    const nameUser = name.value;
    const emailUser = email.value;
    const passwordUser = password.value;
    const repeat__passwordUser = repeat__password.value;

    const user = new User(nameUser, emailUser, passwordUser, repeat__passwordUser);

    const userId = 'Users' + createID(users);
    users[userId] = user;

    console.log(users)

    alert(`${nameUser}, вы успешно прошли регистрацию!`)


})
