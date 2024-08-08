import { useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import Footer from "./components/Footer";

const initialStateTodos = [
    {
        id: Date.now() + 1,
        title: "Complete online Javascript bluuweb course",
        completed: true,
    },
    {
        id: Date.now() + 2,
        title: "Go to the gym",
        completed: false,
    },
    {
        id: Date.now() + 3,
        title: "10 minutes meditation",
        completed: false,
    },
    {
        id: Date.now() + 4,
        title: "Pick up groceries",
        completed: false,
    },
    {
        id: Date.now() + 5,
        title: "Complete todo app on FrontEnd Mentor",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

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

    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-900 bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat transition-all duration-1000">
            <Header></Header>
            <main className="mt-8 container mx-auto px-4">
                <TodoCreate createTodo={createTodo}></TodoCreate>
                <TodoList
                    /* todos={todos} */
                    todos={filteredTodos(filter)}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                ></TodoList>
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
