import express from "express"

export const server = express()

// Comprobando que funciona
const router = express.Router()
router.get("/", () => console.log("Hello world"))

/* MIDDLEWARES */

/* ROUTER */
server.use(router)

/* ERRORS */
