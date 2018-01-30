let tasks: Array<string> = [];
function addTask(task:string) : number
{
    tasks.push(task);

    console.log("Element " + task + "added to array" );

    let count:number = tasks.length;
    return count;
}

function listAllTasks()
{
    tasks.forEach(function(task)
    {
        console.log(task);
    });
}

function deleteTask(task:string) : number
{
    let key: string = task;
    let index : number = tasks.indexOf(key, 0);

    if(index > -1)
    {
        tasks.splice(index, 1);
    }
    return tasks.length;
}

addTask("test ");
let x : number = addTask("Hello ");
console.log("Count after add" + x);
listAllTasks();

let y: number = deleteTask("Test ");
console.log("Count after delete " + y);
