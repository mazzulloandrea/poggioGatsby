function removeTrailingSlash(str) {
	return str.replace(/\/+$/, "");
}

export default removeTrailingSlash;
