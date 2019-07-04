import React from 'react';
import FilterButton from './FilterButton';
import SearchBox from './SearchBox';
import ResultsBox from './Results';

import { selectCategory } from '../actions';

import { connect } from 'react-redux';

const App = (props) => {
    return (
        <div className="ui container">
            <h1 className="ui center aligned header">
                STAR WARS
            </h1>
            <div className="ui segment">
                <div className="ui grid">
                    <div className="five wide column">
                        <FilterButton text="PLANETS" value="planets" onClick={props.selectCategory}/>
                    </div>
                    <div className="five wide column">
                        <FilterButton text="STARSHIPS" value="starships" onClick={props.selectCategory}/>
                    </div>
                    <div className="five wide column">
                        <FilterButton text="VEHICLES" value="vehicles" onClick={props.selectCategory}/>
                    </div>
                    <div className="five wide column">
                        <FilterButton text="PEOPLE" value="people" onClick={props.selectCategory}/>
                    </div>
                    <div className="five wide column">
                        <FilterButton text="FILMS" value="films" onClick={props.selectCategory}/>
                    </div>
                    <div className="five wide column">
                        <FilterButton text="SPECIES" value="species" onClick={props.selectCategory}/>
                    </div>
                </div>
            </div>
            <div className="ui segment">
                <div>
                    <SearchBox />
                </div>
            </div>
            <div className="ui segment">
                <ResultsBox />
            </div>
        </div>);
}

const mapStateToProps = (state) => {
    console.log(state);
    return (
        {
            filteredResults: state.filterSubCategory
        });
}

export default connect(mapStateToProps, { selectCategory })(App);