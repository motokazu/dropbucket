function(doc, req){
	if(!doc){
		return [doc, "Empty drop"];
	}
	
	var t = new Date();
	doc.ctime = t.toString();
	doc.edited_by = req.userCtx;
	return [doc, "drop"];
}