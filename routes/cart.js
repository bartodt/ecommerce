const router = require("express").Router();
const { OrderProduct, Product, Order } = require("../models/index");
const database = require("../database/database")
const { QueryTypes } = require("sequelize");



// router.get("/:id", (req, res) => {
//   database.query(
//       `SELECT * FROM products as p
//    JOIN order_product as op ON p.id = op."productId"
//    JOIN orders as o ON op."orderId" = o.id
//    WHERE o."userId" = ${req.params.id}`, //AND o."orderStatus" = 'pending'
//       { type: QueryTypes.SELECT }
//     )
//     .then((query) => res.status(200).send(query))
//     .catch((err) => console.log(err));
// });

router.get("/:id", (req, res) => {
 Order.findOne({
    where:{id:req.params.id},
    include: [{model: Product, through:OrderProduct}]})
    .then(order => res.send(order))
});


router.post("/add", (req, res) => {
  OrderProduct.create({quantity:1, productId:req.body.productId, orderId:req.body.orderId})
  .then(() => res.status(200).send("item added"))
  .catch((err) => console.log(err))
})

router.put("/itemQuantity/:quantity", (req, res) => {
  const { quantity, orderId, productId } = req.body;
  OrderProduct.findOne({where: {orderId, productId}})
  .then(item => item.update({quantity}))
  .then(res.status(200).send("quantity updated"))
  .catch(err=> console.log(err))
});

module.exports = router;