import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string().min(8, {
    message: 'Username or email must be at least 8 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 8 characters.',
  }),
});

export type LoginFormInput = z.infer<typeof loginFormSchema>
