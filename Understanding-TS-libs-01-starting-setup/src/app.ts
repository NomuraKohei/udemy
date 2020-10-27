// ここにコードを書きます
import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';

const products = [
    { title: "商品１", price: 100 },
    { title: "商品２", price: 200 },
];

// const p1 = new Product('商品１', 100);

/* const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
} */

const loadedProducts = plainToClass(Product, products);
console.log(loadedProducts);