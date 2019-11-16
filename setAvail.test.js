const setAvail = require('./setAvail');

test('availability of employee, expecting true to be returned', () => {
    expect(setAvail()).toBe(true);
});

test('Should be null', () => {
    expect(setAvail().isNull()).toBeNull();
    });