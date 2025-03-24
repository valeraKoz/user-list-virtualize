#!/bin/sh

# echo "Checking and creating database if it does not exist..."
echo "Starting application with Prisma database initialization..."
npx prisma migrate deploy
echo "Success Run npx prisma migrate deploy."

# 启动应用程序
echo "Starting application..."
exec node dist/index.js