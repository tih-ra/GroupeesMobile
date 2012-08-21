function setJSONData(json) {
	bundle_cover.backgroundImage = 'http://grpe.es'+json.bundle.cover;
	bundle_title.text = json.bundle.slug;
}
