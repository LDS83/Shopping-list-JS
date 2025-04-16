function addItem() {
    let input = document.getElementById("itemInput");
    let itemText = input.value.trim();

    if (itemText !== "") {
        let list = document.getElementById("shopping-list");
        let listItem = document.createElement("li");
        listItem.innerHTML = `
        <span class="item-text">${itemText}</span>
        <button class="edit-btn" onclick="editItem(this)">Edit</button>
        <button class="remove-btn" onclick="removeItem(this)">Remove</button>
    `;
        

        list.appendChild(listItem);
        input.value = "";
    }

}

function removeItem(button) {
    button.parentElement.remove();
}

// Adding a Edit function that creates a edit button
function editItem(button) {
    let listItem = button.parentElement;
    let itemTextSpan = listItem.querySelector(".item-text");
    let newText = prompt("Edit item", itemTextSpan.textContent);
    
    if (newText !== null && newText.trim() !== "") {
        itemTextSpan.textContent = newText.trim();
    }
}