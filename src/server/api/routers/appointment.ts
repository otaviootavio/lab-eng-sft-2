import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const appointmentRouter = createTRPCRouter({
  getAllAppointments: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.appointment.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { startTime: "asc" },
      include: { trainingTemplate: true },
    });
  }),

  createAppointment: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        startTime: z.date(),
        endTime: z.date(),
        trainingTemplateId: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.startTime >= input.endTime) {
        throw new Error("The start time must be before the end time.");
      }

      return ctx.db.appointment.create({
        data: {
          title: input.title,
          startTime: input.startTime,
          endTime: input.endTime,
          userId: ctx.session.user.id,
          trainingTemplateId: input.trainingTemplateId,
        },
      });
    }),

  updateAppointment: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1).optional(),
        startTime: z.date().optional(),
        endTime: z.date().optional(),
        trainingTemplateId: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.appointment.update({
        where: { id: input.id },
        data: {
          title: input.title,
          startTime: input.startTime,
          endTime: input.endTime,
          trainingTemplateId: input.trainingTemplateId,
        },
      });
    }),

  deleteAppointment: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.appointment.delete({
        where: { id: input.id },
      });
    }),
});
