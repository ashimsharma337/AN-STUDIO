# Use official Node.js image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first
# This helps Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all remaining project files
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Expose Next.js port
EXPOSE 3000

# Build Next.js application
RUN npm run build

# Start production server
CMD ["npm", "start"]