// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "product_id",
  onDelete: "CASCADE"
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",

})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_of_product'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: {
    model: ProductTag,
    unique:false
  },
  as: 'products_of_tag'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
