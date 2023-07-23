// Урок 4. Асинхронность в Javascript.
// Задача.
// Необходимо получить список всех пользователей с помощью
// бесплатного API (https://jsonplaceholder.typicode.com/users)
// и отобразить их на странице. Пользователь должен иметь
// возможность удалить любого пользователя из списка.
// Данные при получении необходимо сохранить в локальное хранилище
// браузера localStorage. При удалении пользователь должен
// удаляться не только со страницы, но и из локального хранилища
// localStorage.

const getUser = async (url) => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    users.forEach(item => { localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item)) });
};

getUser('https://jsonplaceholder.typicode.com/users');

const elemDivUsers = document.createElement('div');
elemDivUsers.className = 'users';
document.body.append(elemDivUsers);

for (let i = 1; i <= localStorage.length; i++) {
    const elemPUsersItem = document.createElement('p');
    elemPUsersItem.classList.add('users__item');
    const localStorageItem = JSON.parse(localStorage.getItem(i));
    console.log(localStorageItem);
    elemPUsersItem.id = localStorageItem.id;
    console.log(elemPUsersItem.id);
    let j = 0;
    elemPUsersItem.textContent = localStorageItem.name;
    elemDivUsers.appendChild(elemPUsersItem);

    const elemButtonRemove = document.createElement('button');
    elemButtonRemove.classList.add('button__remove');
    elemButtonRemove.textContent = 'Удалить';
    elemButtonRemove.id = localStorageItem.id;
    elemPUsersItem.append(elemButtonRemove, document.createElement('br'));

    elemButtonRemove.addEventListener('click', (e) => {
        localStorage.removeItem(elemPUsersItem.id);
        e.target.closest('.' + elemPUsersItem.className).remove();
    })
}