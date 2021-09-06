import '../App.css'
import '../App.js'

function ToDoListItem(props) {
    return (
        <div className ="list">
            <input type="checkbox" 
            checked = {props.item.completed} 
            onChange={()=>props.handleChange(props.item.id)}/>
            <span> {props.item.text}</span>
            <hr />
        </div>
    )
}

export default ToDoListItem;