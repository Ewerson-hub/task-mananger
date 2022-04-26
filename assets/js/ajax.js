var cont = 0;
function reciveData(){
    let task = document.getElementById("task").value;
    console.log(task)
    if(task == ""){
        alert('Erro. Nenhuma tarefa adicionada, insira uma tarefa para prosseguir !');

    }else{
        // sendToAjax(task);
        insertDataInTable(task);
        let inputText = document.getElementById('task');
        inputText.value = "";
        cont++;
    }
}
function sendToAjax(task){

}
function insertDataInTable(task){
    let row = document.createElement('tr');
    row.setAttribute('id', cont);

    let tdTask = document.createElement('td');
    tdTask.innerHTML = task;

    let tdOPtions = document.createElement('td');
    tdOPtions.innerHTML = '<div id="option-table-td" class="option-table-td"> <div id="edit">edit</div> | <div id = "div-input"><input type="checkbox" name="finish" class="finish" value='+cont+'></div></div>'

    row.appendChild(tdTask);
    row.appendChild(tdOPtions);

    let table = document.getElementById('table');
    table.appendChild(row);
}
function finishTasks(){
    const check = document.querySelectorAll('.finish');

    const divInput = document.getElementById('div-input');
    const divOptionTable = document.getElementById('option-table-td');
   
    const table = document.getElementById('table');

    check.forEach(element => {
        if(element.checked == true){
            console.log(element.value); 
            const input = document.getElementById(element.value);
            const row = document.getElementById(element.value);
            divInput.appendChild(input);
            // divInput.removeChild(element);
            // table.removeChild(row);
        }
    });
    
}
