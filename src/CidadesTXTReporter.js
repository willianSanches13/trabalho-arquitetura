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

export default class CidadesTXTReporter extends Report {
  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }
}