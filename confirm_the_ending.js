//Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target) {
 
  for(var i=str.length-1,j=target.length-1;i>=0&&j>=0;i--,j--)
    {
        if(str[i]!=target[j])
          return false;
    }
  
  return true;
}

confirmEnding("Bastian", "n");
