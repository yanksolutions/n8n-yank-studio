# Use a imagem base do Node.js
FROM node:20

# Instale o pnpm globalmente
RUN npm install -g pnpm@8.14.3

# Copie o código-fonte do n8n para dentro do contêiner
COPY . /usr/src/n8n

# Defina o diretório de trabalho
WORKDIR /usr/src/n8n

# Instale as dependências e aplique os patches usando pnpm
RUN pnpm install

# Execute o processo de build (se estiver definido no package.json)
RUN pnpm run build

# Exponha a porta em que o n8n está sendo executado (padrão: 5678)
EXPOSE 5678

# Defina o comando de inicialização do n8n
CMD ["pnpm", "start"]