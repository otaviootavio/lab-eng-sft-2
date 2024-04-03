import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const appointmentRouter = createTRPCRouter({
  // Fetch all appointments for the logged-in user
  getAllAppointments: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.appointment.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { startTime: "asc" },
    });
  }),

  // Create a new appointment
  createAppointment: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        startTime: z.date(),
        endTime: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Assuming the user must be logged in to create an appointment
      // Validate that the start time is before the end time
      if (input.startTime >= input.endTime) {
        throw new Error("The start time must be before the end time.");
      }

      return ctx.db.appointment.create({
        data: {
          title: input.title,
          startTime: input.startTime,
          endTime: input.endTime,
          userId: ctx.session.user.id, // Assuming ctx.session.user.id is the logged-in user's ID
        },
      });
    }),

  // Example protected endpoint to update an appointment
  updateAppointment: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1).optional(),
        startTime: z.date().optional(),
        endTime: z.date().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Additional checks (e.g., ensuring the user owns the appointment) should be implemented here
      return ctx.db.appointment.update({
        where: { id: input.id },
        data: {
          title: input.title,
          startTime: input.startTime,
          endTime: input.endTime,
          // No need to update userId as it remains constant
        },
      });
    }),

  // Delete an appointment
  deleteAppointment: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // Additional checks (e.g., ensuring the user owns the appointment) should be implemented here
      return ctx.db.appointment.delete({
        where: { id: input.id },
      });
    }),
});

// Don't forget to integrate this router with your main TRPC router.
// It might look something like this in your main router file:
// export const appRouter = createTRPCRouter({
//   ...otherRouters,
//   appointment: appointmentRouter,
// });

// Ensure your TRPC middleware/setup is correctly configured to use Prisma and session management for the above to work.
