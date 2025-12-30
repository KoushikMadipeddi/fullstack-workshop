const original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'gaming']
};

// Arrow function + const
const deepClone = (obj) => {
    // Handle primitives and null
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle arrays using map
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle objects using reduce (array method)
    return Object.keys(obj).reduce((clone, key) => {
        clone[key] = deepClone(obj[key]);
        return clone;
    }, {});
};

const cloned = deepClone(original);

cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

// Template literals for output
console.log(`Original city: ${original.address.city}`);
console.log(`Original hobbies: ${original.hobbies.join(', ')}`);
