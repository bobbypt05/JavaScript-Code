//Return the factorial of the provided integer


function factorialize(num) {
  
  var temp=1;
  
  for(var i=1;i<=num;i++)
    temp*=i;
  
  return temp;
}

factorialize(5);
