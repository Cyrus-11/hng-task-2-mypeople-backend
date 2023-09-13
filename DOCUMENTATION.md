# API Documentation

## Overview

This document provides information on how to use the API endpoints, standard request and response formats, sample usage, and instructions for setting up and deploying the API.

### Base URL

```
https://hng-task-2-mypeople-backend.vercel.app/
```

## Endpoints

### 1. Create a Person

#### Endpoint

```
POST /api
```

#### Request Format

- **Request Body:**

```json
{
  "name": "John Doe",
}
```

#### Response Format

- **Success Response (HTTP Status Code: 201 Created):**
```json
{
  "message":"Person Created"
}

```json
 {
    "message": "Person Created",
    "person": {
        "name": "John Lemon",
        "_id": "650038b6538fea3e062a4988",
        "__v": 0
    }
}
```

- **Error Response (HTTP Status Code: 400 All field required - 404 User already exist):**

```json
{
  "message":"User already Exist"
}
```

### 2. Get a Person by ID

#### Endpoint

```
GET /:id
```

#### Request Format

- **URL Parameters:**

  - `id` (integer) - The ID of the person to retrieve.

#### Response Format

- **Success Response (HTTP Status Code: 200 OK):**
```json
{
 "message":"Person Found"
}

```json
{
    "message": "Person found",
    "person": {
        "_id": "650038b6538fea3e062a4988",
        "name": "John Lemon",
        "__v": 0
    }
}
```

- **Error Response (HTTP Status Code: 404 Not Found):**

```json
{
  "error": "Person not found"
}
```

### 3. Update a Person by ID

#### Endpoint

```
PUT /:id
```

#### Request Format

- **URL Parameters:**

  - `id` (integer) - The ID of the person to update.

- **Request Body:**

```json
{
  "name": "Updated Name"
}
```

#### Response Format

- **Success Response (HTTP Status Code: 200 OK):**
```json
{
 "message":"Person Updated"
}

```json
{
    "message": "Person Updated",
    "person": {
        "_id": "650038b6538fea3e062a4988",
        "name": "John Lemon France",
        "__v": 0
    }
}
```

- **Error Response (HTTP Status Code: 404 Not Found):**

```json
{
  "error": "Person not found"
}
```

### 4. Delete a Person by ID

#### Endpoint

```
DELETE /:id
```

#### Request Format

- **URL Parameters:**

  - `id` (integer) - The ID of the person to delete.

#### Response Format

- **Success Response (HTTP Status Code: 200 OK):**
```json
{
 "message": "Person deleted"
}
```json
{
    "message": "Person deleted",
    "person": {
        "_id": "650038b6538fea3e062a4988",
        "name": "John Lemon France",
        "__v": 0
    }
}
```

- **Error Response (HTTP Status Code: 404 Not Found):**

```json
{
  "error": "Person has already being deleted"
}
```

## Sample Usage

Here are some sample requests and expected responses using postman:

### Create a Person

**Request:**

```http
POST https://hng-task-2-mypeople-backend.vercel.app/

Content-Type: raw/json

{
  "name": "John Doe",
}
```

**Response (201 Created):**

```json
{
    "message": "Person Created",
    "person": {
        "name": "john snow",
        "_id": "6500d3b1144957cc5ec19b5e",
        "__v": 0
    }
}
```

### Get a Person by ID

**Request:**

```http
GET https://hng-task-2-mypeople-backend.vercel.app/6500d3b1144957cc5ec19b5e
```

**Response (200 OK):**

```json
{
    "message": "Person found",
    "person": {
        "_id": "6500cc37842912ae7f84c961",
        "name": "Mark John",
        "__v": 0
    }
}
```

### Update a Person by ID

**Request:**

```http
PUT https://hng-task-2-mypeople-backend.vercel.app/6500cc37842912ae7f84c961
Content-Type: raw/json

{
  "name": "Updated Name",
}
```

**Response (200 OK):**

```json
{
    "message": "Person Updated",
    "person": {
        "_id": "6500cc37842912ae7f84c961",
        "name": "Markup",
        "__v": 0
    }
}
```

### Delete a Person by ID

**Request:**

```http
DELETE https://hng-task-2-mypeople-backend.vercel.app/6500cc37842912ae7f84c961
```

**Response (200 OK):**

```json
{
    "message": "Person deleted",
    "person": {
        "_id": "6500cc37842912ae7f84c961",
        "name": "Markup",
        "__v": 0
    }
}
```

## Known Limitations

- This API does not include authentication and authorization mechanisms. Consider implementing them for production use.

## Setup and Deployment

To set up and deploy the API locally or on a server, follow these steps:

1. Clone the repository: `git clone https://github.com/Cyrus-11/hng-task-2-mypeople-backend.git`

2. Install dependencies: `npm install`

3. Configure your database connection settings in a `.env` file.

4. Start the API: `npm start`

5. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port you specified in your environment variables.

6. Deploy the API to your preferred hosting service or cloud platform following their deployment guidelines.

---

This documentation file provides an overview of the API endpoints, request/response formats, sample usage, known limitations, and setup/deployment instructions. Users can refer to this documentation to interact with the API effectively.