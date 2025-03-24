import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import {generateMockData} from "./generate-data";
import {prisma} from "./prisma-client";

const app = express();
const port = 3000;

generateMockData()
    .catch(console.error)
    .finally(() => prisma.$disconnect());

// Разрешить все домены (только для разработки!)
app.use(cors());

// Или настроить белый список доменов
const allowedOrigins = [
    'http://localhost:5173',
];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json())

app.get('/users', async (req, res) => {
    try{
        const PAGE_SIZE = 3000;
        const LENGTH = await prisma.user.count();
        const PAGE_COUNT = Math.ceil(LENGTH / PAGE_SIZE);

        const PAGE_NUMBER = Number((await req).query.page)
        console.log('PAGE_NUMBER:::::',PAGE_NUMBER)

        // если нет номера страницы, то вернуть всех пользователей
        if(!PAGE_NUMBER){
            try {
                const users = await prisma.user.findMany({
                    select:{
                        id: true,
                        name: true,
                    }
                })
                res.json(users);
            } catch (err) {
                res.status(500).json({ error: err });
            }
        }
        // если номер страницы больше чем можно, вернуть ошибку
        if(PAGE_COUNT < +PAGE_NUMBER) res.json({message: `Page with ${PAGE_NUMBER} not fount`})

        const skip = (+PAGE_NUMBER - 1) * PAGE_SIZE
        const take = PAGE_SIZE;

        const users = await prisma.user.findMany({
            skip,
            take
        })

        res.json({
            PAGE_COUNT,
            users
        })
    } catch (err){
        res.status(500).json({ error: err });
    }


});
app.get('/users/:id', async (req, res) => {
    const { id:userID } = (await req).params;
    try{
        const user = await prisma.user.findMany({
            where:{
                id: +userID
            }
        })
        res.json(user)
    }catch (err){
        res.status(500).json({ error: err });
    }
})

// /update-user
app.post('/update-user', async (req, res) => {
    const {id,...data} = await req.body

    try{
        const updateUser = await prisma.user.update({
            where:{
                id
            },
            data
        })
        res.json({updateUser, message: `Update user ${id} is Success`})
    } catch(err){
        res.status(500).json({ error: err });
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});