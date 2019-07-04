import React from 'react';

class SearchBox extends React.Component {
    
    render() {
        return (
            <div className="ui fluid icon input">
                <input type="text" placeholder="Search..." />
                <div className="ui button" onClick={() => console.log('Clicked')}>Search</div>
            </div>
            );
    }
}


export default SearchBox;
