let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click' , function() {
    console.log('clicked the div')
})

ul.addEventListener('click' , function(e) {
    e.stopPropagation();                    // make to stop the nested work
    console.log('clicked the ul')
})

for (li of lis) {
    li.addEventListener('click' , function(e) {
        e.stopPropagation();
        console.log('clicked the list')
    })
}

