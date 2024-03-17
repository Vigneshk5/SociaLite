# Socialite 



Welcome to Socialite, a social media platform designed to connect people within your organization! With Socialite, you can foster stronger connections, share ideas, and collaborate seamlessly with colleagues.

## Screenshots
![d68bb890-3df0-4516-a908-a4df5d0448ed](https://github.com/Vigneshk5/SociaLite/assets/97999742/7d11489e-9999-47d1-a5ae-10b3e8f2ce1b)
![cdc6fb24-2447-4405-b97c-af047cbeffea](https://github.com/Vigneshk5/SociaLite/assets/97999742/9cef6a5d-f0f5-456f-8759-37174999f1ca)
![9e8b3b4a-781a-4116-8aa8-fdd304676d17](https://github.com/Vigneshk5/SociaLite/assets/97999742/70ee64b4-9e8f-4adf-875b-0ca7fca12e11)


## Get Started

To get started with Socialite, simply visit our [website](https://socialite-alpha.vercel.app) and sign up using your organization's email address. Once registered, you can start sharing updates and engaging in meaningful conversations.

## Features

- **User Authentication**: Utilizing Firebase Auth, Socialite ensures secure user authentication, allowing only verified members of your organization to access the platform.
- **Real-time Database**: Powered by Firestore, Socialite offers a real-time database for storing user profiles, posts, comments, and more, ensuring that your data is always up to date.

- **Post Creation and Sharing**: Users can create posts to share updates, thoughts, and ideas with their colleagues. With Socialite, staying connected and informed has never been easier.

- **Commenting on Posts**: Engage in meaningful discussions by commenting on posts. Share feedback, ask questions, and collaborate with your peers in real-time.

- **Liking Posts**: Show appreciation for your colleagues' posts by liking them. The like feature allows users to acknowledge and support each other's contributions.

- **Connecting with Others**: Socialite enables users to connect with other members of the organization, fostering a sense of community and collaboration.

## Tech Stack

- **Frontend**: Built using React, Socialite offers a responsive and intuitive user interface, ensuring an exceptional user experience across devices.

- **UI Framework**: Leveraging the power of Shadcn-UI's component library, Socialite delivers a sleek and modern design that enhances usability and aesthetics.

- **Authentication**: Firebase Auth provides a secure and reliable authentication system, ensuring that only authorized users can access the platform.

- **Database**: Firestore serves as the backend database, offering real-time data synchronization and scalability to support the platform's growing user base.

# Setting Up Socialite

Welcome to Socialite, a social media platform designed to connect people within your organization! With Socialite, you can foster stronger connections, share ideas, and collaborate seamlessly with colleagues.

## Prerequisites

- Node.js and npm installed on your system.

## Installation Steps

1. **Clone the Repository**:

   ```
   git clone https://github.com/vigneshk5/sociaLite.git
   ```

2. **Navigate to the Project Directory**:

   ```
   cd socialite
   ```

3. **Install Dependencies**:

   ```
   npm install
   ```

4. **Set Up Firebase Project**:

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Set up Firebase Authentication with email/password sign-in method enabled.
   - Set up Firestore database.
   - Copy your Firebase project configuration (apiKey, authDomain, projectId, etc.).

5. **Configure Firebase**:

   - Create a `.env` file in the root directory of the project.
   - Add your Firebase configuration details to the `.env` file:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

6. **Run the Application**:

   ```
   npm start
   ```

   This will start the application on `http://localhost:3000` by default.

7. **Access Socialite**:
   Open your web browser and navigate to `http://localhost:3000` to access the Socialite platform locally.

8. **Sign Up and Enjoy!**:
   Sign up using your organization's email address and start using Socialite to connect with your colleagues, share updates, and engage in meaningful conversations.
