import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Gift extends Component {
    constructor() {
        super();
        this.state = { person: '', present: '' }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className='input-person' 
                            onChange={ ({ target }) => { this.setState({ person: target.value }) }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl 
                            className='input-present' 
                            onChange={ ({ target }) => { this.setState({ present: target.value }) }}
                            />
                    </FormGroup>
                    <Button 
                        className='btn-remove'
                        onClick={() => this.props.removeGift(this.props.gift.id)}
                    >Remove Gift</Button>
                </Form>
            </div>
        )
    }
}

export default Gift;