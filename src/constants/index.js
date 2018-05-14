export const CATEGORIES = {
    DEVICE_INFO: 'DEVICE_INFO',
    SENSORS: 'SENSORS',
    SETTINGS: 'SETTINGS',
    COMMANDS: 'COMMANDS',
    METADATA: 'METADATA'
};

export const DATA_TYPES = {
    STRING: 'STRING',
    OBJECT: 'OBJECT'
};

export const FORMATS = {
    NONE: 'NONE',
    NUMBER: 'NUMBER',
    BOOLEAN: 'BOOLEAN',
    DATE_TIME: 'DATE_TIME',
    CDATA: 'CDATA',
    URI: 'URI'
};

export const MOCK_ATTRIBUTES = [
    {
        name: 'Mock_device_1',
        description: 'Mock_description_1',
        dataType: DATA_TYPES.STRING,
        format: FORMATS.NONE,
        category: CATEGORIES.DEVICE_INFO,
        enumerations: [
            'foo',
            'bar'
        ],
        min: null,
        max: null,
        unitOfMeasurement: null,
        precision: null,
        accuracy: null,
        defaultValue: '',
        device: ''
    },
    {
        name: 'Mock_device_2',
        description: 'Mock_description_2',
        dataType: DATA_TYPES.STRING,
        format: FORMATS.NONE,
        category: CATEGORIES.COMMANDS,
        enumerations: [
            'foo',
            'bar'
        ],
        min: null,
        max: null,
        unitOfMeasurement: null,
        precision: null,
        accuracy: null,
        defaultValue: '',
        device: ''
    },
    {
        name: 'Mock_device_3',
        description: 'Mock_description_3',
        dataType: DATA_TYPES.STRING,
        format: FORMATS.NONE,
        category: CATEGORIES.DEVICE_INFO,
        enumerations: [
            'foo',
            'bar'
        ],
        min: null,
        max: null,
        unitOfMeasurement: null,
        precision: null,
        accuracy: null,
        defaultValue: '',
        device: ''
    }
];

export const SEED_ATTRIBUTE = {
    name: '',
    description: '',
    dataType: DATA_TYPES.STRING,
    format: FORMATS.NONE,
    category: '',
    enumerations: [],
    min: null,
    max: null,
    unitOfMeasurement: null,
    precision: null,
    accuracy: null,
    defaultValue: '',
    device: ''
};

export const TABS_ENUM = {
    0: CATEGORIES.DEVICE_INFO,
    1: CATEGORIES.SENSORS,
    2: CATEGORIES.SETTINGS,
    3: CATEGORIES.COMMANDS,
    4: CATEGORIES.METADATA
};
