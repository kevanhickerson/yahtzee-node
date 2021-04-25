const GenericCategory = require('./GenericCategory');

test('Sorts in ascending order', () => {
    const cat = new GenericCategory([5, 4, 3, 2, 1]);
    cat.sort();
    expect(cat.dice).toEqual([1, 2, 3, 4, 5]);
});

test('Gets a default value for name', () => {
    const cat = new GenericCategory([5, 4, 3, 2, 1]);

    expect(cat.getName()).toEqual('');
})

test('Can get name', () => {
    const cat = new GenericCategory([5, 4, 3, 2, 1], 'test name');

    expect(cat.getName()).toEqual('test name');
})