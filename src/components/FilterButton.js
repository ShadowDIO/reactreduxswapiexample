import React from 'react';

class FilterButton extends React.Component {

    render() {
        return (
            <div className={this.props.className} key={this.props.Key}>
                <button className="fluid big ui button" onClick={() => { console.log('clicked', this.props.text); this.props.onClick(this.props.value); }} value={this.props.value}>
                        {this.props.text}
                </button>
            </div>    
                );
            
        }
    }
    
export default FilterButton;