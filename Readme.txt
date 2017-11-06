# Product Recommendation Demo using ASP.NET Web API and Angular 

This application implements CRUD operations with ASP.NET Web API, Angular 2 and SQL Server

## Getting Started

1. Visual Studio 2015 - ASP.NET Web API 
2. MS SQL Server 2016
3. Entity Framework (6.x)
4. Angular CLI (Angular 2)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Setup

The application has 2 projects: Product Recommendation Demo (FrontEnd) and Product Recommendation (BackEnd)

The Product Recommendation project includes a ProductRecoAccess folder. This folder contains the ProductRecoModel.edmx which is developed using Entity Framework.

In order to link the EDMX model with the database located in the App_Data folder, the connection string from App.config file must be updated with the full local path to the database file.

Product Recommendation Demo - SPA project using Angular 2 and Bootstrap library (v3.3.7)

This project is setup using the Angular CLI (https://cli.angular.io/)
It performs Retrieve operation to fetch data from the Web API using Http GET Request.

Run ng serve for a development server. Navigate to http://localhost:4200/ 	The app will automatically reload if you change any of the source files. 


## Author

Sumit Jangid

## License

This project is licensed under the MIT License
