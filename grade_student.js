var input = [ 73, 67, 38, 33 ];


function getGMod(grade) {
	if(grade % 5 == 0) {
		return grade;
	} else {
		return getGMod(grade+1);
	}	
}

function gradingStudents(grades) {
	var res = [];
	for(var i in grades) {
		var g = grades[i];
		var gMod = getGMod(g);
		var item;	


		if(g < 38) {
			item = g;
		}
		else if(gMod - g < 3) {
			item = gMod;	
		}
		else if(gMod - g >= 3) {
			item = g;
		}
		else {
			console.log('err');
		}
	
		res.push(item);
	}	

	return res;
}


var output = gradingStudents(input);
console.log(output);
