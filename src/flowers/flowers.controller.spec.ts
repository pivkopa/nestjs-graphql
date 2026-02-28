import { Test } from "@nestjs/testing";
import { FlowersController } from "./flowers.controller";
import { FlowersService } from "./flowers.service";

describe('FlowersController', () => {
    let controller: FlowersController;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [FlowersController],
            providers: [
                {
                    provide: FlowersService,
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

        it('shoule return an array of flowers', async () => {
            const result = await controller.findAll();
            expect(result).toEqual([
                {
                    id: 1,
                    name: 'Flower 1',
                    color: 'Red',
                    price: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ])
        })

        it('should create a flower', async () => {
            const result = await controller.create({
                name: 'Lily',
                color: 'Red',
                price: 10,
            })
            expect(result).toEqual({
                id: 1,
                name: 'Lily',
                color: 'Red',
                price: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        })
    });
});