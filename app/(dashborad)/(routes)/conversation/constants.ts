import * as z from "zod"

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required", //规定`prompt`最小长度、类型、以及默认值
  }),

})