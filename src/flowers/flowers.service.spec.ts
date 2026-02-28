import { Test } from "@nestjs/testing";
import { FlowersService } from "./flowers.service";
import { PrismaService } from "src/prismaService";

describe('FlowersService', () => {
    let service: FlowersService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                FlowersService,
                {
                    provide: PrismaService,
                    useValue: {
                        flower: {
                            findMany: jest.fn().mockResolvedValue([
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
                    }
                },
            ]

        }).compile()

        service = module.get<FlowersService>(FlowersService);
    });


    it('should return an array of flowers', async () => {
        const result = await service.findAll();
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
        const result = await service.create({
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