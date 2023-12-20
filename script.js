const InputBox =document.querySelector('.inputbox')
const UnOrder =document.querySelector('.Unorder')
const Button = document.querySelector('.btn')

Button.addEventListener('click', InputClick)

function InputClick(){
     if(InputBox.value === ""){
        alert('You must write something')
     }
     else{
        let li = document.createElement('li')
        li.innerHTML = InputBox.value
        UnOrder.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML ="&#215"
        li.appendChild(span)
     }
     InputBox.value=""
     SaveData()
}

UnOrder.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('Check')
        SaveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        SaveData()
    }
}, false)

function SaveData(){
    localStorage.setItem("data", UnOrder.innerHTML)
}

function ShowData(){
    UnOrder.innerHTML = localStorage.getItem("data")
}
ShowData()