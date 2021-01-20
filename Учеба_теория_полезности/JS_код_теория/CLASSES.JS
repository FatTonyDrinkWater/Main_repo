class Product {
  static type = "Product!!";
  // Статические переменные и методы доступны только у класса

  constructor(options) {
    this.name = options.name;
    this.price = options.price;
  }
  tax() {
    // Методы не будут видно в инстансах, но они доступны
    console.log("Tax is 25");
  }
}

const product = new Product({
  // Новый инстанс прототип класса Продукт
  name: "Pillow",
  price: 25,
});
//
class SalesProduct extends Product {
  static type = "Carpet";
  // Конструктор в дочернем. Сначал нужно вызвать родительский конструктор
  constructor(opt) {
    super(opt);
    this.color = opt.color;
  }
}
const salesProduct = new SalesProduct({
  name: "Carpet",
  price: -10,
  color: "RED",
});
//////////////////////////////////////////////////////////////////////
class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}
