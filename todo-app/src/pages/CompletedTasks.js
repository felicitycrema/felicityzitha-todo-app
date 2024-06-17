import React from "react"
import TodoItem from "../components/TodoItem";
const CompletedTasks = ({tasks}) => {
    return (
        <div>
           <h1>CompletedTasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} />
                ))}
           </ul>
        </div>
    
  )
}

export default CompletedTasks;