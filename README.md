## API Endpoints

### Register a New User

- **URL:** `/api/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "testuser",
    "password": "testpassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### Login a User

- **URL:** `/api/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "testuser",
    "password": "testpassword"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### Protected Route

- **URL:** `/api/protected`
- **Method:** `GET`
- **Headers:**
  ```http
  Authorization: Bearer <your_jwt_token>
  ```
- **Response:**
  ```json
  {
    "message": "This is a protected route",
    "user": {
      "id": "user_id",
      "iat": 1620211234,
      "exp": 1620214834
    }
  }
  ```

## Project Structure

- `app.js`: Main entry point of the application.
- `models/user.js`: Defines the User model using Mongoose.
- `routes.js`: Defines the routes for user registration, login, and protected route.

## Dependencies

- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [body-parser](https://www.npmjs.com/package/body-parser)
