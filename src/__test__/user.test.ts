const userInput = {
  email: "test@example.com",
  name: "Jane Doe",
  password: "Password123",
  passwordConfirmation: "Password123",
};

describe("user", () => {
  // User registration
  describe("user registration", () => {
    // The username and password get validation
    describe("given the username and password are valid", () => {
      it("should retrun the user payload", () => {});
    });

    // Verify that passwords must match (password and confirm password)
    describe("given the passwords do not match", () => {
      it("should return a 400", () => {});
    });

    // Verify that the handler handles any errors
    describe("given the user sevice throws", () => {
      it("should return a 409 error", () => {});
    });
  });

  // Creating a user session
  describe("create user session", () => {
    // A user can login with a valid email and password
    describe("given the username and password are valid", () => {
      it("should return a signed access token and refresh token", () => {});
    });
  });
});
