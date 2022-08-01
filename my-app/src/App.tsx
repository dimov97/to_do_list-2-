import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist'


export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    const [tasks1, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "HTML&CSS", isDone: true },
        { id: 5, title: "JS", isDone: true },
        { id: 6, title: "ReactJS", isDone: false }
    ])

    const [filter, setFilter] = React.useState<FilterValuesType>("All")

/*    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]*/
    
    const removeTask = (taskID: number ) => {
        setTasks(tasks1.filter(t => t.id !== taskID))
        console.log(tasks1)
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForRender;
    switch (filter) {
        case "Completed": tasksForRender = tasks1.filter(t => t.isDone)
            break
        case "Active": tasksForRender = tasks1.filter(t => !t.isDone)
            break
        default: tasksForRender = tasks1
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
