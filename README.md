## Mutant Api
Aplicação para recuperar e salvar usuários, filtrando os que estão em suítes

### Essa aplicação utiliza
- mysql ( salvar dados )
- elasticsearch ( salvar logs )
- Kibana ( Para visualizar os dados de logs )
- nestJs ( A base da aplicação )
- Objection ( Orm para o banco )
- Docker ( Para rodar tudo isso sem problemas )

### Rodando o projeto
Abra a pasta do projeto após ter feito o clone e execute o comando:
```
cp .env.example .env
```
depois:
```
yarn
```

Criar e Adicionar permissões para a pasta do elasticSearch
```bash
mkdir .esdata
sudo chown 1000:1000 .esdata/
```

Depois execute: 
```
docker-compose up
```
Caso ocorra uma problema de conexão com a aplicação e o banco derrube o container e levante novamente <br>
( Esse problema ocorre pois é a primeira inicialização do banco )

Para identificar que a aplicação está rodando acesse `http://localhost:3000/` você deve receber a mensagem `alive`
<br>Para visualizar os logs salvos acesse o kibana em `http://localhost:5601/app/kibana` e crie os filtros necessários

Caso aconteça algum problema entre em contato através do email [alvesgamadossantos@gmail.com](alvesgamadossantos@gmail.com)