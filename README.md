# movies

## POST: /movie
Body: { "title": "Procurando Nemo", "genre": "Animação", "platform":"Netflix", "status": "Não Assistido" }
summary é um campo opcional na rota POST

## GET: /movie

Retorna todos os filmes cadastrados no banco

## GET: /movie?plataforma=NOME_DA_PLATAFORMA

Retonar a quantidade de filmes cadastrados por plataforma

## PUT: /movie/:id

id referente ao filme cadastrado no banco
Body :{ "status" : "Assistido", "summary": "Filme muito criativo"}

## DELETE :/movie/:id

Deleta filme do banco de dados pelo id passado por parâmetro.
