module.exports = (request) => {

	return {
		body: JSON.stringify({
			time: (new Date()).getTime() / 1000
		}, null, "\t")
	};
}