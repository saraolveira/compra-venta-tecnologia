import { selectPriceRangeModel } from "../../models/articulos/selectPriceRangeModel.js";
import { generateErrorUtils } from "../../utils/helpersUtils.js";

export const getPriceRangeService = async () => {
    const prices = await selectPriceRangeModel();

    if (!prices.length) {
        // si users.length es 0
        throw generateErrorUtils(
            404,
            "NO_PRICES_FOUND",
            "No se ha encontrado el rango de precios"
        );
    }

    return prices[0];
};
