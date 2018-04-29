//One of the simplest and most widely known ciphers is a Caesar cipher, 
//also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//Do  ROT13 cipher(shift each charachter by 13)


function rot13(str) {
  
  var values = [];
  var strr = [];
  
  for(var i=0;i<str.length;i++)
  {
		values.push(str.charCodeAt(i)); 
  }

  for(var j=0;j<str.length;j++)
  {
        if(values[j]>64 && values[j]<91)
        {
              values[j]+=13;
              if(values[j]>90)
              {
                  values[j] = values[j]%91+65;    
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

