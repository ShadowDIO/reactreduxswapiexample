import React from 'react';

import { Redirect } from 'react-router-dom';

class FilterButton extends React.Component {
    state = { shoudRedirect: false };

    render() {
        if (this.state.shouldRedirect) {
            console.log('redurect to', this.props.redirectTo);

            return (<Redirect to={this.props.redirectTo} />);
        }

        return (
            <div className={this.props.className} key={this.props.Key}>
                <button className="fluid big ui button" onClick={() => { console.log('clicked', this.props.text); this.props.onClick(this.props.value); this.setState({ shouldRedirect: true});}} value={this.props.value}>
                        {this.props.text}
                </button>
            </div>
                );
        }
    }
    
export default FilterButton;