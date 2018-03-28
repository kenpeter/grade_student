function getGMod(grade) {
  if(grade % 5 == 0) { 
    return grade;
  } else { 
    return getGMod(grade+1);
  } 
}

var out = getGMod(75);
console.log(out);

out = getGMod(67);
console.log(out);

out = getGMod(38);
console.log(out);

out = getGMod(33);
console.log(out);
