const schedule = require('./schedulerLogic');

var database = firebase.database();

test('gets something', () => {
    expect(getUserData('email@yahoo.com', database)).toBeDefined();
  });