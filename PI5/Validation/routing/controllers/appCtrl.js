exports.getHome = (req, res) => {
	res.render("home");
};

// Get Home Function
// Get Request 
// Url : /
exports.getAbout = (req, res) => {
	res.render("about");
};

// Get Products
// Get Request
// Url : /products
exports.getProducts = (req, res) => {
	res.render("products");
}; 

// Get Products
// Get Request
// Url : /add-products
exports.getAddProducts = (req, res) => {
	res.render("add-product");
};