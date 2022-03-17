
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

//Add a New Feature
document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

//Add 3 More Features
document.getElementById("inspiringMessage").onclick = function () {
    axios.get("http://localhost:4000/api/inspiringMessage/")
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

let listAllUsers = (res) => {
    const userListSection = document.getElementById('userList');
    const usersDataArr = res.data
    for(let i = 0; i < usersDataArr.length; i++){
        let username = usersDataArr[i].username;
        let usernameh3 = document.createElement('h3');
        usernameh3.textContent = username;
        userListSection.appendChild(usernameh3);
    }
};

let clearList = () => {
    const userListSection = document.getElementById('userList')
    userListSection.textContent = '';
}

document.getElementById('getAllUser').onclick = function () {
    axios.get("http://localhost:4000/api/users/")
    .then(res => {
        clearList();
        listAllUsers(res);
    })
    .catch(err => console.log(err))
};

let newUserForm = document.querySelector('.addNewUser');
let deleteUserForm = document.querySelector('.deleteUser');
let editUserForm = document.querySelector('.changeUsername');

let addNewUser = (e) => {
    e.preventDefault();
    clearList();

    /*
    let username = document.getElementById('newUser').value
    let body = {
        username // === username: username
    }
    */

    let body = {
        username: document.getElementById('newUser').value
    }

    axios.post("http://localhost:4000/api/adduser/", body)
        .then(res => {
            listAllUsers(res)
            document.getElementById('newUser').value = '';
        })
        .catch(err => console.log(err))
}

let editUser = (e) => {
    e.preventDefault();
    clearList();

    let oldUsername = document.getElementById('oldUserName').value;
    let newUsername = document.getElementById('newUserName').value;

    axios.put("http://localhost:4000/api/edit/" + oldUsername + "&" + newUsername )
    .then(res => {
        listAllUsers(res)
        document.getElementById('oldUserName').value = '';
        document.getElementById('newUserName').value = '';
    })
    .catch(err => console.log(err))
}

let deleteUser = (e) => {
    e.preventDefault();
    clearList();

    let userName = document.getElementById('deleteUsername').value;
    axios.delete("http://localhost:4000/api/delete/" + userName )
        .then(res => {
            listAllUsers(res)
            document.getElementById('deleteUsername').value = '';
        })
        .catch(err => console.log(err))
}

newUserForm.addEventListener('submit', addNewUser);
deleteUserForm.addEventListener('submit', deleteUser);
editUserForm.addEventListener('submit', editUser);
