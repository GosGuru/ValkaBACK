/**
 * rutina controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::rutina.rutina",
  ({ strapi }) => ({
    // Sobreescribir el método findOne para incluir "populate"
    async findOne(ctx) {
      const { id } = ctx.params;

      // Configurar la consulta con "populate"
      const entity = await strapi.entityService.findOne(
        "api::rutina.rutina",
        id,
        {
          populate: ["ejercicios"], // Popula la relación con ejercicios
        }
      );

      return this.transformResponse(entity);
    },

    // Opcional: Si también necesitas "populate" para todas las rutinas
    async find(ctx) {
      const entities = await strapi.entityService.findMany(
        "api::rutina.rutina",
        {
          populate: ["ejercicios"], // Popula la relación con ejercicios
        }
      );

      return this.transformResponse(entities);
    },
  })
);
