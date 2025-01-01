import { MdDelete,MdCheck } from "react-icons/md"

export const TodoList = ({curTask,onDelete,checked,onchecked}) =>{
    const checkedCondition = checked? "checked":"notCheck";
    return(<>
        <li className='tast-list'>
                            <span className={`span ${checkedCondition}`}>{curTask}</span>
                            <div className='btn-class'>

                            <button className='check-btn' onClick={()=>onchecked(curTask)}><MdCheck /></button>
                            <button className="del-btn" onClick={()=>onDelete(curTask)}><MdDelete /></button>
                            </div>
                        </li>
    </>)
}