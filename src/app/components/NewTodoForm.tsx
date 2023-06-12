import { newTodo } from '../_utils/actions'

const NewTodoForm = ({}) => {
  

    return (
        <div>
            <form action={newTodo}>
                <input type="text"  className="border border-black"/>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default NewTodoForm