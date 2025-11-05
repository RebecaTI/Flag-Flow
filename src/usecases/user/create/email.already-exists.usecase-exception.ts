import { UsecaseExpection } from 'src/usecases/exceptions/usecase.exception';

export class EmailAlreadyExistsUsecaseException extends UsecaseExpection {
  public constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
  }
}
