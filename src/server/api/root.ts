import { createTRPCRouter } from "~/server/api/trpc";
import { articleRouter } from "~/server/api/routers/article";
import { exampleRouter } from "./routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  article: articleRouter,
  example: exampleRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
