# Register Patient

Registers a new patient with the provided credentials.

- **URL:** `/api/register-patient`
- **Method:** POST
- **Content-Type:** application/json

## Request Body

The request body should contain the following JSON fields:

- `username` (string): The username of the patient.
- `password` (string): The password of the patient.

Example Request Body:

```json
{
  "username": "john_doe",
  "password": "secretpassword"
}
```

## Response

- **HTTP Status:** 200 OK

If the registration is successful, no response body is returned.

## Error Responses

- **HTTP Status:** 400 Bad Request

If the request is malformed or missing required fields, an error response will be returned with an appropriate message describing the issue.

Example Error Response:

```json
{
  "message": "Invalid request body. Please provide a valid username and password."
}
```

- **HTTP Status:** 500 Internal Server Error

If an unexpected error occurs during the registration process, an error response will be returned with an appropriate message.

Example Error Response:

```json
{
  "message": "An unexpected error occurred while registering the patient."
}
```
