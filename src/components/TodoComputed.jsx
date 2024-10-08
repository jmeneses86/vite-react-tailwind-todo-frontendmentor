const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between bg-white py-4 px-4 rounded-b-md dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} item left</span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear completed
            </button>
        </section>
    );
};

export default TodoComputed;
