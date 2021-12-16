/** @format */

class Partial {
	constructor(path, name, data) {
		this.name = name;
		this.path = path;
		this.data = data;
	}
}

class Template {
	constructor(path, data, el, partials) {
		this.path = path;
		this.data = data;
		this.el = el;
		this.partials = partials;
	}

	render() {
		// check if there are partials we need to register or not
		if (this.partials.length >= 1) {
			// Load the partials

			this.partials.forEach((partial) => {
				// get the array of data
				let partialsData = this.partials.map((e) => e.data);
				// convert from array to object
				partialsData = Object.assign({}, ...partialsData);
				this.data = { ...this.data, ...partialsData };

				// read the partial file template
				this.loadFile(partial.path).then((src) => {
					Handlebars.registerPartial(partial.name, src);
				});
			});
		}

		// No partials

		this.loadFile(this.path).then((src) => {
			const template = Handlebars.compile(src);
			const result = template(this.data);
			document.querySelector(this.el).innerHTML = result;
		});
	}

	loadFile(path) {
		return new Promise((resolve, reject) => {
			fetch(path)
				.then((res) => res.text())
				.then((text) => resolve(text))
				.catch((err) => reject(err));
		});
	}
}
