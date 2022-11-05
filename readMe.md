# Muscle Movement
---------------

### The idea behind Muscle Movement is a place to go to learn about the different muscles of the body and some of the best ways to manipulate them. I would like to have a 3rd party API so that there will be information of how to stretch certain muscles and what workouts would go best with them.
----------------

## Where to Start?
[SignUp](http://localhost:3003/signup)

### Users are able to start at either the Index Page or the Sign Up page. I would like a user to view comments and have access to the muscle group selector without having to login. However, users will be redirected to the login page, if they do not have an account, before they are able to edit, delete, or create a comment. 
![](/images/SignUp%20Page.png)

### Once they are logged in, they are free to roam and adjust comments. That is currently an error I would like to work on. Ideally, they would only be able to edit and delete their own comments. 
----------------

### The Muscle Selector diagram was created by [Ryan M Poe](https://codepen.io/baublet/pen/PzjmpL) 
![](/images/Muscle%20Group%20Selector.png)

### The plan was to select parts of the muscle and have it direct to a certain page of the APT with the information on that muscle. This is definietly something I want to work on more to incorporate
![]()

### This posed more difficult than expected when converting to run the code with React. 

### See the code before using React: 
![](/images/Muscle%20Fill.png)

### and the code after
![](/images/React%20Body%20Code.png)

### This code is what was used to give the fill capabilities with click features in CSS

#### They way that the style function must be coded differently style = {{color:""}} vs style="color:none;" and class must be called by className. Trying to find each of the different styles in the code took some time hahaha. 
----------------

### Technologies Used: 
>HTML
>Javascript/CSS
>React

-----------------
## Original thoughts
### [Trello](https://trello.com/b/bZ8uULFP/musclemovement)
### Layout
![](/images/Original%20Layout.png)

## What's Next
*API functionality <br /> 
*Event listeners on the muscles to new pages <br />
*Replies to comments <br /> 
*Muscle show pages with comments on that specific muscle

## Current errors
*The footer on the Index page is messed up due to the columns. <br />
*Having trouble having it disconnected. <br />
*Login and Create Account page look the same after someone as logged In. <br />
*No notification when logging out<br />