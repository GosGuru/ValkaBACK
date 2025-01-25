/**
 * ejercicio controller
 */

// src/api/ejercicio/controllers/ejercicio.js

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::ejercicio.ejercicio",
  ({ strapi }) => ({
    // Sobrescribiendo el método findOne
    async findOne(ctx) {
      const { id } = ctx.params; // Obtiene el ID de los parámetros de la URL

      try {
        // Realiza la búsqueda del recurso en la base de datos
        const entity = await strapi.db
          .query("api::ejercicio.ejercicio")
          .findOne({
            where: { id },
            populate: ["videoURL", "rutina"], // Asegúrate de incluir las relaciones necesarias
          });

        if (!entity) {
          return ctx.notFound("El ejercicio no fue encontrado.");
        }

        // Devuelve el recurso encontrado
        return this.transformResponse(entity);
      } catch (error) {
        strapi.log.error("Error en findOne:", error);
        return ctx.badRequest("Hubo un problema al obtener el ejercicio.");
      }
    },
  })
);
