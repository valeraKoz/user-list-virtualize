"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = require("../generated/prisma_client");
const prisma = new prisma_client_1.PrismaClient();
const generateMockData = () => __awaiter(void 0, void 0, void 0, function* () {
    const companies = ['Tech Corp', 'Dev Inc', 'Code Masters', 'Web Flow', 'ReactInc', 'YellowBank', 'GreenBank', 'BlueBank', 'RedBank'];
    const departments = ['IT', 'HR', 'Finance'];
    const jobTitles = ['Стажер', 'Младший', 'Старший', 'Руководитель'];
    const batchSize = 1000;
    const totalRecords = 1000000;
    for (let i = 0; i < totalRecords; i += batchSize) {
        const data = Array.from({ length: batchSize }).map((_, j) => ({
            name: `Пользователь ${i + j}`,
            department: departments[Math.floor(Math.random() * departments.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)],
        }));
        yield prisma.user.createMany({
            data,
            skipDuplicates: true,
        });
        console.log(`Inserted ${i + batchSize} records`);
    }
});
generateMockData()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
