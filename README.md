# TESTES Vinicius

## Iniciação de um projeto Node.js

Para iniciar um projeto, podemos fazer pelo terminal os seguintes comandos:

Primeiro, para criar uma pasta e entrar dentro dela
```mkdir testenode && cd testenode```

Depois, iniciar o projeto (para isso você precisa ter o nodejs instalado na máquina):
```npm init```

Ele vai pedir algumas informações.. basta seguir o passo-a-passo. Depois, com o Visual Studio Code, você pode criar o arquivo **index.js** na raiz do projeto, ou seja, no mesmo diretório onde ele criou o arquivo **package.json**.

## NodeJS
O NodeJS é uma plataforma de desenvolvimento que permite executar códigos javascript em aplicações desktop. Muitas das arquiteturas mais avançadas já estão utilizando o NodeJS por ser uma linguagem fácil e muito rápida de execução.

Por não ter muitas dependências, o ambiente é muito simples de ser montado, por isso é fácil para quem nunca teve contato iniciar programando em JavaScript com NodeJS.

### Executando o aplicativo
Depois de baixado, para executar o app, podemos usar o seguinte comando:
```node index.js 10```

Onde 10 é o número de iterações que queremos (ou qualquer parâmetro)

### Baixando o código pra sua máquina
O GitHub já possui as funções de clone, mas é interessante se familiarizar com os comandos git, já que para trabalhar em uma equipe com mais de um programador, isso é fundamental. 

No terminal (prompt de comando), digitar o seguinte comando:
```git clone https://github.com/gabriel-ayusso/vinicius-teste.git```
Isso vai criar uma pasta no diretório onde você está chamada vinicius-teste e dentro dela vai baixar todos os arquivos do projeto.

### Algumas Dicas
* [Documentação do NodeJS](https://nodejs.org/en/docs/) Em inglês. Vale a pena dar uma olhada.
* Objeto [Process](https://nodejs.org/dist/latest-v12.x/docs/api/process.html). Ele consegue utilizar vários recursos da máquina e da sua aplicação... como por exemplo:
    * Argumentos passados ```process.argv[2]```.
    * Diretório onde o node está instalado na máquina
    * Diretório onde a aplicação está rodando.
    * Variáveis de ambiente (usuário logado, etc..)
    * Número de verão (do app - no arquivo package.json)
    * Memória e CPU/Processador utilizados.
    * entre outros... 