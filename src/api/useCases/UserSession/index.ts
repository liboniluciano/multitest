import { UserSessionController } from "./UserSessionController";
import { UserSessionUseCase } from "./UserSessionUseCase";

const userSessionUseCase = new UserSessionUseCase();

const userSessionController = new UserSessionController(userSessionUseCase);

export { userSessionController };
