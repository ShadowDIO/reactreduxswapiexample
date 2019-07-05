import React from 'react';

import FilterButton from '../components/FilterButton';

import { selectCategory } from '../actions';

import { connect } from 'react-redux';


const CategorySelectionPage = (props) => {
    return (
            <div className="ui segment">
                <div className="ui grid">
                    <div className="five wide column">
                    <FilterButton text="PLANETS" value="planets" onClick={props.selectCategory} redirectTo="filteringPage" />
                    </div>
                    <div className="five wide column">
                    <FilterButton text="STARSHIPS" value="starships" onClick={props.selectCategory} redirectTo="filteringPage" />
                    </div>
                    <div className="five wide column">
                    <FilterButton text="VEHICLES" value="vehicles" onClick={props.selectCategory} redirectTo="filteringPage" />
                    </div>
                    <div className="five wide column">
                    <FilterButton text="PEOPLE" value="people" onClick={props.selectCategory} redirectTo="filteringPage" />
                    </div>
                    <div className="five wide column">
                    <FilterButton text="FILMS" value="films" onClick={props.selectCategory} redirectTo="filteringPage" />
                    </div>
                    <div className="five wide column">
                    <FilterButton text="SPECIES" value="species" onClick={props.selectCategory} redirectTo="filteringPage" />
                    </div>
                </div>
            </div>
        );
}

export default connect(null, { selectCategory })(CategorySelectionPage);