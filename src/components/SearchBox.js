import React from 'react';

import { selectCategory } from '../actions';

import { connect } from 'react-redux';


class SearchBox extends React.Component {

    inputValue = '';

    render() {
        return (
            <div className="ui fluid icon input">
                <input type="text" placeholder="Search..." onChange={(e) => { this.inputValue = e.target.value; }} />
                <div className="ui button" onClick={() => { console.log('Search Clicked', this.inputValue); this.props.selectCategory(this.props.SelectedCategory, this.inputValue) }}>Search</div>
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    console.log("From SearchBox", state);
    return (
        {
            SelectedCategory: state.categorySelected.category
        });
}

export default connect(mapStateToProps, { selectCategory })(SearchBox);
