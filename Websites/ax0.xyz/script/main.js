let user = document.getElementById('user');
let pwd = document.getElementById('pwd');
let enter = document.getElementById('enter');
let info = document.getElementById('info');

const admin = {
    username: 'Admin',
    password: 'a1a2a3a4'
};

enter.onclick = () => {
    let inUsername = user.value;
    let inPassword = pwd.value;

    if(admin.username === inUsername && admin.password === inPassword){
        info.style.color = 'lime';
        info.innerHTML = 'Connected successfuly';
        clearInputsVal();
    }
    else{
        info.style.color = 'crimson';
        info.innerHTML = 'Wrong username or password';
        clearInputsVal();
    }
}

function clearInputsVal(){
    user.value = '';
    pwd.value = '';
}
