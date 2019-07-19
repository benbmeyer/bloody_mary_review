import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { startEditBloody, startRemoveBloody } from '../actions/bloodies'

export class EditReviewPage extends React.Component {
    onSubmit = (bloody) => {
        this.props.startEditBloody(this.props.bloody.id, bloody);
        this.props.history.push('/');  
    }; 
    onRemove = () => {
        this.props.startRemoveBloody({ id: this.props.bloody.id });
        this.props.history.push('/'); 
    };
    render() {
        return (
            <div className="background">
            <div className="content-container1">
            <div>
                <h1 className="list-header">Edit This Review</h1>
                <div className="content-container1">
                <ReviewForm 
                    bloody={this.props.bloody}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove Bloody</button>
                </div>
            </div>
            </div>  
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
        bloody: state.bloodies.find((bloody) => bloody.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditBloody: (id, bloody) => dispatch(startEditBloody(id, bloody)),
    startRemoveBloody: (data) => dispatch(startRemoveBloody(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewPage);