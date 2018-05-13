import React from 'react';
import { Cell, Grid } from 'react-md';

import TabContainer from './containers/tab';

import Editor from './components/editor';

import './App.css';

const json = [
    {
        _id: "59ee8907e078a22546567dde",
        name: "Name",
        description: "Name for the device as provided by the user",
        dataType: "STRING",
        format: "NONE",
        category: "DEVICE INFO",
        enumerations: [
        "asd",
        "dsa"
        ],
        min: null,
        max: null,
        unitOfMeasurement: null,
        precision: null,
        accuracy: null,
        defaultValue: "Jhon Doe",
        device: ""
    },
    {
        _id: "59eec73c4ea3dc2584b2337d",
        name: "Location",
        description: "Location provided by the user",
        dataType: "STRING",
        format: "NUMBER",
        category: "DEVICE INFO",
        enumerations: [],
        min: 0,
        max: 10,
        unitOfMeasurement: "mm",
        precision: 2,
        accuracy: 5,
        defaultValue: "",
        device: ""
    }
];

const App = () => (
    <div className="App">
        <Grid>
            <Cell size={8}>
                <TabContainer />
            </Cell>
            <Cell size={4}>
                <Editor json={json} />
            </Cell>
        </Grid>
    </div>
);

export default App;
