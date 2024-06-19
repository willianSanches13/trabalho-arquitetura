# Design Patterns
Este projeto é uma demonstração de como usar os padrões de projeto Decorator e Observer em JavaScript.

## Como usar
1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto.
3. Execute npm install para instalar todas as dependências.
4. Execute node index.js <formato> para executar
5. Executar npm test para testar

## Design Patterns Usados

## Padrão Factory
O padrão Factory é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.
No nosso caso, temos a classe `ReportFactory` que é a nossa fábrica. Ela tem um método estático `createReport(format)` que cria e retorna uma instância de `CidadesTXTReport` ou `CidadesHTMLReport` com base no argumento `format` passado.

### Decorator
A classe `ReportDecorator` é um exemplo do padrão Decorator. Ela estende a funcionalidade de um objeto report ao adicionar um cabeçalho e um rodapé ao relatório.

### Observer
A classe `ReportObserver` é um exemplo do padrão Observer. Ela tem um método update() que é chamado quando algo que ela está observando muda. A classe `ObservableReport` é o objeto que está sendo observado. Quando algo muda no ObservableReport, ele notifica todos os seus observadores para que eles possam se atualizar.

### Refatoração 
O Princípio da Responsabilidade Única (SRP) sugere que uma classe deve ter apenas uma responsabilidade. No caso, as classes `CidadesHTMLReport` e `CidadesTXTReporter` estavam lendo, analisando e reportando os dados. Podemos dividir essas responsabilidades em classes separadas.

O Princípio da Substituição de Liskov (LSP) sugere que as classes base devem ser facilmente substituíveis por suas classes derivadas. Para isso, podemos criar uma classe base `Report` e fazer `CidadesTXTReporter`  `CidadesHTMLReport` herdar dela.

