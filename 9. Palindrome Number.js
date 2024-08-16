function isPalindrome(number){
    if(x < 0){
        return false
    }
    let rev = 0;
    let xcopy = x;

    while(x > 0){
        rev = (rev * 10) + (x % 10);
        x = Math.floor(x/10)
    }
    return rev === xcopy
}
