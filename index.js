import CidadesHTMLReport from './src/CidadesHTMLReporter.js';
import CidadesTXTReport from './src/CidadesTXTReporter.js';


// Padrão criacional Factory
class ReportFactory {
  static createReport(format) {

    if (format === 'txt'){
      return new CidadesTXTReport();
    }else if (format === 'html') {
      return new CidadesHTMLReport();
    }else{
      throw new Error(`Formato de relatório '${format}' não suportado.`);

    }
  }
}

const format = process.argv[2];



// Padrão estrutural decorator
export class ReportDecorator {
  constructor(report) {
    this.report = report;
  }

  ler(caminho) {
    this.report.ler(caminho);
  }

  parse() {
    this.report.parse();
  }

  reportar() {
    return `Cabeçalho do Relatório\n${this.report.reportar()}\nRodapé do Relatório`;
  }
}

//Padrão comportamental Observer
export class ReportObserver {
  update(message) {
    console.log(message);
  }
}

export class ObservableReport {
  constructor(report) {
    this.report = report;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(message) {
    for (let observer of this.observers) {
      observer.update(message);
    }
  }

  ler(caminho) {
    this.report.ler(caminho);
    this.notifyObservers(`Relatório lido de ${caminho}`);
  }

  parse() {
    this.report.parse();
    this.notifyObservers('Relatório analisado');
  }

  reportar() {
    return this.report.reportar();
  }
}

let reporter = ReportFactory.createReport(format);
reporter = new ReportDecorator(reporter);
reporter = new ObservableReport(reporter);
reporter.addObserver(new ReportObserver());
reporter.ler('./data/cidades-2.json');
reporter.parse();
let report = reporter.reportar();
console.log(report);



export default ReportFactory; 

