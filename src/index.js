/* SIMPLE INCREMENT/DECREMENT APP */

/*const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const render = () => {
    ReactDOM.render(<App
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }/>,
    document.getElementById('root'));
};

store.subscribe(render);
render();*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import TodoApp from "./todo-app-components/Main";

/* TODO APP */

//Отдельный редюсер для работы с ADD_TODO и TOGGLE_TODO'
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

//Один из двух главных редюсеров (фильтры)
const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

//Один из двух главных редюсеров (тудушки)
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
};

//Создание рут редюсера
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

//Создаем стор из главного редюсера, обернули в провайдер, чтою потом делать коннект в компонентпх
ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />{/*Рендерим главный компонент*/}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();