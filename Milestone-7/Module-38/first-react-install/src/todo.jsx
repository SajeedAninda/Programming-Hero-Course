export default function Todo({wakeup, task1, task2}) {
    if(wakeup){
        return (
            <div>
                <li>Task:1: {task1} </li>
                <li>Task 2: {task2} </li>
            </div>
        )
    }
    else{
        return(
            <div>
                <li>Task: Wake Up</li>
            </div>
        )
    }
}