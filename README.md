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
  "username": "laioffer1",
  "password": "123456"
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
***
***

# Set Patient Profile

Set a new patient file using RegisterPatientBody

- **URL:** `/api/set-patient-profile`
- **Method:** POST
- **Content-Type:** application/json

## Request Body

The request body should contain the following JSON fields:

- `first_name` (String):
- `last_name` (String):
- `gender` (String):
- `date_of_birth` (String):
- `insurance` (Boolean):
- `email` (String):
- `phone` (String):
- `mail_address` (String):
- `payment` (String): return null if not have payment methods

Example Request Body:

```json
{
  "first_name": "Mike",
  "password": "smith",
  "gender": "male",
  "date_of_birth": "19900423",
  "insurance": true,
  "email": "123456@gmail.com",
  "phone": "1231231234"
  "mail_address": "1234 A street San_jose CA United_States",
  "payment": null
}
```
***
***

# Get Patient Profile

Get current patient file

- **URL:** `/api/set-patient-profile`
- **Method:** GET
- **Content-Type:** application/json

## Response

- **HTTP Status:** 200 OK

If the patient profile is found, the response body will contain the profile information in the following JSON format:
Example

```json
{
  "Id": "123456",
  "firstName": "John Doe",
  "lastName": 35,
  "gender": "male",
  "dateOfBirth": "19891122",
  "insurance": true,
  "email": "1324@gmail.com",
  "phone": "1231231234",
  "mailAddress": "1234 A street San_jose CA United_States",
  "payment": null
}
```
- `Id` (Long):
- `first_name` (String):
- `last_name` (String):
- `gender` (String):
- `date_of_birth` (String):
- `insurance` (Boolean):
- `email` (String):
- `phone` (String):
- `mail_address` (String):
- `payment` (String): return null if not have payment methods

***
***

# Update Patient Profile

Update current patient file

- **URL:** `/api/update-patient-profile`
- **Method:** PUT
- **Content-Type:** application/json

## Request Body

The request body should contain the following JSON fields:

- `first_name` (String):
- `last_name` (String):
- `gender` (String):
- `date_of_birth` (String):
- `insurance` (Boolean):
- `email` (String):
- `phone` (String):
- `mail_address` (String):
- `payment` (String): return null if not have payment methods

Example Request Body:

```json
{
  "first_name": "Mike",
  "password": "smith",
  "gender": "male",
  "date_of_birth": "19900423",
  "insurance": true,
  "email": "123456@gmail.com",
  "phone": "1231231234",
  "mail_address": "1234 A street San_jose CA United_States",
  "payment": null
}
```
***
***

# Delete Patient Profile

Delete current patient file

- **URL:** `/api/delete-patient-profile`
- **Method:** DELETE
- **Content-Type:** application/json

## Response

- **HTTP Status:** 200 OK

***
***

# Register Doctor

Registers a new doctor with the provided credentials.

- **URL:** `/api/register-doctor`
- **Method:** POST
- **Content-Type:** application/json

## Request Body

The request body should contain the following JSON fields:

- `username` (string): The username of the patient.
- `password` (string): The password of the patient.

Example Request Body:

```json
{
  "username": "laioffer1",
  "password": "134567"
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
  "message": "An unexpected error occurred while registering the doctor."
}
```

***
***

# Set Doctor Profile

Set a new doctor file using RegisterDoctorBody

- **URL:** `/api/set-doctor-profile`
- **Method:** POST
- **Content-Type:** application/json

## Request Body

The request body should contain the following JSON fields:

- `first_name` (String):
- `last_name` (String):
- `gender` (String):
- `date_of_birth` (String):
- `email` (String):
- `phone` (String):
- `spec` (String):
- `mail_address` (String):
- `license` (String):

Example Request Body:

```json
{
  "first_name": "Mike",
  "password": "smith",
  "gender": "male",
  "date_of_birth": "19900423",
  "email": "123456@gmail.com",
  "phone": "1231231234"
  "spec": "BrainDead",
  "mail_address": "1234 A street San_jose CA United_States",
  "licese": "fakelicense12345"
}
```
***
***

# Get Doctor Profile

Get current doctor profile

- **URL:** `/api/get-doctor-profile`
- **Method:** GET
- **Content-Type:** application/json

## Response

- **HTTP Status:** 200 OK

If the patient profile is found, the response body will contain the profile information in the following JSON format:
Example

```json
{
  "Id": "123456",
  "firstName": "John Doe",
  "lastName": 35,
  "gender": "male",
  "dateOfBirth": "19891122",
  "email": "123@gmail.com",
  "phone": "1231231234",
  "spec": "BrainDead",
  "mailAddress": "1234 A street San_jose CA United_States",
  "license": "guessguess123"
}
```
- `Id` (Long):
- `first_name` (String):
- `last_name` (String):
- `gender` (String):
- `date_of_birth` (String):
- `email` (String):
- `phone` (String):
- `spec` (String):
- `mail_address` (String):
- `license` (String): 

***
***

# Update Doctor Profile

Update current doctor profile

- **URL:** `/api/update-doctor-profile`
- **Method:** PUT
- **Content-Type:** application/json

## Request Body

The request body should contain the following JSON fields:

- `first_name` (String):
- `last_name` (String):
- `gender` (String):
- `date_of_birth` (String):
- `email` (String):
- `phone` (String):
- `spec` (String):
- `mail_address` (String):
- `license` (String): 

Example Request Body:

```json
{
  "first_name": "Mike",
  "password": "smith",
  "gender": "male",
  "date_of_birth": "19900423",
  "email": "123456@gmail.com",
  "phone": "1231231234",
  "spec": "BrainDead",
  "mail_address": "1234 A street San_jose CA United_States",
  "license": "1234guesgues"
}
```
***
***

# Delete Doctor Profile

Delete current doctor file

- **URL:** `/api/delete-doctor-profile`
- **Method:** DELETE
- **Content-Type:** application/json

## Response

- **HTTP Status:** 200 OK

***
***

# Set Available Times

Sets the available times for a user.

- **URL:** `/api/set-available-times`
- **Method:** POST
- **Content-Type:** application/json

## Request Body

The request body should contain a list of available times in the following format:

- `availableTimes` (array of strings): The available times for the user.

Example Request Body:

```json
[
  "9:00",
  "10:30",
  "14:00"
]
```
## Response

- **HTTP Status:** 200 OK

If the available times are set successfully, no response body is returned.

***
***

# Get All Available Times

Retrieves all available times for a user.

- **URL:** `/api/get-all-available-times`
- **Method:** GET

## Response

- **HTTP Status:** 200 OK

If the available times are found, the response body will contain a list of available times in the following JSON format:

```json
[
  "9:00",
  "10:30",
  "14:00"
]
```

Each element in the list represents an available time slot.

***
***

# Update Certain Available Time

Updates the availability status of a certain time slot for a user.

- **URL:** `/api/update-certain-available-time`
- **Method:** PUT

## Request Parameters

- `available_time_id` (string): The ID of the available time slot to update.
- `is_available` (boolean): The new availability status of the time slot. Set to `true` if the time slot should be marked as available, or `false` if it should be marked as unavailable.

## Response

- **HTTP Status:** 200 OK

If the update is successful, no response body is returned.

***
***

# Delete Certain Available Time

Deletes a certain time slot from the available times for a user.

- **URL:** `/api/delete-certain-available-time`
- **Method:** DELETE

## Request Parameters

- `available_time_id` (string): The ID of the available time slot to delete.

## Response

- **HTTP Status:** 200 OK

If the deletion is successful, no response body is returned.




