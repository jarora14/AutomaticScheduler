const employeeStatus = require("./employeeStatus");

test('Tiger Woods should be in employees', () => {
    employees = ['Pele' ,'Michael Philips', 'Tiger Woods'];
    expect(employees).toContain('Tiger Woods');
});