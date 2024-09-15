
# Pocket

A personal budget tracker app with passport local authorization. Add bills and multiple sources of income. See how your expenses break down daily, weekly, monthly, and yearly.


## Screenshots

| ![pocket_main](https://user-images.githubusercontent.com/101529105/193365059-7f264d9b-cb0c-473f-a3db-7339103abd1a.png) | ![Screenshot from 2022-09-30 14-35-49](https://user-images.githubusercontent.com/101529105/193364699-95e74d2c-0d64-4451-a2a3-4b881ac825a8.png) | ![pocket_budget](https://user-images.githubusercontent.com/101529105/193365060-50141b60-708a-436a-bb5d-4e2049bca6a0.png)|
|:--:|:--:|:--:|
| ![Screenshot from 2022-09-30 15-07-06](https://user-images.githubusercontent.com/101529105/193364608-806bf4fb-5315-47ec-969e-52e2cd2466a1.png) | ![Screenshot from 2022-09-30 15-07-25](https://user-images.githubusercontent.com/101529105/193364605-84e410b9-2cd7-4306-a9f0-402a94f44d01.png) | ![Screenshot from 2022-09-30 15-07-33](https://user-images.githubusercontent.com/101529105/193364604-7c10b4d2-ebbf-4eb1-b5a4-4a2731f8fc84.png)

## Tech Stack

**Client:** JavaScript, EJS, TailwindCSS

**Server:** Node, Express, MongoDB

**Dependencies:** bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

## Features

- Secure login with Passport Auth
- Add expenses and multiple sources of income
- Sort expenses by name, category, or cost
- See how expenses break down on a daily, weekly, monthly, and yearly basis
- Responsive for desktop & mobile


## Installation

Install with npm

```bash
  npm install bcrypt connect-mongo dotenv ejs express express-flash express-session mongodb mongoose morgan nodemon passport passport-local validator
```
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`PORT = <port>` (can be any port, ex: 3000)

### Database

`DB_STRING = <your MongoDB uri>`
## Optimizations

- User can select custom frequency for expenses and income streams (every x number of weeks/months)
- Made table data sortable
- Added Mongoose virtuals to calculate daily, weekly, monthly, and yearly cost of each expense without having to store all that data in the database
- Added soft delete so expenses aren't automatically purged from database in case user needs to restore data 

**Planned Features & Improvements:**

- Calcuate user's remaining funds
- Add budgeting and saving tips
- Add confirmation popups for deleting expenses, income, and account

## Other Examples of My Work

| Mailroom | Pictogram | myPetPal |
|:--:|:--:|:--:|
| ![mailroom](https://user-images.githubusercontent.com/101529105/193365432-ab411c6f-b230-4355-9252-0b17ed7aa078.png) | ![pictogram](https://user-images.githubusercontent.com/101529105/193365933-2936db33-1cd2-47ac-b960-c6f15bfafcb4.png) | ![Screenshot from 2022-09-30 11-42-02](https://user-images.githubusercontent.com/101529105/193365537-af22d177-b035-430e-b3d7-bdb7b25133c0.png) |
| [Repo](https://github.com/valerievozza/mailroom) | [Repo](https://github.com/valerievozza/pictogram) | [Repo](https://github.com/valerievozza/mypetpal)
