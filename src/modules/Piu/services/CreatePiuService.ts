import AppError from '@errors/AppError';

import IUsersRepository from '@modules/User/repositories/UsersRepository/types';
import IPiusRepository from '../repositories/PiusRepository/types';

interface IRequest {
    content: string;
    user_id: string;
}

class CreateUserService {
    private usersRepository: IUsersRepository;
    private piusRepository: IPiusRepository;

    constructor(
        usersRepository: IUsersRepository,
        piusRepository: IPiusRepository
    ) {
        this.usersRepository = usersRepository;
        this.piusRepository = piusRepository;
    }

    public async execute({ content, user_id }: IRequest): Promise<any> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        if (!content) {
            throw new AppError('Invalid content');
        }

        const piu = await this.piusRepository.create({ content, user_id });

        await this.piusRepository.save(piu);

        return piu;
    }
}

export default CreateUserService;
