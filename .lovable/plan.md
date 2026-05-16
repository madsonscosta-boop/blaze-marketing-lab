As duas fotos de baixo (Design Biennale Rotterdam e Wasteland) hoje usam `fit: "contain"`, o que faz a imagem aparecer com fundo/transparência e padding ao redor — uma "máscara" diferente das fotos de cima, que preenchem todo o card arredondado.

## O que mudar

Em `src/lib/portfolio.ts`, nos itens `esporte` (Biennale) e `estadio` (Wasteland):

- Remover `fit: "contain"` para que as imagens passem a usar `object-cover` (igual às de cima), preenchendo o card arredondado inteiro sem padding nem fundo visível.

Mantenho o tamanho atual delas no grid (`col-span-2`, aspect `16/10`) para não quebrar o mosaico — só a "máscara"/recorte da imagem muda, ficando consistente com as de cima.

## Resultado esperado

As duas fotos de baixo vão aparecer recortadas dentro do mesmo formato arredondado das de cima, sem moldura/padding ao redor.