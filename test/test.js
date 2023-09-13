const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Replace with the correct path to your Express app file
const expect = chai.expect;

chai.use(chaiHttp);
//Test to get all users
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

// Remove redundant tests for response properties


pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Response has the required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('message');
    pm.expect(responseData).to.have.property('person');
});


pm.test("The _id field is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person).to.be.an('array');

    responseData.person.forEach(function (person) {
        pm.expect(person._id).to.be.a('string').and.to.have.lengthOf.at.least(1, "_id should not be empty");
    });
});


pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person).to.exist.and.to.be.an('array');

    responseData.person.forEach(function (person) {
        pm.expect(person.name).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Name should not be empty");
    });
});
//Test to create new person
// Check if the response contains an 'error' property
if (pm.response.json().hasOwnProperty('error')) {
    // Tests for scenarios where the user already exists
    pm.test("Response should have status 409 for existing user", function () {
        pm.response.to.have.status(409);
    });

    pm.test("Response should contain 'error' property for existing user", function () {
        pm.expect(pm.response.json()).to.have.property('error');
    });
} else {
    // Tests for scenarios where the user does not exist
    pm.test("Response should not contain 'error' property for new user", function () {
        pm.expect(pm.response.json()).to.not.have.property('error');
    });

    pm.test("Response should have status 200 for new user", function () {
        pm.response.to.have.status(201);
    });

    pm.test("Response should contain 'message' and 'person' properties for new user", function () {
        var jsonData = pm.response.json();
        pm.expect(jsonData).to.have.property('message');
        pm.expect(jsonData).to.have.property('person');
    });

    pm.test("Name in the response should match the name in the request", function () {
        var jsonData = pm.response.json();
        var requestBody = pm.request.json();

        pm.expect(jsonData.person.name).to.equal(requestBody.name);
    });

    pm.test("Response should contain 'id' property for new user", function () {
        var jsonData = pm.response.json().person;
        pm.expect(jsonData).to.have.property('_id');

        // Save the 'id' as an environment variable
        pm.environment.set("userId", jsonData._id);
    });
}

//Test to get person by id

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response has the required fields - message and person", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.message).to.exist;
    pm.expect(responseData.person).to.exist;
});


pm.test("Person has the required fields - _id and name", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person).to.exist;
    pm.expect(responseData.person._id).to.exist;
    pm.expect(responseData.person.name).to.exist;
});


pm.test("Check that _id is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person._id).to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});


pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person.name).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Name should not be empty");
});

//Test for updating person
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response has the required fields - message and person", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.have.property('message');
    pm.expect(responseData).to.have.property('person');
});


pm.test("Person object has the required fields - _id and name", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.person).to.exist.and.to.be.an('object');
    pm.expect(responseData.person._id).to.exist.and.to.be.a('string');
    pm.expect(responseData.person.name).to.exist.and.to.be.a('string');
});


pm.test("Check that _id is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person._id).to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});


pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person.name).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Name should not be empty");
});

//Test for deleting person


pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Message is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.message).to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});


pm.test("Person object is present in the response", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person).to.exist;
});


pm.test("The _id must be a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.person._id).to.exist.and.to.be.a('string').and.to.not.be.empty;
});


pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.person.name).to.be.a('string').and.to.have.lengthOf.at.least(1, "Name should not be empty");
});