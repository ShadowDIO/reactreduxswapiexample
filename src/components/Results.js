import React from 'react';
import FilteredResults from './FilteredResults';
import ResultsDetail from './ResultsDetail';

import { connect } from 'react-redux';

class Results extends React.Component {


    render() {
        return (
            <div className="ui grid">
				<h4>Results</h4>
                <div className="six wide column">
                    <FilteredResults />
                </div>
                <div className="six wide column">
                    <ResultsDetail/>
                </div>
			</div>
			);
    }
}

const mapStateToProps = (state) => {
    return (
        {
            filteredResults: state.payload
        });
}

export default connect(mapStateToProps)(Results);