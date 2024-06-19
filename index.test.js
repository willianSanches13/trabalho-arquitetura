const { init, ReportFactory } = require('./index.js');

const  CidadesHTMLReport =  require('./src/CidadesHTMLReporter.js');
const CidadesTXTReport = require('./src/CidadesTXTReporter.js');

describe('ReportFactory', () => {
  it('Deve criar um relatorio html quando o formato for "html"', () => {
    const report = ReportFactory.createReport('html');
    expect(report).toBeInstanceOf(CidadesHTMLReport);
  });

  it('Deve criar um relatorio txt quando o formato for "txt"', () => {
    const report = ReportFactory.createReport('txt');
    expect(report).toBeInstanceOf(CidadesTXTReport);
  });

  it('Deve lancar um erro quando o formato não for suportador', () => {
    expect(() => ReportFactory.createReport('unsupported')).toThrowError(new Error(`Formato de relatório 'unsupported' não suportado.`));
  });
});

