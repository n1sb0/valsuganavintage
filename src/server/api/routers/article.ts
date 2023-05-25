import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const articleRouter = createTRPCRouter({
  
  all: publicProcedure.query(() => {
    console.log("asdasd");
    return "you can now see this secret message!";
  }),
});
