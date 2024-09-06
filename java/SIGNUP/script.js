let persons = [
{
   email: 'anas123@gmail.com',
   password: 'anas!@#'
},
{
   email: 'ammar143@gmail.com',
   password: 'ammar123'
},
{
    email: 'ahsan3@gmail.com',
    password: 'ahsan13'
},
{
    email: 'aisha444@gmail.com',
    password: 'aisha12345'
},
{
    email: 'ghufran34@gmail.com',
    password: 'ghufran123'
},

]



let usermail = prompt('Enter Email');
let userpass = prompt('Enter Password');

for (let i = 0; i < persons.length; i++)
{

        if(usermail.toLowerCase && userpass.toLowerCase == true)
        {
            console.log('You are logged in');
        }
        else
        {
            
            console.log('You are not a user');        
        }   
}





if(isUserExist)
{
        console.log('Yes I Found your name')
}
else
{
    console.log("Sorry! I didn't Found your name");
}
