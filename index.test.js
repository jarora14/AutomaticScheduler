const index = require('./index');

test('validates write user data', () => {
    expect(writeUserData('test','test')).toBe(true);
});