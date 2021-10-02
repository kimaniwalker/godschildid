# GodsChildId

### Folder Setup

[- Components](./components)
Used to store reusable components

[- db](./db)
Folder contains mysql db configurations. We can use this folder to store table level setup configuration. I have placed the [user table create](./db/user.sql) file and will continue placing these files in this directory.

[- lib](./lib) 
Folder contains our helper functions in which we will use to connect frontend & backend

[- node modules](./node_modules)
Package dependencies needed in applications

[- pages](./pages)
Contains front end and back end routing. This folder contains and API folder which will be used only for backend api routes

[- styles](./styles)
Contains sass and css files which we can use to style the application. I have created a [global varibable sheet](./styles/scss/variables.scss) with a bootstrap color override. I have modified the primary and secondary colors with the main colors from the website. Now we can use ``` classname="bg-primary" ``` syntax to quickly style components. 

**Example**
pages/login.js is for /login page. Will bring up login page
pages/api/login.js will be used on backend routes to make api call to /api/login


**.env**
Will store environment variables which will be hidden from GIT. You will need to create a .env file and place it in the root directory. Below are the items currently configured. We should update as we add more configurations. 

Authentication and MySQL environment variables

```
TOKEN_SECRET="this-is-a-secret-value-with-at-least-32-characters"
MYSQL_HOST="localhost"
MYSQL_PORT="3306"
MYSQL_DATABASE="=****"
MYSQL_USER="****"
MYSQL_PASSWORD="****"

```

**-package-lock.json & package.json**
Contains dependency information such as version ect.

### Deploying To Heroku

Deploying with Heroku shouldn't be to complicated.
We will need have Rhett create a account
and Add environment variables in Heroku.

Reference Links:
[Deployment To Heroku](https://mariestarck.com/deploy-your-next-js-app-to-heroku-in-5-minutes/)
[Heroku GoDaddy Configuration](https://successengineer.medium.com/how-to-setup-heroku-with-godaddy-d8e936d10849)


### Refernce Links
[NextJs Documentation](https://nextjs.org/docs/getting-started)
[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
[Stripe Checkout](https://stripe.com/docs/payments/checkout)
[Stripe Api Docs](https://stripe.com/docs/api)
[Twilio](https://www.twilio.com/docs/sms/quickstart/node)
[SendGrid](https://docs.sendgrid.com/api-reference/how-to-use-the-sendgrid-v3-api/authentication)


### Directions To Run App
- Create .env file with mentioned contents
- Install MySQL & Create Schema
- Import [Db Files To Create Tables](./db)
- Clone repository to local machine
- cd into directory
- ```npm i ``` to install dependencies
- run ``` npm run dev ```




