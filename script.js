var clickBtn = document.getElementById('click');
var firstContainer = document.getElementById('first')
var nameContainer = document.getElementById('name')
var btnContainer = document.getElementById('btn')
var timeEl = document.getElementById('time')

var students = ['Vinnie', 'Mike', 'El Guapo', 'Tiffany']

var time = 100

function start() {
    
    timeEl.textContent = time


    clickBtn.classList.toggle('none')

    displayNameandButtons()
}

function displayNameandButtons(){
    nameContainer.innerHTML = ''
    // create element
    var h1El = document.createElement('h1')

    // add content to element
    h1El.textContent = 'Hello Mike'

    // append element
    nameContainer.append(h1El)
    // create multiple elements at tehe same time

    btnContainer.innerHTML = ''
    for (var index = 0; index < students.length; index++) {

        var buttonEl = document.createElement('button')

        buttonEl.textContent = students[index]
        buttonEl.setAttribute('value', students[index])

        buttonEl.addEventListener('click', buttonClick)
        btnContainer.append(buttonEl)
    }

    firstContainer.append(nameContainer, btnContainer)
}

function buttonClick(){
    console.log(this.value);
}

clickBtn.addEventListener('click', start)