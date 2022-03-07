import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (tasks = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...tasks, action.payload];
        case UPDATE:
            return tasks.map((post)=> post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return tasks.filter((post) => post._id !== action.payload);
        default:
            return tasks;
    }
};