## Mudanças

**1. `src/routes/index.tsx`** — adicionar `id`s nas seções de destino:
- Seção de serviços (linha 85): `id="servicos"`
- Seção do formulário de contato (linha 138): `id="contato"`

**2. `src/routes/__root.tsx`** — atualizar links do menu:
- "Trabalhos" → `to="/" hash="servicos"` (vai para a seção Serviços na home)
- "Falar" / "Contato" → `to="/" hash="contato"` (vai para o formulário de contato na home)
- Mesmas alterações no footer (Trabalhos e Contato).

## Observação

Confirmando: você disse "a aba **trabalho** ir pra seção **serviços**" — vou fazer literalmente isso (Trabalhos abre a seção Serviços). Se foi engano e quer que Trabalhos continue indo para a seção Portfólio, é só me avisar.