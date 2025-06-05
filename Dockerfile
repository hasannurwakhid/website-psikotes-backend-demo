# Gunakan image resmi Node.js versi 18
FROM node:18

# Buat direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependency
RUN npm install

# Salin semua file project ke dalam container
COPY . .

# Jalankan aplikasi
CMD ["node", "index.js"]

# Tentukan port yang akan digunakan (wajib untuk Fly.io)
EXPOSE 8080
