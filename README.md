# Frontend Mentor - Notifications page solution  

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). 

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
-Mobile view:  
![ss3](https://user-images.githubusercontent.com/125572956/235226475-0eccc4d2-b750-4e5b-8756-63b0d8c6a017.png)

-Desktop View:  
![ss1](https://user-images.githubusercontent.com/125572956/235225959-21734f4b-3fc8-4289-b84e-030b5bbddbae.png)

-When clicked on unseen notification:  
![ss2](https://user-images.githubusercontent.com/125572956/235226451-6be569d5-669d-449a-9f00-1ec6824217f3.png)

## My process

- My approach is Mobile-first as it is easy to maintain element positioning afterwards.
- I created an object and store all the messages by creating object array.
- All messages are splited into parts which are common in all messages.
- Than uses js to render all messages on webpage by using createElement().
- Add a eventlistener to notification tabs to update the unseen messages counter.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### Website link

- https://notification-page-mu.vercel.app/
