import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { appointmentRouter } from "./routers/appointment";
import { trainingTemplateRouter } from "./routers/training";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  appointment: appointmentRouter,
  trainingTemplate: trainingTemplateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
