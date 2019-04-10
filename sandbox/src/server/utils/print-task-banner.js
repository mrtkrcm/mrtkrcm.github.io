const figlet = require('figlet')
const kleur = require('kleur')

module.exports = (text) => {
  const bannerFiglet = figlet.textSync(text, { font: 'Calvin S' })
  const banner = [
    // header
    ' '.repeat(1),
    `${'\n'.repeat(1)}`,
    // body
    bannerFiglet,
    '--------| Frontend Web Application |--------',
    // footer
    `${'\n'.repeat(2)}`,
    ' '.repeat(1)

  ]
  banner.map(i => console.log(kleur.yellow.dim(i))) // eslint-disable-line no-console
}
