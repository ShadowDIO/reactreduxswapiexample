import { combineReducers } from 'redux';

const categorySelectedReducer = (state = [], action) => {
    if (action.type === 'CATEGORY_SELECTED') {
        return action.payload;
    }

    return state;
}

const subCategorySelectedReducer = (state = [], action) => {
    if (action.type === 'SUBCATEGORY_SELECTED') {
        return action.payload;
    }

    return state;
}

export default combineReducers({
    categorySelected: categorySelectedReducer,
    //filterSubCategory: filterSubCategories,
    subCategorySelected: subCategorySelectedReducer
});