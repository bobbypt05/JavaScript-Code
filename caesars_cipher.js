//This code is incomplete..



function rot13(str) {
  
  var values = [];
  var strr = [];
  
  for(var i=0;i<str.length;i++)
  {
         values.push(str.charCodeAt(str[i])); 
  }
  
  console.log(values);
  
  for(var j=0;j<str.length;j++)
  {
        if(values[j]>64 && values[j]<92)
        {
              values[j]+=13;
              if(values[j]>91)
              {
                  values[j] = values[j]%92+65;    
              }
        }
  }
  
  for(i=0;i<str.length;i++)
  {
       strr.push(String.fromCharCode(values[i]));     
  }
  
  return strr.join('');
  
}

rot13("SERR PBQR PNZC");

