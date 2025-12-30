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
    // Handle non-objects and null
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle arrays using map (array method)
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle objects
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) === true) { // strict equality
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
};

const cloned = deepClone(original);

cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

// Template literals for output
console.log(`Original city: ${original.address.city}`);  
console.log(`Original hobbies: ${original.hobbies.join(', ')}`);
