# Firebase Setup Instructions for HexaSentra

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Enable Firebase Services

### Enable Realtime Database:
1. In Firebase Console, go to "Build" > "Realtime Database"
2. Click "Create Database"
3. Choose a location (e.g., us-central1)
4. Start in **test mode** for development (you can change rules later)
5. Click "Enable"

### Enable Authentication:
1. In Firebase Console, go to "Build" > "Authentication"
2. Click "Get Started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

## Step 3: Create Admin User

1. In Firebase Console, go to "Authentication" > "Users"
2. Click "Add user"
3. Enter admin email and password:
   - Email: `admin@hexasentra.com` (or your preferred email)
   - Password: Create a strong password
4. Click "Add user"

## Step 4: Get Firebase Configuration

1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app with a nickname (e.g., "HexaSentra Website")
5. Copy the Firebase configuration object

## Step 5: Update Firebase Config File

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Step 6: Set Up Database Rules (Optional but Recommended)

For production, update your Realtime Database rules:

1. Go to "Realtime Database" > "Rules" tab
2. Replace with these rules:

```json
{
  "rules": {
    "contactRequests": {
      ".read": "auth != null",
      ".write": true,
      "$requestId": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }
  }
}
```

This allows:
- Anyone to create contact requests (write)
- Only authenticated admins to read and update requests

## Step 7: Test the Setup

1. Run `npm start` to start the development server
2. Go to the contact page and submit a test request
3. Go to `/admin` and login with your admin credentials
4. Check if the request appears in the admin dashboard

## Admin Access

- **Login URL**: `http://localhost:3000/admin`
- **Dashboard URL**: `http://localhost:3000/admin/dashboard`
- **Email**: The email you created in Step 3
- **Password**: The password you created in Step 3

## Features

### Contact Form:
- ✅ Saves all form submissions to Firebase Realtime Database
- ✅ Includes timestamp and unique ID for each request
- ✅ Shows loading state during submission
- ✅ Displays success/error messages
- ✅ Auto-resets form after successful submission

### Admin Dashboard:
- ✅ Secure login with Firebase Authentication
- ✅ Real-time data sync from Firebase
- ✅ View all contact requests
- ✅ Filter by status (All, New, Contacted, Resolved)
- ✅ Update request status
- ✅ Statistics dashboard
- ✅ Logout functionality

## Security Notes

⚠️ **Important Security Recommendations:**

1. **Never commit your Firebase config with real credentials to public repositories**
2. **Use environment variables for production**
3. **Set up proper Firebase Security Rules**
4. **Enable App Check for additional security**
5. **Regularly review authentication logs**
6. **Use strong passwords for admin accounts**

## Troubleshooting

### "Permission denied" error:
- Check your Firebase Database Rules
- Ensure you're logged in as admin when accessing the dashboard

### "Firebase not initialized" error:
- Verify your Firebase config is correct
- Check if Firebase is properly installed (`npm install firebase`)

### Contact form not saving:
- Check browser console for errors
- Verify Firebase Database URL is correct
- Ensure Database is enabled in Firebase Console

## Support

For issues or questions, contact the development team.
