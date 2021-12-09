const fs = require('fs');
const path = require('path');


// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
        // leo todo el array de products en el controlador productController
        const products = productModel.all();
        // envio el array product a la vista para que la recorra EJS
        res.render('product', { products });
    },

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;