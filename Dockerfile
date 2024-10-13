# Install dependencies only when needed
ARG NODE_VERSION=20.17.0
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install --ignore-scripts

# Rebuild the source code only when needed
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build
COPY .env ./.next/ 

# Production image, copy all the files and run next
FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]