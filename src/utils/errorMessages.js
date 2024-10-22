const errorMessages = {
  "auth/invalid-email": "The email address incorrect.",
  "auth/user-disabled": "The user account has been disabled by an administrator.",
  "auth/user-not-found": "No user corresponding to the given email address.",
  "auth/wrong-password": "The password is invalid for the given email address.",
  "auth/email-already-in-use": "The email address is already in use by another account.",
  "auth/weak-password": "The password is too weak.",
  "auth/invalid-credential": "The email or password you entered was incorrect."
  // Add more error codes and messages as needed
};

export const getErrorMessage = (errorCode) => {
  return errorMessages[errorCode] || errorCode;
};