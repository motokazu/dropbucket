function(tag, counts){
	var sum = 0;
	for(var i=0;i < counts.length;i++){
		sum += counts[i];
	}
	return sum;
}