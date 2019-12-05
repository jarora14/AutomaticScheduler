const sum = require('./schedulerEmp');

test('check if correct amount of table entries', () => {
	expect(generateTableHead(0)).toBe(8);
});
