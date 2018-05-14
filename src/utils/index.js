// Given a collection, obtain an element that matches the value
export const getElement = (collection, value) => collection.find(
    element => element === value
);

// Given an attributesList, filter by the given category
export const filterAttributesList = (attributesList, category) => (
    attributesList.filter(attribute => attribute.category === category)
);
