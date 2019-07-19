import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { startAddBloody } from '../actions/bloodies';

export class WriteAReviewPage extends React.Component {
    onSubmit = (bloody) => {
        this.props.startAddBloody(bloody);
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="background">
                <div className="content-container1">
                    <div>
                        <h1 className="list-header">Write a Bloody Review!</h1>
                    </div>
                    <div className="content-container1">
                    <ReviewForm
                        onSubmit={this.onSubmit}    
                    />
                    </div>
                </div>
            </div>
        );   
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddBloody: (bloody) => dispatch(startAddBloody(bloody))
});

export default connect(undefined, mapDispatchToProps)(WriteAReviewPage);