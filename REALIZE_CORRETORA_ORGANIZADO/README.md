# Realize Corretora

Site institucional / landing page da Realize Corretora, organizado para manutenção no VS Code, versionamento no GitHub e publicação pelo Netlify.

## Estrutura do projeto

```text
REALIZE_CORRETORA_ORGANIZADO/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
├── assets/
│   ├── images/
│   ├── icons/
│   └── videos/
└── docs/
    └── modelo-original.html
```

## Como testar localmente

Abra o arquivo `index.html` no navegador ou use a extensão Live Server no VS Code.

## Publicação no Netlify

Para site simples em HTML, CSS e JavaScript, use:

```text
Branch to deploy: main
Base directory: vazio
Build command: vazio
Publish directory: .
```

## Observações importantes

- As imagens foram movidas para `assets/images/`.
- O CSS foi separado em `styles.css`.
- O JavaScript foi separado em `script.js`.
- O arquivo antigo `modelo.html` foi preservado em `docs/modelo-original.html`.
- O HTML referencia `assets/videos/video_institucional.mp4`, mas esse arquivo de vídeo não estava dentro do ZIP original. Para o vídeo funcionar, adicione esse arquivo nessa pasta com exatamente esse nome.

## Fluxo recomendado

```text
VS Code → GitHub → Netlify
```

Sempre teste localmente antes de fazer commit e push.
