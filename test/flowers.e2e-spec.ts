import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import request from 'supertest';

describe('FlowersController (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleMixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleMixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();

        it('/flowers (GET)', () => {
            return request(app.getHttpServer()).get('/flowers').expect(200).expect([{
                id: 1,
                name: 'Flower 1',
                color: 'Red',
                price: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            }]);
        })

        it('/flowers (POST)', () => {
            return request(app.getHttpServer()).post('/flowers').send({
                name: 'Lily',
                color: 'Red',
                price: 10,
            }).expect(201).expect({
                id: 1,
                name: 'Lily',
                color: 'Red',
                price: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        })

        afterAll(async () => {
            await app.close();
        })
    })
})