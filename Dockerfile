FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
 
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001 -G nodejs
 
ENV NODE_ENV production
 
USER nextjs
 
EXPOSE 3000
 
ENTRYPOINT ["npm", "run", "start"]

# TODO: @Baly, deploy this.