import { getPriceRangeService } from "../../services/articulos/getPriceRangeService.js";

export const getPriceRangeController = async (req, res, next) => {
    try {
        const prices = await getPriceRangeService();
        res.status(200).send({
            status: "success",
            message: "Lista de usuarios",
            data: { prices },
        });
    } catch (error) {
        next(error);
    }
};
