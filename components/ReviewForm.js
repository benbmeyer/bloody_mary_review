import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                location: props.bloody ? props.bloody.location : '',
                price: props.bloody ? (props.bloody.price / 100).toString() : '',
                rating: props.bloody ? props.bloody.rating : '',
                spice: props.bloody ?  props.bloody.spice : '',
                comment: props.bloody ? props.bloody.comment : '',
                error: ''
            };
    }
    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }));
    };
    onPriceChange = (e) => {
        const price = e.target.value;

        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        } else {
            price === 0
        }
    };
    onRatingChange = (e) => {
        const rating = e.target.value;
        this.setState(() => ({ rating }));
    };
    onSpiceChange = (e) => {
        const spice = e.target.value;
        this.setState(() => ({ spice }));
    };
    onCommentChange = (e) => {
        const comment = e.target.value;
        this.setState(() => ({ comment }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.location || !this.state.rating) {
            this.setState(() => ({ error: 'Please provide location and rating.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                location: this.state.location,
                price: parseFloat(this.state.price, 10) * 100,
                rating: this.state.rating,
                spice: this.state.spice,
                comment: this.state.comment           
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>} 
                <input
                    type="text"
                    placeholder="Location"
                    autoFocus
                    className="text-input"
                    value={this.state.location}
                    onChange={this.onLocationChange}
                    />
                    <input 
                        type="text"
                        placeholder="Price"
                        className="text-input"
                        value={this.state.price}
                        onChange={this.onPriceChange}
                    />
                    <input 
                        type="text"
                        placeholder="Rating"
                        className="text-input"
                        value={this.state.rating}
                        onChange={this.onRatingChange}
                    />
                    <input 
                        type="text"
                        placeholder="Spiciness"
                        className="text-input"
                        value={this.state.spice}
                        onChange={this.onSpiceChange}
                    />
                    <textarea
                        placeholder="Add a Comment (optional)"
                        className="textarea"
                        value={this.state.comment}
                        onChange={this.onCommentChange}
                    > 
                    </textarea>
                    <div>
                        <button className="button">Submit Review</button>
                    </div>
                </form>
        )
    }
}