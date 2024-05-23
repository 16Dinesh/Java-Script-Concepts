let p = document.querySelector('p');
let inp = document.querySelector('input');
let saveBtn = document.getElementById('saveBtn');

inp.addEventListener('input', function() {
    console.log(inp.value);
    p.innerText = inp.value;
});

saveBtn.addEventListener('click', function() {
    let textToSave = inp.value;
    let blob = new Blob([textToSave], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'textfile.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
