//Andrew Klump
//CMP344
//JavaScript 101
//Question #2



function isGreater(str1, str2){

	for(var i = 0; i < str1.length && i < str1.length; i++){
		//starts at beginning of both words
		//if first letter is greater than the first of second than print
		//
		if(str1[i] < str2[i]){
		print(str1[i]);
		print(str2[i]);
			print(str1);
			return str1;
		}
		//reverse of above
		//if second is greater than first than print second
		else if(str2[i] <  str1[i]){
		print(str2[i]);
		print(str1[i]);
			print(str2);
			return str2;
		}
		//if length of one is shorter than 2nd print first 
		else if(i == str1.length && i != str2.length){
			print(str1);
			return str1;
		}
		else if(i == str2.length && i != str1.length){
			print(str2);
			return str2;
		}
		//if equal than replays the loop


	}	


}

isGreater("hello", "goodbye");
isGreater("goodbye", "hello");
isGreater("Andrew", "Zohn");
isGreater("Zohn", "Andrew");
