const saleModel = require("../../models/sales/index");

module.exports = {
  createSale: async (req, res) => {
    console.log(req.body);
    try {
      const sale = saleModel({
        date: new Date(),
        userId: req.body.userId,
        product_id: req.body.product_id,
        whithOutTac: "",
        price: req.body.price,
        priceOff: "",
        unit: req.body.unit,
        payment: {
          status: req.body.payment.status,
          method: req.body.payment.method,
        },
      });
      const document = await sale.save();
      res.status(201).json({ document });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: e.message });
      res.status(400).send({ message: e.message });
      res.status(404).send({ message: e.message });
    }
  },
};
