# NC News

NC News is a social news aggregation and discussion platform, similar to Reddit, where users can view articles, filter them by topics, vote on articles and add or delete comments.

## Live Demo

The live version of the application is deployed at:
[https://nc-news-keplin1.netlify.app/](https://nc-news-keplin1.netlify.app/)

## Features

- Browse articles on various topics
- Filter articles by topic
- Sort articles by date, votes, or comment count
- View detailed article pages with comments
- Upvote articles
- Add and delete comments
- Responsive design that works on mobile, tablet, and desktop

## Tech Stack

- NodeJS
- JavaScript
- React 19
- React Router v7
- Material UI & MUI Joy for styling
- Axios for API requests
- Vite as the build tool
- Netlify for hosting

## Back End

This front-end application consumes data from a custom-built API. The back-end repository can be found at:
[https://github.com/keplin1/nc-news-project](https://github.com/keplin1/nc-news-project)

The API is hosted at:
[https://nc-news-project-50ht.onrender.com/api](https://nc-news-project-50ht.onrender.com/api)

## Requirements

- Node.js v20.0.0 or higher

## Local Development Setup

To run this project locally, follow these steps:

1. Clone the repository:
   
   git clone https://github.com/keplin1/nc-news-front-end.git
   

2. Navigate to the project directory:
   
   cd nc-news-front-end
   

3. Install dependencies:
   
   npm install
   

4. Start the development server:
   
   npm run dev
   

5. Open your browser and visit:
   
   http://localhost:5173/
   

## Build for Production

To build the application for production:


npm run build


## Additional Commands

- Run linter:
  
  npm run lint
  

- Preview production build:
  
  npm run preview
  

## User Information

The application currently has a hardcoded user ('tickle122') for demonstration purposes. In a real-world implementation, this would be replaced with a proper authentication system.

## Future Improvements

- Pagination
- User authentication system
- Ability to create new articles
- Enhanced comment features (edit, reply)
- User profiles
- Dark/ light theme toggle

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)