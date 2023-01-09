# Manage your employees with IdentWork

> ResFull API to manage employees and companies. This project arose from a need of store employee data for a freelance job of making ID Card. From there this api is the backend for the application.
---
## Technologies used
- Node.js
- Express
- MongoDB
---
## Features

- CRUD operations to Employees and Companies.
- Pagination and filtering of data.
- Process data to generate input to create ID Cards in Photoshop.
---
## Configuration
After clone repository, install the dependencies.

```
npm install
```

Create and configure .env file with this keys:
```
MONGODB_URL="localhost:127017/identwork" // your mongodb connection
PORT=1234 // 3000 by Default
```
---
## Usage
To run this application just type in root directory:

```
npm run dev
```
---
## Documentation

### Schemas

### Company

```
{
  name: { type: String, required: true, unique: true } 
}
```
### Employee

```
{
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  war_name: { type: String, required: true },
  role: { type: String, required: true },
  identification: { type: Number, required: true },
  admission_date: { type: Date, required: true },
  to_print: { type: Boolean, default: true },
  company: { type: ObjectId, ref: 'companies', required: true },
}
```
---
### Endpoints

#### Pagination and Filters (PF)
All endpoints that produce multiples documents has support to pagination and filtering.
Send with query params followings keywords:

- page: Positive integer indicate the number of page.
- limit: Positive integer indicate limit of documents in page
- filter: String to filter employees/companies by name, war_name or id.


####  Employees

| Method | Endpoint    | Parameters | Body        | Description    |
| ------ | ----------- | ---------- | ----------- | -------------- |
| GET    | employees/      | PF          | -           | Get all employees  |
| GET    | employees/\<id> | employee id    | -           | Get employee by id |
| POST   | employees/      | -          | employee Schema | Create a employee  |
| PUT    | employees/\<id> | employee id    | employee Schema | Update employee    |
| DELETE | employees/\<id> | employee id    | employee Schema | Delete employee    |


#### Companies

| Method | Endpoint            | Parameters | Body          | Description             |
| ------ | ------------------- | ---------- | ------------- | ----------------------- |
| GET    | companies/            | PF          | -             | Get all companies         |
| GET    | companies/\<id>       | company id  | -             | Get company by id        |
| GET    | companies/\<id>/employees | company id, PF  | -             | Get all employees of company |
| POST   | companies/            | -          | company Schema | Create a company         |
| PUT    | companies/\<id>       | company id  | company Schema | Update company           |
| DELETE | companies/\<id>       | company id  | company Schema | Delete company           |