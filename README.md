📌 README — Licitem Front-End

Dependências:

- Node 18+
- React 18 + Vite
- Typescript
- Axios
- React Router DOM
- Socket.IO Client
- jwt-decode

Arquitetura:

O front-end segue uma organização em módulos de feature e serviços compartilhados, garantindo escalabilidade e fácil manutenção.

```
src/
├── modules
│   └── chat
│       └── components // Componentes específicos (RoomChat, etc.)
├── shared
│   ├── services // axios (api.ts), socket, auth.ts
│   └── styles   // estilos globais
└── main.tsx     // ponto de entrada da aplicação
```

Fluxo de Autenticação (Firebase):

O usuário faz login via /auth/login no backend.
O backend autentica no Firebase e retorna:

idToken
refreshToken
displayName
uid

O front armazena o idToken e displayName no localStorage.
O idToken é enviado no header Authorization: Bearer <idToken> em todas as requisições.
O displayName é usado para exibir o username no chat.
No Socket.IO, o idToken também é enviado no handshake (auth.token).

Rodando o projeto:
```
npm install
npm run dev
```
Principais Funcionalidades:

- Autenticação com Firebase (via backend).
- Chat em tempo real com Socket.IO.
- Renderização do nome do usuário logado.
- Estrutura modularizada para escalabilidade.
