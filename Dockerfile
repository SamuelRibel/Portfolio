# Use Node.js base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Install dependencies and build
RUN npm install
RUN npm run build

# Start Vite preview server
CMD ["npm", "run", "preview"]
