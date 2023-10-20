import './TodoListItem.scss';
import {MdCheckBox, MdCheckBoxOUtlineBlank, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md';
import cn from 'classnames';

function TodoListItem(props){
    //구조분해 할당으로 text와 checked를 받기
    const {id, text, checked} = props.todo;

    return(
        <div className='TodoListItem'>
            <div className = {cn('checkbox', {checked})} onClick={()=>{props.onToggle(id)}}>
                {
                    checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                <div className='text'>{props.todo.text}</div>
            </div>
            <div className='remove' onClick={()=>props.onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;