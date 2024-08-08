const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white dark:bg-gray-800 p-4 transition-all duration-1000">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600 hover:text-gray-600"
                            : "text-gray-600 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600 hover:text-gray-600"
                            : "text-gray-600 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600 hover:text-gray-600"
                            : "text-gray-600 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Complete
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
