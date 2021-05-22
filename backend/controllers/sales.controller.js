const SaleService = require("../services/sales.service");

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getSales = async (req, res, next) => {
    try {
        const Sales = await SaleService.getSales();
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({
            status: 200,
            data: Sales,
            message: "Succesfully Sales Recieved",
        });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getSale = async (req, res, next) => {
    try {
        const Sale = await SaleService.getSale(req.params.id);
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({
            status: 200,
            data: Sale,
            message: "Succesfully Sale Recieved",
        });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.createSale = async (req, res, next) => {
    // Req.Body contains the form submit values.
    console.log("llegue al controller", req.body);
    const Sale = {
        product: req.body.product,
        user: req.body.user,
    };
    try {
        // Calling the Service function with the new object from the Request Body
        const createdSale = await SaleService.createSale(Sale);
        return res
            .status(201)
            .json({ createdSale, message: "Succesfully Created Sale" });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e);
        return res
            .status(400)
            .json({ status: 400, message: "Sale created was Unsuccesfull" });
    }
};
