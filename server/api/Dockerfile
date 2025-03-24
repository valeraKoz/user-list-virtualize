FROM node:20-alpine3.21 as build
WORKDIR /app

# Установка зависимостей для Prisma и сборки
RUN apk add --no-cache

# Копируем зависимости
COPY package*.json ./
COPY prisma ./prisma/

# Устанавливаем зависимости
RUN npm install --include=dev

# Генерируем Prisma-клиент
RUN npx prisma generate

# Копируем исходники
COPY . .

# Собираем проект
RUN npm run build

FROM node:20-alpine3.21 as prod

WORKDIR /app

COPY --from=build /app/generated ./generated
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/.env.prod .

# Команда по умолчанию (будет переопределена в docker-compose)
CMD ["node", "dist/index.js"]