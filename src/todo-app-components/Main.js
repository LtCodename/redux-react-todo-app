import AddTodo from "./AddTodo";
import VisibleTodoList from "./TodoList";
import Footer from "./Footer";
import React from "react";

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;