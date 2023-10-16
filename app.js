let addButton = document.querySelector('.add-button')
let newTask = document.querySelector('.newTask input')
let tasks = document.querySelector('.tasks')
let currentTask = document.querySelector('.delete');

addButton.addEventListener('click' , function () {
    
    if(newTask.value.length === 0){
        alert('Please fill in genre')
    }else{
 

        tasks.innerHTML += `
        <div class="task">
        <span id="taskName">
        ${newTask.value}
        </span>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
        let current_task = document.querySelectorAll('.delete')
        for(let i=0; i<current_task.length;i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        let todoLength = document.querySelectorAll('#taskName');
        if(todoLength.valueOf >= 10){
            tasks.style.overflowY = 'scroll';
            tasks.style.maxHeight = '200px';
        }
      
    }
    newTask.value = "";

    
})