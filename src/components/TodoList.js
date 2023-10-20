import TodoListItem from './TodoListItem';
import './TodoList.scss';

function TodoList(props){
    console.log(props.todos);
    return(
        <div className='TodoList'>
            {
                props.todos.map((todo)=>{
                    return <TodoListItem todo={todo} key={todo.id}
                        onRemove={props.onRemove} onToggle={props.onToggle}></TodoListItem>
                })
            }
        </div>
    )
}

export default TodoList;