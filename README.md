# HNGx Stage Two

This is the repository that contains the code for the Stage Two task of the HNG Backend Internship.

## Description
## Project Description: Node.js REST API for Managing Persons

**Overview:**

This project is a robust and flexible RESTful API built using Node.js and MongoDB, designed to manage and manipulate data related to individuals or "persons." The API offers Create, Read, Update, and Delete (CRUD) operations for person records and includes dynamic parameter handling, making it a versatile tool for various applications.

**Key Features:**

- **Create:** Add new person records to the database with relevant details, such as name, age, email, and more. The API ensures data integrity by validating input fields.

- **Read:** Retrieve detailed information about a specific person by their unique identifier (ID). Additionally, the API allows for dynamic querying based on a person's name, making it easy to retrieve records for individuals with the same name.

- **Update:** Modify the attributes of an existing person, allowing you to keep your data up to date. Users can update information such as age, email, or any other person-specific data.

- **Delete:** Remove a person record from the database by specifying the unique identifier (ID). This feature helps in maintaining an accurate and relevant database.

- **Dynamic Parameter Handling:** The API goes beyond basic CRUD operations by introducing dynamic parameter handling. By utilizing the `name` query parameter, users can perform CRUD operations on persons with a specific name. This feature adds a layer of flexibility, enabling operations tailored to individual records based on their names.

**Project Components:**

- **Express.js Application:** The project is built on the Express.js framework, providing a robust foundation for handling HTTP requests and routing.

- **MongoDB Database:** Data is stored in a MongoDB database, ensuring scalability and flexibility in data management.

- **Mongoose ODM:** Mongoose, an Object Data Modeling (ODM) library, simplifies interaction with the MongoDB database, offering data validation and schema management.

- **API Documentation:** A comprehensive API documentation file is provided, outlining the standard formats for requests and responses for each endpoint. It includes usage examples and instructions for setting up and deploying the API locally or on a server.

**Usage and Deployment:**

This Node.js REST API can be easily integrated into various applications that require the management of person data. It can be deployed to your preferred hosting environment or cloud platform, and the provided documentation guides you through the setup process.

**Conclusion:**

The Node.js REST API for Managing Persons is a versatile and powerful tool for handling person-related data in your applications. Its CRUD capabilities, dynamic parameter handling, and clear documentation make it a valuable asset for developers working on projects that require data management of individual records.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```
   https://github.com/Cyrus-11/hng-task-2-mypeople-backend
   ```

2. Install project dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:
   ```
   PORT=5001                 # Port on which the server will run
   CONNECTION_STRING=
   ```

5. Start the server:

   ```
   npm start
   ```

The server will start running on `http://localhost:5001`.

## API Endpoints

The following endpoints are available:

- GET /api: Retrieves all persons from the database.
- POST /api: Creates a new person.
- GET /api/:id: Retrieves a person by their ID.
- PUT /api/:id: Updates a person by their ID.
- DELETE /api/:id: Deletes a person by their ID.

Please note that the API supports both JSON request bodies and query parameters, depending on the endpoint.

## Usage

To interact with the API, you can use tools like Postman or cURL. Here are some example requests:
- [Postman link for testing and link to collection ] (https://elements.getpostman.com/redirect?entityId=29598696-ccab6453-2948-4096-b88f-9332efd88271&entityType=collection)
- GET all persons:

```

GET http://localhost:5001/api

```

Response

```
{
    "message": "All Users",
    "person": [
        {
            "_id": "65002538ae4183e0d4897d81",
            "name": "John Samuel",
            "__v": 0
        },
        {
            "_id": "65002847c6464a2b351c1f07",
            "name": "john Doe",
            "__v": 0
        },
        {
            "_id": "650028f718acfe744e205a19",
            "name": "john shanks",
            "__v": 0
        }
    ]
}
```

- POST a new person:

```
POST http://localhost:5001/api
```

Response:
```
 {
    "message": "Person Created",
    "person": {
        "name": "John Lemon",
        "_id": "650038b6538fea3e062a4988",
        "__v": 0
    }
}
```

- GET a person by ID:

```

GET http://localhost:5001/api/:id

```

Response:

```
  {
    "message": "Person requested",
    "person": {
        "_id": "650038b6538fea3e062a4988",
        "name": "John Lemon",
        "__v": 0
    }
}

```

- PUT a person by ID:

```
PUT http://localhost:5001/api/:id
```
Response:
```
{
    "message": "Person Updated",
    "person": {
        "_id": "650038b6538fea3e062a4988",
        "name": "John Lemon France",
        "__v": 0
    }
}
```

- DELETE a person by ID:

```
DELETE http://localhost:5001/api/:id
```

Response:

```
{
    "message": "Person deleted",
    "person": {
        "_id": "650038b6538fea3e062a4988",
        "name": "John Lemon France",
        "__v": 0
    }
}
```


## Author

- [Egbiri Oluwayouinsola Cecil](https://github.com/Cyrus-11)

```

```
