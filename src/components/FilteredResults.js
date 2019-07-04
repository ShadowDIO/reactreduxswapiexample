import React from 'react';
import FilterButton from './FilterButton';

import { selectCategory, selectSubcategory } from '../actions';

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
                    Key={cat.url}
                    className="ui ten wide column"
                    onClick={this.props.selectSubcategory}
                    value={cat.url}
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

export default connect(mapStateToProps, { selectCategory, selectSubcategory})(FilteredResults);