import z from 'zod';
import { User } from '../entities/user.entity';
import { Validator } from '../shared/validators/validator';
import { ZodUtils } from 'src/shared/utils/zod-utils';

export class UserZodValidator implements Validator<User> {
  private constructor() {}

  public static create(): UserZodValidator {
    return new UserZodValidator();
  }

  public validate(input: User): void {
    try {
      this.getZodSchema().parse(input);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = ZodUtils.formatZodError(error);
        throw new Error(`UserZodValidator: ${message}`);
      }
    }
  }

  private getZodSchema() {
    const zodSchema = z.object({
      id: z.string().uuid(),
      email: z.string().email(),
      password: z.string().min(8),
      createdAt: z.date(),
      updatedAt: z.date(),
    });

    return zodSchema;
  }
}
