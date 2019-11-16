const sum = require('./schedulerMng');

test('check if correct amount of table entries', () => {
	expect(generateTableHead(0)).toBe(8);
});
