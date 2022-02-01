import { Component, setState } from "react";

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({ userInput: e.target.value });
    };

    render() {
        return (
            <div className="container my-5">
                <h1>TEST</h1>
                <form>
                    Enter your name:{" "}
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleInputChange}
                    />
                </form>
                <hr />
            </div>
        );
    }
}
