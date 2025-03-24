import {prisma} from "./prisma-client";

export const generateMockData = async () => {
    const companies = ['Tech Corp', 'Dev Inc', 'Code Masters','Web Flow','ReactInc','YellowBank','GreenBank','BlueBank','RedBank'];
    const departments = ['IT', 'HR', 'Finance'];
    const jobTitles = ['Стажер', 'Младший', 'Старший','Руководитель'];

    const batchSize = 1000;
    const totalRecords = 1_000_000;

    for (let i = 0; i < totalRecords; i += batchSize) {
        const data = Array.from({ length: batchSize }).map((_, j) => ({
            name: `Пользователь ${i + j}`,
            department: departments[Math.floor(Math.random() * departments.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)],
        }));

        await prisma.user.createMany({
            data,
            skipDuplicates: true,
        });

        console.log(`Inserted ${i + batchSize} records`);
    }
};

