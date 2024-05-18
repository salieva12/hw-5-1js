document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const dataList = document.getElementById('dataList');
    const dataArray = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.elements['name'].value;
        const age = form.elements['age'].value;

        // Add the new entry to the array
        dataArray.push({ name, age });

        // Clear the input fields
        form.reset();

        // Render the updated array
        renderDataList();
    });

    function renderDataList() {
        // Clear the existing list
        dataList.innerHTML = '';

        // Add each entry in the array as a list item
        dataArray.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-item');
            listItem.textContent = `Name: ${item.name}, Age: ${item.age}`;
            dataList.appendChild(listItem);
        });
    }
});
