import React from 'react';

import { selectSubcategory } from '../actions';

import { connect } from 'react-redux';

class ResultsDetail extends React.Component {

    render() {
        console.log("Render", this.props.filteredResults);
        return (
            <div class="ui raised segment">
                <pre>
                    {JSON.stringify(this.props.filteredResults)}
                </pre>
			</div>
        );

    }
}

ResultsDetail.defaultProps = { filteredResults: '' };

const mapStateToProps = (state) => {
    console.log("From Results Details", state);
    return (
        {
            filteredResults: state.subCategorySelected.filteredResults
        });
}

export default connect(mapStateToProps, { selectSubcategory})(ResultsDetail);