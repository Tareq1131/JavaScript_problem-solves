function evenOrodd(num){
    const reminder = num % 2;
    if(reminder === 0){
        console.log('even',reminder);
    }else{
        console.log('odd',num);
    }
}
evenOrodd(7);
// evenOrodd(4);