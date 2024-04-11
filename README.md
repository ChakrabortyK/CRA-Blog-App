
# React & Appwrite Blog

A React project to build a blog website with user login. Industry standard code and  Appwrite service as a backend are used in the project. The project primarily aims towards writing industry standard code and focuses on scalability and modularity.

This documentation aims to guide you through the installation, setup, and usage of our     application.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Appwrite

**Real time text editor:** TinyMce

**Other:** react-hook-form, html-react-parser



## Run Locally

Clone the project

```bash
  git clone https://github.com/ChakrabortyK/CRA-Blog-App.git
```

Go to the project directory

```bash
  cd CRA-Blog-App
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Configuration

- Obtain your Appwrite project ID and API key.
- Create a .env file in the project root.
- To run this project, you will need to add the following environment variables to your .env file

    `REACT_APP_APPWRITE_URL`

    `REACT_APP_APPWRITE_PROJECTID` 

    `REACT_APP_APPWRITE_DATABASEID` 

    `REACT_APP_APPWRITE_COLLECTIONID` 
    
    `REACT_APP_APPWRITE_BUCKETID` 

These variables are also available in the `.sample.env` file
## Usage/Examples

Once the application is running locally, you can access it in your browser at `http://localhost:3000`. Explore the features and functionalities of the application.

1. ### Navigation Instructions
Upon launching the application, users are greeted with the home feed where they can view posts from other users **After logging in**. The navigation bar located at the top of the page allows users to access different sections of the application:

- Home: View the latest posts from all users.
- My Posts: View all of the posts of your account/user.
- Add Post: Add a new post from the current account.

2. ### Common Tasks

#### Logging In
- Click on the "Log In" button located at the top-mid of the page.
- Enter your registered email address and password.
- Click "Log In" to access your account.
    
#### Signing Up

- On opening the application click on the "Sign Up" button top of the page.
- Fill out the registration form with your email address, username, and password.
- Click "Create Account" to create your account.

#### Creating a Post

- Click on the "Add Post" button.
- Write your message or upload an image.
- Set your status active or inactive to show or hide post to others.
- Click "Post" to share your content with your followers.

#### Editing a post

- Click on 'Edit' on post page
- Edit the neccesary fields
- Click on submit to save changes
## API Reference

Our React application communicates with the Appwrite backend through various API endpoints. Refer to the [Appwrite API documentation](https://appwrite.io/docs) for detailed information about available endpoints and their usage.


## Features

- User Login/Signup
- Add post
- Edit/Delete post
- Hide Show post
