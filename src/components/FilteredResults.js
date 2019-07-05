import React from 'react';
import FilterButton from './FilterButton';

import { selectSubcategory } from '../actions';

import { connect } from 'react-redux';

class FilteredResults extends React.Component {

    render() {
        return (
            <div className="ui grid">
                { this.renderList() }
			</div>
			);
    }

    renderList() {

        var subCats = this.props.filteredSubCategories;

        return subCats.map((cat) => {
            return (
                <FilterButton
                    text={cat.name ? cat.name : cat.title}
                    key={cat.url}
                    className="ui four wide column"
                    onClick={this.props.selectSubcategory}
                    value={cat.url}
                    redirectTo="resultsPage"
                />
                )
        });
    }
}

FilteredResults.defaultProps = { filteredSubCategories: [] };

const mapStateToProps = (state) => {
    return (
        {
            selectedCategory: state.categorySelected.category,
            filteredSubCategories: state.categorySelected.filteredSubCategories
        });
}

export default connect(mapStateToProps, { selectSubcategory })(FilteredResults);