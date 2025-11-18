# Configuração da Perspective API

Este projeto usa a **Perspective API do Google** para detectar conteúdo tóxico e ofensivo usando IA.

## Como obter a chave da API

1. Acesse: https://perspectiveapi.com/
2. Clique em "Get Started"
3. Faça login com sua conta Google
4. Siga as instruções para criar um projeto no Google Cloud
5. Ative a Perspective API no seu projeto
6. Crie uma chave de API

## Configuração

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione sua chave da API:

```
VITE_PERSPECTIVE_API_KEY=sua_chave_aqui
```

3. Reinicie o servidor de desenvolvimento

## Funcionamento

- **Com chave da API**: Usa IA para detectar toxicidade, ataques de identidade, ameaças, etc.
- **Sem chave da API**: Usa detecção de padrões básicos como fallback

## Limites

A Perspective API tem um limite gratuito generoso. Consulte a documentação oficial para mais detalhes.

## Nota

A chave da API é pública no frontend (prefixed com `VITE_`), mas isso é seguro pois a Perspective API permite uso no cliente. Para maior segurança, você pode criar um proxy no backend.

