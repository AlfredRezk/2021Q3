/** @format */

import  Handlebars  from "./handlebars";
export class Partial {
	constructor(path, name, data) {
		this.name = name;
		this.path = path;
		this.data = data;
	}
}

export class Template {
	constructor(path, data, el, partials) {
		this.path = path;
		this.data = data;
		this.el = el;
		this.partials = partials;
	}

     
  render() {
		// check if there are partials we need to register or not
			// Load the partials

        Handlebars.registerPartial(this.partials.name, this.partials.path());
     const html  = this.path()
			const template = Handlebars.compile(html);
			const result = template(this.data);
			document.querySelector(this.el).innerHTML = result;
	}

}
