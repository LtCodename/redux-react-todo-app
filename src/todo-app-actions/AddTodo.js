//Функция, которая создает екшн, которая создает тудушку в редюсере

let nextTodoId = 0;
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

export default addTodo;