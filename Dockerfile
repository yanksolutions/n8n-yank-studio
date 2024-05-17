# Use a imagem base do node com pnpm e uma versão específica do Node.js
FROM node:20

# Copie seus arquivos personalizados para dentro do contêiner
COPY . /customizations

# Defina o diretório de trabalho
WORKDIR /customizations

# Instale uma versão específica do pnpm
RUN npx install -g pnpm@8.14.3 && \
    npx install

RUN pnpm build

# Exponha a porta em que o n8n está sendo executado (padrão: 5678)
EXPOSE 5678

# Defina o comando de inicialização do n8n usando pnpm
CMD ["pnpm", "start"]
