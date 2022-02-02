import { Component } from 'react';
import { Button, Modal, ModalBody, Form, Input, Label } from 'reactstrap';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            isModalOpen: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(event) {
        console.log(`Guest name: ${this.fullName.value}`);
        this.setState({ fullName: `Welcome back ${this.fullName.value}` });
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <div className="container my-5">
                <h1>{this.state.fullName}</h1>
                <Button onClick={this.toggleModal}>Check in</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <Label htmlFor="fullName">Enter your name:</Label>
                            <Input
                                type="text"
                                name="fullName"
                                id="fullName"
                                innerRef={(input) => (this.fullName = input)}
                            />
                            <Button>Check in</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Test;
