import React from 'react';
import FilterButton from './FilterButton';

import CategoryContext from '../contexts/CategoryContext';

import { selectSubcategory } from '../actions';

import { connect } from 'react-redux';

class FilteredResults extends React.Component {

    static contextType = CategoryContext;

    render() {
        return (
            <div>
                <h3>{this.context}</h3>
                <div className="ui grid">
                  {this.renderList()}
                </div>
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