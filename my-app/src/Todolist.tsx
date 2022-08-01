import React from 'react';
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number)=> void
    changeFilter: (filter:FilterValuesType)=> void
}

export function Todolist(props: PropsType) {
    const taskItems = props.tasks.map((task: TaskType)=> {
        return(
            <li key={task.id}>
                <button onClick={()=>props.removeTask(task.id)}>x</button>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span></li>
        )
    })
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            { taskItems }
        </ul>
        <div>
            <button onClick={()=>props.changeFilter("All")}>All</button>
            <button onClick={()=>props.changeFilter("Active")}>Active</button>
            <button onClick={()=>props.changeFilter("Completed")}>Completed</button>
        </div>
    </div>
}
