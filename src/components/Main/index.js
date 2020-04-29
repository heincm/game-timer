import React, { Component } from 'react';
import { InputNumber, Form } from 'antd';

class Main extends Component {
    state = {
        defaultValue: 3
    }

    onChangePlayers(value) {
        console.log('changed', value)
    }

    onChangeMinutes(value) {
        console.log('changed minutes', value);
    }

    onFinish() {
        console.log('finished the form')
    }

    render() {
        return (
            <>
                <h1>hello</h1>
                <Form
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="Number of Players"
                        name="players"
                    >
                        <InputNumber
                            min={1}
                            max={10}
                            onChange={this.onChangePlayers}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Minutes per Player"
                        name="minutes"
                    >
                        <InputNumber
                            min={1}
                            max={10}
                            onChange={this.onChangeMinutes}
                        />
                    </Form.Item>
                </Form>
            </>
        )
    }
}

export default Main;