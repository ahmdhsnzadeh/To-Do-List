let flag = ''
document.querySelector('#tap').onclick = function (){
 if(document.querySelector('#newtask input').value.length == 0){
    alert("Please Enter a Task")
 }
 else{
    document.querySelector('#tasks').innerHTML
    += `
    <div class="task">
        <span class="taskname" onclick='donetask(this)'>${document.querySelector('#newtask input').value}</span>
        <div>
            <button class="edit" onclick='editTask(this)' >
                <i class="bi bi-pencil-square"></i>
            </button>
            <button class="delete" onclick='deleteChild(this)'>
                <i class="bi bi-trash-fill"></i>
            </button>
        </div>
    </div>
    `;
    document.querySelector("#newtask input").value = "";
 }
}
function deleteChild(del) {
    // console.log(del.parentElement.className)
    del.parentElement.parentElement.remove()
}
function donetask(line){
    line.classList.toggle('line')
}
function editTask(ed){
    flag = ed
    // console.log(ed.parentElement.previousElementSibling.innerHTML)
    let edit = ed.parentElement.previousElementSibling.innerHTML
    document.querySelector("#newtask input").value = edit
    document.getElementById('tap').style.display = 'none'
    document.getElementById('tap2').style.display = 'block'

}
console.log(flag)
document.querySelector('#tap2').onclick = function (){
    if(document.querySelector('#newtask input').value.length == 0){
       alert("Please Enter a Task")
    }
    else{
        flag.parentElement.previousElementSibling.innerHTML = document.querySelector("#newtask input").value
        document.getElementById('tap').style.display = 'block'
        document.getElementById('tap2').style.display = 'none'
        document.querySelector("#newtask input").value = ''
    }
}
