FROM oven/bun:latest
WORKDIR /zukojs
COPY . .
EXPOSE 80 
CMD ["bun", "run", "start"]
