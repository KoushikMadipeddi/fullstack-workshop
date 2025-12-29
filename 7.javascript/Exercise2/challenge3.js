let original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'gaming']
};

function deepClone(obj) {
    // Your code here
    // const nani=structuredClone(obj);
    return structuredClone(obj); //it will not change


    // let nani={...obj};   for refrence ---it changes
    // return nani;
    
}

let cloned = deepClone(original);
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(original.address.city);  // Should still be 'New York'
console.log(original.hobbies);       // Should still be ['reading', 'gaming']