import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white dark:bg-gray-800 transition-all duration-1000 [&>article]:p-4 overflow-hidden">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                ></TodoItem>
            ))}
        </div>
    );
};

export default TodoList;
