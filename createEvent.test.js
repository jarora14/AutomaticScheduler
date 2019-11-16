const createEvent = require('./createTheEvent');
test('testing createEvent.js, expecting true to be returned', () => {
    expect(createTheEvent()).toBe(true);
  });