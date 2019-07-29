import React, { useState } from 'react';

import { selectCategory } from '../actions';

import { connect } from 'react-redux';


const SearchBox = (props) => {

    const [value, setValue] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.selectCategory(props.SelectedCategory, value)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="ui fluid icon input">
                <input type="text" placeholder="Search..." value={value} onChange={(e) => { setValue(e.target.value); }} />
                <button className="ui button" onClick={() => { console.log('Search Clicked', value); }}>Search</button>
            </div>
        </form>
        );
    
}

const mapStateToProps = (state) => {
    console.log("From SearchBox", state);
    return (
        {
            SelectedCategory: state.categorySelected.category
        });
}

export default connect(mapStateToProps, { selectCategory })(SearchBox);
