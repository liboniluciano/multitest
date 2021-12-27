import { FindUserUseCase } from "../UserFindUser/FindUserUseCase";
import { UserSessionController } from "./UserSessionController";
import { UserSessionUseCase } from "./UserSessionUseCase";

const userSessionUseCase = new UserSessionUseCase();
const findUserUseCase = new FindUserUseCase();

const userSessionController = new UserSessionController(userSessionUseCase);

export { userSessionController, findUserUseCase };
