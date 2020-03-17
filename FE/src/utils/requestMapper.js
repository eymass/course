export const authenticate = request => ({
  email: request.username,
  password: request.password,
});
