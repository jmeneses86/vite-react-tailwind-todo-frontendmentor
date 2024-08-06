import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button
                className={`w-5 h-5 rounded-full border-2 ${completed ? "flex flex-none items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block"}`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck></IconCheck>}
            </button>
            <p className={`grow text-gray-600 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross></IconCross>
            </button>
        </article>
    );
};

export default TodoItem;
