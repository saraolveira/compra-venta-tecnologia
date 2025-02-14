export const getArticuloByIdController = async (req, res, next) => {
    try {
        const articulo = req.articulo;

        res.stattus(200).send({
            status: "success",
            message: "Articulo encontrado",
            data: { articulo },
        });
    } catch (error) {
        next(error);
    }
};
