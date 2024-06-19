import fs from 'fs';

class Report {
  ler(caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  parse() {
    this.cidades = JSON.parse(this.cidades);
  }
}

class ReportReader extends Report {
  ler(caminho) {
    super.ler(caminho);
  }
}

class ReportParser extends Report {
  parse() {
    super.parse();
  }
}

export default class CidadesHTMLReport extends Report {
  reportar() {
    let result = `
  <!DOCTYPE HTML>
  <html>
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <title>Relatório de Nomes de Cidades</title>
    </head>
    <body>
      <h1>Relatório de Nomes de Cidades</h1>
    <ul>`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '     <li>' + this.cidades[i]['Nome'] + '</li>\n';
    }

    result += `
      </ul>
    </body>
  </html>`;

    return result;
  }
}
