import React from 'react';

import { selectSubcategory } from '../actions';

import { connect } from 'react-redux';

const ResultsDetail = (props) => {
    console.log("Render", props.filteredResults);
    return (
        <div className="ui raised segment">
            <pre>
             {JSON.stringify(props.filteredResults,null,1)}
            </pre>
		</div>
    );
}

const mapStateToProps = (state) => {
    console.log("From Results Details", state);
    return (
        {
            filteredResults: state.subCategorySelected.filteredResults
        });
}

export default connect(mapStateToProps, { selectSubcategory})(ResultsDetail);