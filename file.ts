// Import lodash library
import _ from 'lodash';

// Define arrays for property paths and values
const propertyPaths = ['a.b[0].c', 'a.b[1].d', 'e[0]', 'e[1].f.g'];
const values = [1, 2, 3, 4];

// Use zipObjectDeep to create the object
const result = _.zipObjectDeep(propertyPaths, values);

// Log the result
console.log(result);
