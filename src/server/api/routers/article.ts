import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const articleRouter = createTRPCRouter({
  
  all: protectedProcedure.query(() => {
    console.log("asdasd");
    return "you can now see this secret message!";
  }),
});
