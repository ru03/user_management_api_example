
const options = {
  "/users": {
    "get": {
      "tags": ["Users"],
      "summary": "Return a list of users",
      "description": "Get a list of users",
      "responses": {
        "200": {
          "description": "Successful operation with a list with users or empty",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": {
                    "type": "integer",
                    "format": "int64",
                    "example": 200
                  },
                  "users": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer",
                          "format": "int64",
                          "example": 1
                        },
                        "name": {
                          "type": "string",
                          "example": "name"
                        },
                        "lastName": {
                          "type": "string",
                          "example": "lastName"
                        },
                        "email": {
                          "type": "string",
                          "example": "test@test.com"
                        },
                        "createAt": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2019-09-20T22:00:00.000Z"
                        },
                        "updateAt": {
                          "type": "string",
                          "format": "date-time",
                          "example": "2019-09-20T22:00:00.000Z"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "500": {
          "description": "Internal Server Error",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string",
                    "example": "An errror ocurred. Try again please"
                  },
                  "status": {
                    "type": "number",
                    "format": "int64",
                    "example": 500
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

module.exports = options;
