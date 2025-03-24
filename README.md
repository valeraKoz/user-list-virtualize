# User List Virtualize

##### Условия задачи:
Необходимо разработать небольшое веб-приложение, 
которые обладает очень ограниченным функционалом для просмотра и редактирования данных пользователя
(id, имя, фамилия, возраст, адрес электронной почты). 
При нажатии на карточку пользователя – справа открываются поля для редактирования, 
под которым находится кнопка сохранить. При листании списка пользователей UI 
должен оставаться отзывчивым и работать без подвисаний;

В качестве источника данных – json-файл/замоканый backend/любое
либо иное аналогичное решение с рандомными данными вида:
```typescript
Array<{name: string, department: string, company: string, jobTitle: string}>
```
* Объем данных: 1 миллион пользователей.
* Стек технологий: HTML, CSS or preprocessors, React, Redux;
* Главное условие: стабильная работа веб-приложения при большом объеме данных

> ### Реализация:
> * Генерация данных и хранение в базе данных в контейнере Docker.
> * Хранение пользователей и прокидывание состояний между окнами в redux.
> * Бесконечная подгрузка скролом с api.
> * Виртуализация для оптимизации вывода большого объема данных.

> ### Стэк:
> ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
> ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
> ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
> ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
> ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)



> ### Использование:
>> Шаг.1 - Запуск сервера, базы данных и генерации данных:\
>> Из папки ./server в терминале вызываем
>> ```bash
>> npm run docker:build
>> ```
>> [!Внимание]
>> У вас обязательно должен быть установлен и включен Docker.
> 
>> Шаг.2 - Запуск клиента:\
>> Из папки ./client в терминале вызываем
>> ```bash
>> npm run dev
>> ```
>
>> Шаг.3 - Обновление сервера:\
>> Для удаления (обнуления) сервера используйте
>> ```bash
>> npm run docker:clear
>> ```
>> Вы должны будете увидеть:
>> ```bash
>> [+] Running 5/5
>>  ✔ Container api-api-1         Removed                                                                                                                                                                                        0.1s 
>>  ✔ Container postgres_db       Removed                                                                                                                                                                                        0.2s 
>>  ✔ Image postgres:15           Removed                                                                                                                                                                                        0.3s 
>>  ✔ Image api-api:latest        Removed                                                                                                                                                                                        0.1s 
>>  ✔ Network api_prisma-network  Removed  
>> ```
>> После этого можно заново запустить сервер.







