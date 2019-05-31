## What my project does

It shows the week menu with dishes and it price on the days they are served.
The chef can deside what are showed for his customers by typing the dish and the fee with a moderator opertunity.

## Structure

At the first you come to a site where you can do two following things.

1. You can click the menu button to see what dishes a served this week.
2. If you are the chef/admin you can click a login button , this navigates you to a login page. When youre finally are logged in you can add, remove and edit dishes.

## Implementation

I have followed the requirements of the exam by having the folder structure of src/client, src/server, src/shared and tests. src/client contains react components, src/server contains server files, shared folder and tests are empty.
Both backend and frontend are on the same port, and there has only been used one NodeJS instance.
All of the react components is a page which are represented at a time in the application flow.
In the src/server folder you have AppServer.js, the server itself and MenuDatabase as it's model.

## Technologies

React as frontend.
ReactDOM to render a react element into the DOM.
Router to tell the endpoint

I have used RESTful API where my endpoints are:
POST - /adminCheck:
Takes in username and password and compares it with administrator credentials and sends back json containing a boolean value.

GET - /getMenu:
Sending back json containing the menu.

POST - /deleteDish:
Takes in dish id and compares it with all of the dishes in the model and deletes in if it exists.
Sending back the updated menu.

POST - /editDish:
Takes in new optional information to change with existing information on the dish.
Sending back empty json just to tell client that the operation was done.

POST - /addDish:
Takes in information to create dish.
Sends back the updated menu.

## Guide

- You need to open your terminal and navigate to root folder of the project.
- Run command: 'npm install'
- Run command: 'npm run dev'
- Open your favorite web-browser and go to http://localhost:8080.
- To log in with admin user: Username: admin and password: admin.

## Requirements I have not done

Requirements for C grade were not satisfied because i did not include the feature to register new accounts and let users/admin to leave comments on either dishes or menu and i did not include authentication with cookies only a POST request.
Requirements for B grade were not satisfied because i did not include sockets at all.

## Resources

- Udemy course: The Complete React Web Developer Course (with Redux) by Andrew Mead
  https://www.udemy.com/react-2nd-edition/

- This helped me to get frontend and backend on same port
  (https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)
