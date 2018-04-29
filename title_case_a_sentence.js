//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  
  str = str.toLowerCase();
  
  str = str.split(' ');
  
  var arr = [];
  
  for(var i=0;i<str.length;i++)
    {
        arr[i]=str[i].split('');
        arr[i][0]=arr[i][0].toUpperCase();
    }
  
  for(i=0;i<arr.length;i++)
    {
      arr[i] = arr[i].join('');
    }
  
  str = arr.join(' ');
  
  return str;
}

titleCase("I'm a little tea pot");
