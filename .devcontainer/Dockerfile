FROM node:18

# Install global Angular CLI
RUN npm install -g @angular/cli

# Install additional tools
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspace

# Keep container running
CMD ["sleep", "infinity"]