import { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        console.log('Submmited: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1>Test</h1>
                <form>
                    <label>
                        Is going:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default Test;
