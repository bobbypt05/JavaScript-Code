//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
	
	for(var i=0;i<arr[1].length;i++)
	{
		var ch = arr[1][i];
		
		for(var j=0;j<arr[0].length;j++)
		{
				if(arr[0][j] == ch.toUpperCase() || arr[0][j] == ch.toLowerCase(ch))
				{
						break;
				}
		}
		
		if(j == arr[0].length)
			return false;
	}
	
	return true;
}

mutation(["hello", "hey"]);
