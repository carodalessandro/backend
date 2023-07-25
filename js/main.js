class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title === " " ||
      description === " " ||
      price === " " ||
      thumbnail === " " ||
      code === " " ||
      stock === " "
    ) {
      console.log("complete todos los campos");
    } else if (this.products.some((product) => product.code === code)) {
      console.log("el código ya se encuentra cargado");
    } else {
      this.products.push({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: this.products.length + 1,
      });
    }
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      console.log(product);
    } else {
      console.log("not found");
    }
  }
}

const producto = new ProductManager();

producto.getProducts();
producto.addProduct(
  "producto1",
  "alfajor chocolate con dulce de leche",
  500,
  "imagen no disponible",
  267,
  31
);

producto.getProducts();
producto.addProduct(
  "producto2",
  "turron con mani",
  100,
  "imagen no disponible",
  311,
  150
);
producto.getProducts();

producto.getProductById(2);
