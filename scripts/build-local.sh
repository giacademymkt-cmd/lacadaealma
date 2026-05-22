#!/bin/bash
set -e

# Caminho do projeto atual (Google Drive)
PROJECT_DIR="$(pwd)"
BUILD_DIR="/tmp/site-lacada-alma-build"

echo "=== Iniciando compilação local fora do Google Drive ==="
echo "Origem: $PROJECT_DIR"
echo "Destino temporário: $BUILD_DIR"

# 1. Garantir que a pasta temporária exista
mkdir -p "$BUILD_DIR"

# 2. Sincronizar arquivos fonte usando rsync, ignorando node_modules, dist, etc.
echo "Sincronizando arquivos de código fonte..."
rsync -a --delete \
  --exclude="node_modules" \
  --exclude="dist" \
  --exclude=".git" \
  --exclude=".vercel" \
  --exclude=".DS_Store" \
  --exclude="scripts" \
  "$PROJECT_DIR/" "$BUILD_DIR/"

# 3. Mudar para a pasta temporária
cd "$BUILD_DIR"

# 4. Instalar as dependências
if [ ! -d "node_modules" ]; then
  echo "Pasta node_modules não encontrada em /tmp. Instalando dependências..."
  npm install --no-audit
else
  echo "node_modules existente em /tmp. Sincronizando dependências rapidamente..."
  npm install --no-audit
fi

# 5. Executar o build nativo
echo "Executando tsc -b && vite build..."
npm run build

# 6. Sincronizar a pasta dist de volta para o Google Drive
echo "Devolvendo pasta dist para o Google Drive..."
rsync -a --delete "$BUILD_DIR/dist/" "$PROJECT_DIR/dist/"

echo "=== Compilação concluída com sucesso! ==="
