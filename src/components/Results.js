import React from 'react';

import ResultsDetail from './ResultsDetail';

import { connect } from 'react-redux';

class Results extends React.Component {


    render() {
        return (
            <div className="ui segment">
				<h4>Results</h4>
                <div>
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