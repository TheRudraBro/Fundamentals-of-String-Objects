const school = 
{
    name: 'BBK',
    location: 'Dhaka',
    established: 1990,
    departments: ['Computer Science', 'Business', 'Arts'],
    unique : {
        color : 'blue',
        result :{
            gpa : 5,
            merit : 'top'
        }
    }
}


// console.log(school.unique.color);
// school.unique.result.merit='top otp top';
console.log(school.unique.result.merit);