import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class ReviewFilters extends React.Component {

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    render() {
        return (
            <div className="content-container1">
                <div className="input-group">
                    <div className="searchbar"> 
                        <input
                        type="text"
                        className="text-input"
                        placeholder="Search Reviews"
                        value={this.props.filters.text} 
                        onChange={this.onTextChange} 
                        size="30"
                    />
                    </div>  
                </div>     
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFilters);