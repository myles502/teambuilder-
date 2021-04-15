const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');

const writeFileAsync = util.promisify(fs.writeFile);

const memberone = new Manager()

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name1',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email1',
      message: 'What is your email address?',
    },
    {
     type: 'input',
     name: 'office',
     message: 'what is your office number?',
    },
    {
      type: 'input',
      name: 'id1',
      message: 'what is your id number?',
     },
    {
      type: 'input',
      name: 'role1',
      message: 'Please name your title (Manager, Engineer, Intern)',
    },
    {
      type: 'input',
      name: 'name2',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email2',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github address?',
    },
    {
     type: 'input',
     name: 'id2',
     message: 'what is your id number?',
    },
    {
      type: 'input',
      name: 'role2',
      message: 'Please name your title (Engineer, Intern)',
    },
    {
      type: 'input',
      name: 'name3',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email3',
      message: 'What is your email address?',
    },
    {
     type: 'input',
     name: 'id3',
     message: 'what is your id number?',
    },
    {
      type: 'input',
      name: 'role3',
      message: 'Please name your title (Engineer, Intern)',
    },
    {
      type: 'input',
      name: 'school1',
      message: 'Please name your school',
    },
    {
      type: 'input',
      name: 'name4',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email4',
      message: 'What is your email address?',
    },
    {
     type: 'input',
     name: 'id4',
     message: 'what is your id number?',
    },
    {
      type: 'input',
      name: 'role4',
      message: 'Please name your title (Engineer, Intern)',
    },
    {
      type: 'input',
      name: 'school2',
      message: 'Please name your school',
    },
  ]);
};

const generateHTML = (answers) => {
  return ` 
  <!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
      <title>Team Generator</title>
      <div class="jumbotron">
  <h1 class="display-8">Team Builder</h1>
  <p class="lead">An easy way to create your team!</p>
  <hr class="my-4">
  <p class="lead">
    
  </p>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${answers.name1},ID number ${answers.id1}</h5>
        <p class="card-text">Hi my name is ${answers.name1} and I am a ${answers.role1} at this company.</p>
        <ul>
        <li><a href="mailto:${answers.email1}">Send Email</a></li>
        <li>my office number is ${answers.office} </li>
      </ul>
        <a href="#" class="btn btn-primary">Add to Team</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${answers.name2},ID number ${answers.id2}</h5>
        <p class="card-text">Hi my name is ${answers.name2} and I am a ${answers.role2} at this company.</p>
        <ul>
        <li><a href="mailto:${answers.email2}">Send Email</a></li>
        <li><a href=${answers.github}>Github</a></li>
      </ul>
        <a href="#" class="btn btn-primary">Add to Team</a>
      </div>
    </div>
  </div>
</div>
<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${answers.name3}, ${answers.role3}</h5>
      <p class="card-text">Hi my name is ${answers.name3} and I am a student ${answers.school1} </p>
      <li><a href="mailto:${answers.email3}">Send Email</a></li>
      <li>my id number is ${answers.id3} </li>
      <a href="#" class="btn btn-primary">Add to Team</a>
    </div>
  </div>
</div>
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${answers.name4}, ${answers.role4}</h5>
      <p class="card-text">Hi my name is ${answers.name4} and I am a student ${answers.school2}</p>
      <li><a href="mailto:${answers.email4}">Send Email</a></li>
      <li>my id number is ${answers.id4} </li>
      <a href="#" class="btn btn-primary">Add to Team</a>
    </div>
  </div>
</div>
</div>
    </div>
    
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
  </html>
    
  
  `
  
};
 




 //Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully created index'))
    .catch((err) => console.error(err));
};

init();

