/**
 * ejercicio controller
 */

// src/api/ejercicio/controllers/ejercicio.js

import { factories } from "@strapi/strapi";
import { Context } from "koa";

export default factories.createCoreController(
  "api::ejercicio.ejercicio",
  ({ strapi }) => ({
    async findOne(ctx: Context) {
      const { id } = ctx.params;

      if (!id) {
        return ctx.badRequest("El ID es requerido");
      }

      try {
        // Forzamos que se poblacion el campo videoURL de forma detallada
        const entity = await strapi.entityService.findOne(
          "api::ejercicio.ejercicio",
          id,
          {
            populate: {
              videoURL: { populate: "*" }, // o simplemente: videoURL: true
              // Si tienes otras relaciones que quieras incluir, agrégalas aquí
            },
          }
        );

        if (!entity) {
          return ctx.notFound();
        }

        return ctx.send({ data: entity });
      } catch (error) {
        console.error("Error en findOne:", error);
        return ctx.internalServerError("Algo salió mal");
      }
    },
  })
);
