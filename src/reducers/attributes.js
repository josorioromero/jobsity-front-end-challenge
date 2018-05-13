import { CATEGORIES } from '../constants';
import { getElement } from '../utils';


const mock_json = [
    {
        name: 'Mock_device_1',
        description: 'Mock_description_1',
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