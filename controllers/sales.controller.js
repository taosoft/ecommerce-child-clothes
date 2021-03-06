const SaleService = require("../services/sales.service");

// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getSales = async (req, res, next) => {
    try {
        await SaleService.getSales((result) => {
            return res.status(200).json({
                data: result,
                message: "Successfully Sales Received",
            });
        });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getUserSales = async (req, res, next) => {
    try {
        await SaleService.getUserSales(req.params.id, (result) => {
            return res.status(200).json({
                data: result,
                message: "Succesfully User Sales Recieved",
            });
        });
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getSale = async (req, res, next) => {
    try {
        const Sale = await SaleService.getSale(req.params._id);
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
    const Sale = {
        cartProducts: req.body.products,
        user: req.body.user.user._id,
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
