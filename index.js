const inputTask = document.getElementById('input-task');
const btn = document.getElementById('btn');
const displayTask = document.getElementById('display-task');
const tableBody = document.getElementById('table-container');
const refreshBtn = document.getElementById('refresh-btn');

let myTask = inputTask;

const now = new Date;
console.log(now.getDate);


function generateMatricule() {
    const length = 8;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  }
  
  // call the function to generate a random matricule
  const matricule = generateMatricule();
  console.log(matricule); // prints something like "AB12C3D4"

  
//create new task object
let singleTask = {
    id: matricule,
    task_desc: myTask.value,
    date_time: new Date()
};




//task array
let tasks = [];

// Create array to store displayed data
let displayedData = [];


tasks.push(singleTask)

console.log(inputTask, btn, displayTask);



// Get text input 

    btn.addEventListener('click', (event)=>{
        event.preventDefault();

        //get input value
        myTask = inputTask.value;
        console.log(myTask);

        //create new task object
        let singleTask = {
            id: matricule,
            task_desc: myTask,
            date_time: new Date()
        };
        console.log(singleTask);

        //push new task object in the array
        tasks.push(singleTask)
        console.log(tasks);

        // Push new elements in local storage 
        // Check if Local Storage contains items
        if(localStorage.length > 0) {
            console.log("Local Storage contains items");
            localStorage.setItem('Tasks', JSON.stringify(tasks));
        } else {
            console.log("Local Storage is empty");
        }
        
        

        // const popUp = document.getElementById('popup');
        // popUp.style.visibility='visible'; 
        // // popUp.style.visibility='hidden'; 

        alert('You task has been added. Press the "Refresh" button to see the changes.')
        
    })


// Dsplay tasks in a table 
// const displayText = () =>{
// }
// displayText();

refreshBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const storedData = localStorage.getItem('Tasks');
    displayedData = JSON.parse(storedData);
    console.log(displayedData);

    console.log(tableBody);
    let i = 0;
    tableBody.innerHTML = displayedData.map(item=>{
        
        return(`
        <tr id='first-line'>
        <th scope="row">${i++}</th>
        <td>${item.task_desc}</td>
        <td>${item.date_time}</td>
        <td><input type="checkbox" name="" id="myCheckbox"></td>
        </tr>
        `)
    })
})


window.addEventListener('DOMContentLoaded', ()=>{
    const storedData = localStorage.getItem('Tasks');
    displayedData = JSON.parse(storedData);
    console.log(displayedData);

    console.log(tableBody);
    let i = 0;
    tableBody.innerHTML = displayedData.map(item=>{
        
        return(`
        <tr id='first-line'>
            <th scope="row">${i++}</th>
            <td>${item.task_desc}</td>
            <td>${item.date_time}</td>
            <td><input type="checkbox" name="check" id="myCheckbox" onclick="checkStatus()"></td>
        </tr>
        `)
    })
})

// check if btn s checked
const checkStatus = () =>{
    const checkBoxs = document.querySelectorAll('check');
    checkBoxs.forEach(checkBox =>{
        if(!checkBox.checked){
            console.log(true);
        }else{
            console.log(false);
        }
    })
    
}
