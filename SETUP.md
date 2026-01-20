# Configuração do Sistema de Pagamento

## Visão Geral

O sistema verifica pagamentos através da API da Binance e envia automaticamente o código completo via email usando Resend.

## Passo a Passo

### 1. Configurar Binance API

1. **Criar API Key na Binance:**
   - Acesse: https://www.binance.com/en/my/settings/api-management
   - Clique em "Create API"
   - Escolha "System generated" ou "Custom label"
   - **IMPORTANTE:** Marque apenas as permissões de **Read** (leitura)
   - Não marque permissões de Trading ou Withdraw por segurança
   - Complete a verificação de segurança

2. **Obter informações:**
   - API Key: Será exibida após criação (copie imediatamente)
   - Secret Key: Será exibida apenas uma vez (copie e guarde em local seguro)
   - Endereço de depósito: Acesse sua carteira Binance e copie o endereço USDT

3. **Adicionar ao `.env.local`:**
```env
BINANCE_API_KEY=sua_api_key_aqui
BINANCE_SECRET_KEY=sua_secret_key_aqui
BINANCE_PAYMENT_ADDRESS=seu_endereco_deposito_aqui
PAYMENT_AMOUNT=97.00
PAYMENT_SYMBOL=USDT
```

### 2. Configurar Resend (Email)

1. **Criar conta no Resend:**
   - Acesse: https://resend.com
   - Crie uma conta gratuita
   - Você receberá 3.000 emails/mês gratuitamente

2. **Criar API Key:**
   - Vá em "API Keys" no dashboard
   - Clique em "Create API Key"
   - Dê um nome (ex: "PineFactory Production")
   - Copie a chave (começa com `re_`)

3. **Configurar domínio (opcional):**
   - Para produção, configure seu domínio
   - Para desenvolvimento, pode usar o domínio de teste do Resend
   - Siga as instruções de DNS no dashboard

4. **Adicionar ao `.env.local`:**
```env
RESEND_API_KEY=re_sua_chave_aqui
RESEND_FROM_EMAIL=noreply@seudominio.com
RESEND_FROM_NAME=PineFactory
SUPPORT_EMAIL=support@seudominio.com
```

### 3. Configurar URL Base

Para produção, configure a URL base:

```env
NEXT_PUBLIC_BASE_URL=https://seudominio.com
```

Para desenvolvimento local:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Como Funciona

### Fluxo de Verificação

1. **Cliente faz pagamento:**
   - Cliente envia USDT para o endereço configurado
   - Aguarda confirmação na blockchain

2. **Cliente verifica pagamento:**
   - Preenche email no formulário
   - Sistema verifica histórico de depósitos na Binance
   - Compara endereço, valor e símbolo
   - Verifica se o depósito está confirmado (status = 1)

3. **Envio automático:**
   - Se pagamento confirmado, código é enviado por email
   - Email contém código completo e instruções
   - Cliente recebe acesso imediato

### Métodos de Verificação

O sistema usa dois métodos:

1. **Verificação por Histórico de Depósitos (Recomendado):**
   - Verifica depósitos dos últimos 24 horas
   - Compara endereço, valor e símbolo exatos
   - Mais preciso e seguro

2. **Verificação por Saldo (Fallback):**
   - Verifica se saldo aumentou
   - Menos preciso, mas funciona como backup

## Segurança

### Boas Práticas

1. **API Keys:**
   - Nunca commite API keys no Git
   - Use apenas permissões de leitura na Binance
   - Rotacione keys periodicamente

2. **Variáveis de Ambiente:**
   - Use `.env.local` para desenvolvimento
   - Configure variáveis na Vercel para produção
   - Nunca exponha secrets no frontend

3. **Validação:**
   - Sistema valida endereço, valor e símbolo
   - Apenas depósitos confirmados são aceitos
   - Verificação acontece no servidor (API route)

## Troubleshooting

### Erro: "Binance API error"

- Verifique se API Key e Secret Key estão corretos
- Confirme que tem permissões de leitura
- Verifique se IP está na whitelist (se configurado)

### Erro: "Payment not verified"

- Confirme que o pagamento foi feito para o endereço correto
- Verifique se o valor corresponde exatamente
- Aguarde confirmação na blockchain (pode levar alguns minutos)

### Erro: "Failed to send email"

- Verifique RESEND_API_KEY no `.env.local`
- Confirme que o domínio está configurado (ou use domínio de teste)
- Verifique logs no dashboard do Resend

### Email não chega

- Verifique pasta de spam
- Confirme que o email está correto
- Verifique logs no dashboard do Resend

## Testando

### Teste Local

1. Configure todas as variáveis no `.env.local`
2. Inicie o servidor: `npm run dev`
3. Acesse a página de download
4. Preencha o formulário de verificação
5. Verifique logs no console do servidor

### Teste de Produção

1. Configure variáveis na Vercel
2. Faça deploy
3. Teste com pagamento real (pequeno valor)
4. Verifique se email é enviado corretamente

## Suporte

Para problemas ou dúvidas:
- Verifique logs do servidor
- Consulte documentação da Binance API
- Consulte documentação do Resend
- Entre em contato com suporte

