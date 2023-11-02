# Используем официальный образ Node.js для сборки
FROM node:alpine AS build

# Создаем рабочий каталог в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем React-приложение
RUN npm run build

# Используем образ Apache для развертывания собранного приложения
FROM httpd:alpine

# Копируем собранные файлы React-приложения в директорию Apache
COPY --from=build /app/build/ /usr/local/apache2/htdocs/