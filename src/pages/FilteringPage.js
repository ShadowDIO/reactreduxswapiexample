import React from 'react';

import SearchBox from '../components/SearchBox';
import FilteredResults from '../components/FilteredResults';

const FilteringPage = () => {
    return (
        <div className="ui segment">
            <div>
                <SearchBox />
            </div>
            <div className="ui horizontal divider" />
            <div>
                <FilteredResults />
            </div>
        </div>
    );
}

export default FilteringPage;