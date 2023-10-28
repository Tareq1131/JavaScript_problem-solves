function isLeapYear (year){
    const reminder = year % 4;
    if(reminder === 0){
        console.log("this year is leap year",year)
    }
    else{
        console.log("not leap year",year);
    }
}

isLeapYear(2004);
isLeapYear(2024);
isLeapYear(2025);