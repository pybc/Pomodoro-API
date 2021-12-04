import { Test, TestingModule } from '@nestjs/testing';
import { TrackerController } from '../controllers/tracker.controller';
import { TrackerService } from '../services/tracker.service';

describe('UserController', () => {
  let trackerController: TrackerController;
  let trackerService: TrackerService;

//   beforeEach(async () => {

//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [trackerService],
//     }).compile();

//     trackerController = app.get<trackerController>(trackerController);
    
//   });

//   describe('root', () => {
//     it('should return "Hello World!"', () => {
//       expect(trackerController.getAllUser()).toBe('Hello World!');
//     });
//   });
// });
