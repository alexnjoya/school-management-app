# DCIT-205-miniProject
# Student Portal

Student portal API hosted on Vercel.

[Vercel URL](https://francismax-student-portal.vercel.app/)

## Tools & Frameworks
- Express Js
- Mongose ODM
- MongoDB Atlas
- Yup -schema validation

# Usage
## Endpoints
### Status
GET URL/api

This returns the status of the api

### Creat Student
POST URL/api/students

body = JSON

Allows you to create a new student: Requires authentication on all fields

example
```
{
"name":"Francis",
"StudentId":1234,
"level": 200,
"programme":"Computer Science,
"hall":"Legon Hall"
}
```
### Get a single student by studentId
GET URL/api/students/:studentId



This retrieves detailed information about the sudent

### Get all students

GET URL/api/students

This brings out all the students with unique Id's

## Reference

https://vercel.com/guides/using-express-with-vercel


