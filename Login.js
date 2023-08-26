// Simulated user credentials for demonstration purposes
const validUsername = 'admin';
const validPassword = 'password';


// Function to perform login
function login(username, password, LoginBtn ) {
  if (username === validUsername && password === validPassword) {
    // Successful login
    console.log('Login successful!');
    // Perform any additional actions or redirect to a new page
  } else {
    // Failed login
    console.log('Invalid username or password. Please try again.');
  }
}

// Function to perform logout
function logout() {
  // Perform any necessary cleanup or session management tasks
  console.log('Logout successful!');
  // Redirect to a login page or a different section of the app
}
