# Vercel Deployment Guide

## Configuração Corrigida

O projeto está configurado para deploy na Vercel. O Next.js não precisa de diretório "build" - ele usa `.next` internamente.

## Passos para Deploy

1. **Conecte seu repositório na Vercel:**
   - Acesse [Vercel Dashboard](https://vercel.com/dashboard)
   - Clique em "Add New Project"
   - Conecte seu repositório Git

2. **Configurações do Projeto:**
   - **Framework Preset:** Next.js (deve ser detectado automaticamente)
   - **Root Directory:** `./` (raiz do projeto)
   - **Build Command:** `npm run build` (já configurado)
   - **Output Directory:** Deixe vazio ou `.next` (Next.js gerencia isso)
   - **Install Command:** `npm install`

3. **Variáveis de Ambiente:**
   Configure as seguintes variáveis no painel da Vercel:
   ```
   BINANCE_API_KEY=your_key
   BINANCE_SECRET_KEY=your_secret
   BINANCE_PAYMENT_ADDRESS=your_address
   PAYMENT_AMOUNT=97.00
   PAYMENT_SYMBOL=USDT
   RESEND_API_KEY=re_your_key
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   RESEND_FROM_NAME=PineFactory
   SUPPORT_EMAIL=support@yourdomain.com
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```

4. **Deploy:**
   - Clique em "Deploy"
   - A Vercel detectará automaticamente que é um projeto Next.js
   - O build será feito automaticamente

## Se ainda der erro

Se ainda aparecer erro sobre diretório "build":

1. **No painel da Vercel:**
   - Vá em Settings > General
   - Em "Build & Development Settings"
   - Certifique-se de que:
     - Framework Preset está como "Next.js"
     - Output Directory está **VAZIO** (não coloque "build")
     - Build Command está como `npm run build`

2. **Ou remova o vercel.json:**
   - O Next.js funciona sem vercel.json na maioria dos casos
   - A Vercel detecta automaticamente projetos Next.js

## Nota Importante

O Next.js não cria um diretório "build" público. Ele usa `.next` para o build interno e serve os arquivos diretamente. A Vercel detecta isso automaticamente quando o Framework Preset está configurado como "Next.js".

