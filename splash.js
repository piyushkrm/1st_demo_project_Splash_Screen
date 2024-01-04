// Check if the session has been created
if (!sessionStorage.getItem('userSession')) {
    // If the session doesn't exist, create it
    sessionStorage.setItem('userSession', 'active');

  }
  