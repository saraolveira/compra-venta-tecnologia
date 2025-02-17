export const aceptarRechazarController = async (req, res, next) => {
    try {
        // req.user.id tendremos el usuario de la peticiqon (usuario del token)
        const { id_art, id_sol } = req.params;
        const { action } = req.body;

        console.log(id_art);
        console.log(id_sol);
        console.log(action);

        // devolver un error si no tengo action
        //throw generateErrorUtils(
        //    400,
        //    "MISSING_PARAMETER",
        //    "Falta el parámetro vendido"
        //);

        // existe el articulo id_art

        // existe solicidud id_sol

        // comprobar si soy dueño del articulo
        //  req.user.id  conincide con el propietarios del articulo id_art

        // actualizar la solicitud (action)

        res.status(200).send({
            status: "success",
            message: "Ok",
            data: "devolver el nuevo estado de la solicitud",
        });
    } catch (error) {
        next(error);
    }
};
