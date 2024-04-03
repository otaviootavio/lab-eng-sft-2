import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const trainingTemplateRouter = createTRPCRouter({
  // Listar todos os treinos modelos criados pelo usuário logado
  getAllTrainingTemplates: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.trainingTemplate.findMany({
      where: { createdById: ctx.session.user.id },
      orderBy: { createdAt: "asc" },
    });
  }),

  // Criar um novo treino modelo
  createTrainingTemplate: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.trainingTemplate.create({
        data: {
          name: input.name,
          description: input.description,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  // Atualizar um treino modelo existente
  updateTrainingTemplate: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1).optional(),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.trainingTemplate.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
          // createdBy não precisa ser atualizado
        },
      });
    }),

  // Deletar um treino modelo
  deleteTrainingTemplate: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.trainingTemplate.delete({
        where: { id: input.id },
      });
    }),
});
