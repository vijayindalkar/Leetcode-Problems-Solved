function CountDigits(N){
    let count=0;
      let originalNumber=N;
      while(N>0) {
          let digit=N%10;
        //   console.log(digit + " digit")
          if(originalNumber % digit===0) {
              count++
            }
            // console.log(N + " N before ")
          N=Math.floor(N/10)
        //   console.log(N + " N after ")
      }
      return count
  }

console.log(CountDigits(2446))