import { Exception } from 'src/shared/exceptions/exception';

export class UsecaseExpection extends Exception {
  public constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
  }
}
