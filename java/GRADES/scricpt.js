let userPrompt = prompt('Enter your Percentage');


if(userPrompt >= 90)
    {
        console.log('Wow! You Secured A-One Grade !');
    }
else if(userPrompt >= 80)
    {
        console.log('Great Effort! You Achieved A+ Grade');
    }
else if(userPrompt >= 70)
    {
        console.log('Great Effort! You Achieved A Grade');
    }
else if(userPrompt >= 60)
    {
        console.log('You Have been Given B Grade');
    }
else if(userPrompt >= 50)
    {
        console.log('Oh! You got C Grade');
    }
    
else if(userPrompt <=50)
    {
        console.log('Hard Luck ! You Are failed');
    }

else
    {
        console.log('Please enter a Valid Percentage');s
    }