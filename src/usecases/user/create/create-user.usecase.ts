import { UserGateway } from 'src/domain/repositories/user.gateway';
import { Usecase } from 'src/usecases/usecase';

export type CreateUserInput = {
  email: string;
  password: string;
};

export type CreateUserOutput = {
  id: string;
};

export class CreateUserUsecase
  implements Usecase<CreateUserInput, CreateUserOutput>
{
  public constructor(private readonly userGateway: UserGateway) {}

  public async execute({
    email,
    password,
  }: CreateUserInput): Promise<CreateUserOutput> {
    const existenUser = await 
  }
}
