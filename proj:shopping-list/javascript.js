function addItem() {
    const input = document.querySelector('#item');
    const itemAdded = input.value.trim();
    const list = document.querySelector('#itemList');
    input.value = '';

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    li.appendChild(span);
    li.appendChild(deleteBtn);

    span.textContent = itemAdded;
    deleteBtn.textContent = 'Delete';

    list.appendChild(li);
    
    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();

    });

    
}

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addItem);

const input = document.querySelector('#item');
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
