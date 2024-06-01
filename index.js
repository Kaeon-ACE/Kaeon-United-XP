require("kaeon-united")("openAxis").openAxis({
	routes: {
		api: { "/api/": process.cwd() + "/api" },
		default: {
			index: "https://kaeon.gitlab.io/kaeon-united/"
		},
		public: { "/": process.cwd() + "/public" }
	}
});