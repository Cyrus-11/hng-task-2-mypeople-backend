const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Replace with the correct path to your Express app file
const expect = chai.expect;

chai.use(chaiHttp);

// Test to get all users
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

// Assert the presence of required response fields
pm.test("Response contains expected fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.include.all.keys('message', 'person');
});

// Validate each person's _id
pm.test("Each person has a valid _id", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.person).to.be.an('array');

    responseData.person.forEach(function (person) {
        pm.expect(person).to.have.property('_id').that.is.a('string').and.has.length.greaterThan(0);
    });
});

// Validate each person's name
pm.test("Each person has a valid name", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.person).to.be.an('array');

    responseData.person.forEach(function (person) {
        pm.expect(person).to.have.property('name').that.is.a('string').and.has.length.greaterThan(0);
    });
});

// Test for creating a new person
const responseJson = pm.response.json();

if (responseJson.hasOwnProperty('error')) {
    // Tests for scenarios where the user already exists
    pm.test("Response status code should be 409 for existing user", function () {
        pm.response.to.have.status(409);
    });

    pm.test("Response should contain 'error' property for existing user", function () {
        pm.expect(responseJson).to.have.property('error');
    });
} else {
    // Tests for scenarios where the user does not exist
    pm.test("Response should not contain 'error' property for new user", function () {
        pm.expect(responseJson).to.not.have.property('error');
    });

    pm.test("Response status code should be 201 for new user", function () {
        pm.response.to.have.status(201);
    });

    pm.test("Response contains 'message' and 'person' properties for new user", function () {
        pm.expect(responseJson).to.include.all.keys('message', 'person');
    });

    pm.test("Name in the response should match the name in the request", function () {
        const requestBody = pm.request.json();
        pm.expect(responseJson.person.name).to.equal(requestBody.name);
    });

    pm.test("Response should contain 'id' property for new user", function () {
        pm.expect(responseJson.person).to.have.property('_id');
        pm.environment.set("userId", responseJson.person._id);
    });
}
// Test to get a person by ID

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains expected fields", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.include.all.keys('message', 'person');
});

pm.test("Person object has valid _id and name properties", function () {
    const responseData = pm.response.json().person;
    pm.expect(responseData).to.have.property('_id').that.is.a('string').and.has.length.greaterThan(0);
    pm.expect(responseData).to.have.property('name').that.is.a('string').and.has.length.greaterThan(0);
});

// Test for updating a person

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains expected fields", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.include.all.keys('message', 'person');
});

pm.test("Person object has valid _id and name properties", function () {
    const responseData = pm.response.json().person;
    pm.expect(responseData).to.have.property('_id').that.is.a('string').and.has.length.greaterThan(0);
    pm.expect(responseData).to.have.property('name').that.is.a('string').and.has.length.greaterThan(0);
});

// Test for deleting a person

pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});

pm.test("Message is a non-empty string", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.message).to.be.a('string').and.has.length.greaterThan(0);
});

pm.test("Person object is present in the response", function () {
    const responseData = pm.response.json();
    pm.expect(responseData).to.have.property('person');
});

pm.test("The _id must be a non-empty string", function () {
    const responseData = pm.response.json().person;
    pm.expect(responseData._id).to.be.a('string').and.not.empty;
});

pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json().person;
    pm.expect(responseData.name).to.be.a('string').and.has.length.greaterThan(0);
});
