import React from 'react';

import SearchBox from '../components/SearchBox';
import FilteredResults from '../components/FilteredResults';

import CategoryContext from '../contexts/CategoryContext';

import { connect } from 'react-redux';

const FilteringPage = (props) => {

    return (
        <div className="ui segment">
            <div>
                <SearchBox />
            </div>
            <div className="ui horizontal divider" />
            <div>
                <CategoryContext.Provider value={props.selectedCategoryValue}>
                    <FilteredResults />
                </CategoryContext.Provider>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    
    return (
        {
            selectedCategoryValue: state.categorySelected.category.charAt(0).toUpperCase() + state.categorySelected.category.slice(1)
        });
}

export default connect(mapStateToProps)(FilteringPage);