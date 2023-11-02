# Используем официальный образ Node.js
FROM node:alpine

# Создаем рабочий каталог в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Запускаем приложение
CMD ["npm", "start prod"]