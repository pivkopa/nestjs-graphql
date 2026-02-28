import { Test } from "@nestjs/testing";
import { FlowersController } from "./flowers.controller";

describe('FlowersController', () => {
    let controller: FlowersController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [FlowersController],
            providers: [
                {
                    provide: 'FlowersService',
                    useValue: {
                        findAll: jest.fn().mockResolvedValue([
                            {
                                id: 1,
                                name: 'Flower 1',
                                color: 'Red',
                                price: 10,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            }
                        ]),
                        create: jest.fn().mockResolvedValue({
                            id: 1,
                            name: 'Lily',
                            color: 'Red',
                            price: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        })
                    }
                },
            ]

        }).compile()

        controller = module.get<FlowersController>(FlowersController);
    });
});