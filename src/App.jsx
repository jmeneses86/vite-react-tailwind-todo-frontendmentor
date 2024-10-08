import { DragDropContext } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const filteredTodos = (filter) => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => setFilter(filter);

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;
        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-900 bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-contain bg-no-repeat transition-all duration-1000">
            <Header></Header>
            <main className="mt-8 container mx-auto px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo}></TodoCreate>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        /* todos={todos} */
                        todos={filteredTodos(filter)}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    ></TodoList>
                </DragDropContext>
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                ></TodoComputed>
                <TodoFilter
                    changeFilter={changeFilter}
                    filter={filter}
                ></TodoFilter>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default App;
