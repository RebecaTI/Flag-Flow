import { UsecaseExpection } from './usecase.exception';

export class UserNotFoundUsecaseException extends UsecaseExpection {
  public constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
  }
}
