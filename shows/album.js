function(doc, req){
	// !code lib/mustache.js
	var ddoc = this;
	
	return Mustache.to_html(ddoc.templates.album, {
		doc: doc,
		assets: "/dropbucket/_design/dropbucket/"
	});
}
