import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

//   beforeEach(async () => {

//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [UserController],
//     }).compile();

//     userController = app.get<UserController>(UserController);
    
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(userController.getAllUser()).toBe('Hello World!');
//     });
//   });
// });
