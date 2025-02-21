let user = document.getElementById('user');
let pwd = document.getElementById('pwd');
let enter = document.getElementById('enter');
let info = document.getElementById('info');

enter.onclick = () => {
    let inUsername = user.value;
    let inPassword = pwd.value;

    let op = JSON.parse(localStorage.getItem("op"));

    if(op.username === inUsername && op.password === inPassword){
        info.style.color = 'lime';
        info.innerHTML = 'Connected successfuly';
        clearInputsVal();
        window.open("http://localhost/ax0.xyz/", "_blank")
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
