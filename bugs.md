# Buggy React + Node.js Application: Bug List with Reproducing Steps

## Frontend Bugs

### 1. Placeholder Typo in Username Input Field
- **Location**: Username input field in the main form.
- **Bug**: Placeholder text reads "Enter Ussername" instead of "Enter Username."
- **Steps**:
  1. Open the application in the browser.
  2. Locate the username input field.
  3. Observe the placeholder text.
- **Expected Result**: Placeholder text should read "Enter Username."
- **Actual Result**: Placeholder text reads "Enter Ussername."

### 2. Duplicate Username Display
- **Location**: User list.
- **Bug**: Each username is displayed twice in the list (e.g., `John John`).
- **Steps**:
  1. Add a user by entering a valid username.
  2. Check the displayed list of users.
  3. Observe that the username appears twice.
- **Expected Result**: Each username should appear only once in the list.
- **Actual Result**: Each username appears twice in the list.

### 3. Broken Button
- **Location**: Bottom of the application.
- **Bug**: A button labeled "Broken Button" has no functionality.
- **Steps**:
  1. Scroll to the bottom of the page.
  2. Click the "Broken Button."
  3. Observe that nothing happens.
- **Expected Result**: The button should perform an action or display a message.
- **Actual Result**: The button does nothing.

### 4. Alternating Colors in User List
- **Location**: User list.
- **Bug**: Usernames are displayed in alternating colors (blue/green), but the design has no clear rationale.
- **Steps**:
  1. Add multiple users to the list.
  2. Observe the colors of the usernames.
  3. Note the alternating blue/green styling with no apparent reason.
- **Expected Result**: Usernames should have consistent styling.
- **Actual Result**: Usernames are displayed with alternating blue/green colors without context.

### 5. Hover Effect Makes Button Text Invisible
- **Location**: Buttons in the application.
- **Bug**: Button text becomes invisible when hovered over (white text on a white background).
- **Steps**:
  1. Hover over any button in the application.
  2. Observe that the text disappears.
- **Expected Result**: Button text should remain visible on hover.
- **Actual Result**: Button text disappears when hovered over.

## Backend Bugs

### 6. Case-Sensitive Search Query
- **Location**: `/users?query=<value>` API endpoint.
- **Bug**: The search query is case-sensitive, leading to unexpected results.
- **Steps**:
  1. Add a user with the username "John".
  2. Search for "john" (lowercase).
  3. Observe that the user is not found.
- **Expected Result**: The search should return results regardless of case sensitivity.
- **Actual Result**: The search query is case-sensitive and does not find "John" when searching for "john."

### 7. Incorrect Response for Empty User List
- **Location**: GET `/users` endpoint.
- **Bug**: Returns a string (`"No users available"`) instead of an empty array (`[]`) when no users exist.
- **Steps**:
  1. Ensure no users exist in the database.
  2. Fetch the `/users` endpoint using Postman or the browser.
  3. Observe the incorrect response.
- **Expected Result**: The API should return an empty array (`[]`).
- **Actual Result**: The API returns a string (`"No users available"`).

### 8. Duplicate Usernames Allowed
- **Location**: POST `/users` endpoint.
- **Bug**: Duplicate usernames are allowed and return a success message.
- **Steps**:
  1. Add a user with the username "John".
  2. Add another user with the same username "John."
  3. Observe that the duplicate is added without error.
- **Expected Result**: Duplicate usernames should not be allowed, and an error message should be returned.
- **Actual Result**: Duplicate usernames are allowed and added to the list.

### 9. Misleading DELETE `/users` Success Message
- **Location**: DELETE `/users` endpoint.
- **Bug**: Always returns a success message, even if no users were cleared.
- **Steps**:
  1. Ensure no users exist in the database.
  2. Call the DELETE `/users` endpoint.
  3. Observe that the success message is still returned.
- **Expected Result**: The success message should indicate whether users were actually deleted.
- **Actual Result**: The API always returns a success message, even when no users were deleted.
