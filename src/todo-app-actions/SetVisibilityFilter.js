//Екшн для изменения фильтра тудушек
const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export default setVisibilityFilter;