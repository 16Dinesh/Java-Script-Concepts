// let btn = document.createElement("button");
// // let btn = document.querySelector('button')

// let div = document.querySelector('div');

// btn.innerText = "button"
// div.append(btn);

// function green() {
//     btn.style.backgroundColor="green"
// }

// btn.addEventListener('click',green)


const nameInput = document.getElementById('nameInput');
        const displayName = document.getElementById('displayName');

        nameInput.addEventListener('input', function() {
            const filteredValue = nameInput.value.replace(/[^a-zA-Z ]/g, '');
            nameInput.value = filteredValue;
            displayName.textContent = filteredValue;
        });