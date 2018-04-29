//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


repeat = "";

function repeatStringNumTimes(str, num) {
  // repeat after me
  
  var temp = "";
  
  while(num>0)
    {
      temp+=str;
      num--;
    }
  
  return temp;
}

repeatStringNumTimes("abc",3);
