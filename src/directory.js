// We use let instead of import so that it can be used by vanilla js
let DirectoryBuilder = require('./DirectoryBuilder');

let directory = new DirectoryBuilder();


directory.addAnchor({
  domain: 'naobtc.com',
  website: 'https://naobtc.com/',
  logo: 'naobtc.com',
  color: '#08b5e5',
});
directory.addAsset('naobtc.com', {
  code: 'BTC',
  issuer: 'GATEMHCCKCY67ZUCKTROYN24ZYT5GK4EQZ65JJLDHKHRUZI3EUEKMTCH',
  instructions: 'https://naobtc.com/#/howto/deposit',
});
directory.addAsset('naobtc.com', {
  code: 'XEL',
  issuer: 'GAXELY4AOIRVONF7V25BUPDNKZYIVT6CWURG7R2I6NQU26IQSQODBVCS',
  instructions: 'https://naobtc.com/#/howto/deposit',
});
directory.addAnchor({
  domain: 'vcbear.net',
  website: 'https://vcbear.net/',
  logo: 'vcbear.net',
  color: '#0c88b6',
});
directory.addAsset('vcbear.net', {
  code: 'JPY',
  issuer: 'GBVAOIACNSB7OVUXJYC5UE2D4YK2F7A24T7EE5YOMN4CE6GCHUTOUQXM',
  instructions: 'https://www.vcbear.net/signin',
});
directory.addAsset('vcbear.net', {
  code: 'XRP',
  issuer: 'GA7FCCMTTSUIC37PODEL6EOOSPDRILP6OQI5FWCWDDVDBLJV72W6RINZ',
  instructions: 'https://www.vcbear.net/signin',
});
directory.addAsset('vcbear.net', {
  code: 'BTC',
  issuer: 'GDXTJEK4JZNSTNQAWA53RZNS2GIKTDRPEUWDXELFMKU52XNECNVDVXDI',
  instructions: 'https://www.vcbear.net/signin',
});

directory.addAnchor({
  domain: 'coins.asia',
  website: 'https://coins.asia/',
  logo: 'coins.asia',
  color: '#04bcfc',
});
directory.addAsset('coins.asia', {
  code: 'PHP',
  issuer: 'GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP',
});


directory.addAnchor({
  domain: 'tempo.eu.com',
  website: 'https://tempo.eu.com/',
  logo: 'tempo.eu.com',
  color: '#1b92de',
});
directory.addAsset('tempo.eu.com', {
  code: 'EURT',
  issuer: 'GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S',
});


directory.addAnchor({
  domain: 'ripplefox.com',
  website: 'https://ripplefox.com/anchor/',
  logo: 'ripplefox.com',
  color: '#fc682a',
});
directory.addAsset('ripplefox.com', {
  code: 'CNY',
  issuer: 'GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX',
  instructions: 'Leave your address in the message to seller when you order the item: https://shop109149722.taobao.com',
});

directory.addAnchor({
  domain: 'btc.papayame.com',
  website: 'https://btc.papayame.com/',
  logo: 'papayame.com',
  color: '#efa443',
});
directory.addAsset('btc.papayame.com', {
  code: 'BTC',
  issuer: 'GAUTUYY2THLF7SGITDFMXJVYH3LHDSMGEAKSBU267M2K7A3W543CKUEF',
  instructions: 'https://btc.papayame.com/',
});

directory.addAnchor({
  domain: 'ltc.papayame.com',
  website: 'https://ltc.papayame.com/',
  logo: 'papayame.com',
  color: '#efa443',
});
directory.addAsset('ltc.papayame.com', {
  code: 'LTC',
  issuer: 'GC5LOR3BK6KIOK7GKAUD5EGHQCMFOGHJTC7I3ELB66PTDFXORC2VM5LP',
  instructions: 'https://ltc.papayame.com/',
});

directory.addAnchor({
  domain: 'apay.io',
  website: 'https://apay.io',
  logo: 'papayame.com',
  color: '#efa443',
});
directory.addAsset('apay.io', {
  code: 'ICN',
  issuer: 'GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR',
  instructions: 'https://apay.io/',
});
directory.addAsset('apay.io', {
  code: 'ETH',
  issuer: 'GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR',
  instructions: 'https://apay.io/',
});
directory.addAsset('apay.io', {
  code: 'BAT',
  issuer: 'GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR',
  instructions: 'https://apay.io/',
});
directory.addAsset('apay.io', {
  code: 'OMG',
  issuer: 'GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR',
  instructions: 'https://apay.io/',
});
directory.addAsset('apay.io', {
  code: 'REP',
  issuer: 'GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR',
  instructions: 'https://apay.io/',
});
directory.addAsset('apay.io', {
  code: 'ZRX',
  issuer: 'GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR',
  instructions: 'https://apay.io/',
});

directory.addAnchor({
  domain: 'mobius.network',
  website: 'https://mobius.network/',
  logo: 'mobius.network',
  color: '#6f39fc',
});
directory.addAsset('mobius.network', {
  code: 'MOBI',
  issuer: 'GDCIUCGL7VEMMF6VYJOW75KQ5ZCLHAQBRM6EPFTKCRWUYVUOOYQCKC5A',
});

directory.addAnchor({
  domain: 'gft.network',
  website: 'https://gft.network/',
  logo: 'gft.network',
  color: '#ddaa7b',
});
directory.addAsset('gft.network', {
  code: 'GFT',
  issuer: 'GAAZUE4PKMKLA7QC2MPUIUXY7BZK2WUCK7Q5EELSDLK4FE3X4DZTSCKN',
  instructions: 'https://gft.network/network/treasury#gft-purchase-and-withdrawal',
});

directory.addAnchor({
  domain: 'collective21.org',
  website: 'https://collective21.org/',
  logo: 'collective21.org',
  color: '#3abfce',
});
directory.addAsset('collective21.org', {
  code: 'SEED',
  issuer: 'GDPFSEBZO2W4TLWZO7FIMMG3QONHXYVF6LUULI6HUJS6PJLE4TRZEXLF',
});

directory.addAnchor({
  domain: 'liquido.i-server.org',
  website: 'https://liquido.i-server.org/',
  logo: 'liquido.i-server.org',
});
directory.addAsset('liquido.i-server.org', {
  code: 'XLQ',
  issuer: 'GD2RRX6BKVTORZ6RIMBLWFVUOAYOLTS2QFJQUQPXLI3PBHR3TMLQNGZX',
});

directory.addAnchor({
  domain: 'moni.com',
  website: 'https://moni.com/',
  logo: 'moni.com',
});
directory.addAsset('moni.com', {
  code: 'EUR',
  issuer: 'GAKBPBDMW6CTRDCXNAPSVJZ6QAN3OBNRG6CWI27FGDQT2ZJJEMDRXPKK',
});

directory.addAnchor({
  domain: 'tonaira.com',
  website: 'https://tonaira.com/',
  logo: 'tonaira.com',
  color: '#82be37',
});
directory.addAsset('tonaira.com', {
  code: 'NGN',
  issuer: 'GCLRUZDCWBHS7VIFCT43BARPP63BHR32HMEVKXYQODA5BU6SIGFK4HL2',
});

directory.addAnchor({
  domain: 'equid.co',
  website: 'https://equid.co/',
  logo: 'equid.co',
});
directory.addAsset('equid.co', {
  code: 'EQD',
  issuer: 'GCGEQJR3E5BVMQYSNCHPO6NPP3KOT4VVZHIOLSRSNLE2GFY7EWVSLLTN',
});

directory.addAnchor({
  domain: 'bitcoinfundi.com',
  website: 'https://bitcoinfundi.com/',
  logo: 'bitcoinfundi.com',
});
directory.addAsset('bitcoinfundi.com', {
  code: 'USD',
  issuer: 'GCYK67DDGBOANS6UODJ62QWGLEB2A7JQ3XUV25HCMLT7CI23PMMK3W6R',
});
directory.addAsset('bitcoinfundi.com', {
  code: 'BTC',
  issuer: 'GCYK67DDGBOANS6UODJ62QWGLEB2A7JQ3XUV25HCMLT7CI23PMMK3W6R',
});

directory.addAnchor({
  domain: 'cryptomover.com',
  website: 'https://cryptomover.com/',
  logo: 'cryptomover.com',
  color: '#fbd364',
});
directory.addAsset('cryptomover.com', {
  code: 'CM3',
  issuer: 'GA4BYMUO5D7OLGVJWZ2D5FCWU7SB63FNZ4QUU574SMNA6ELK5TZD3SO3',
});
directory.addAsset('cryptomover.com', {
  code: 'CM10',
  issuer: 'GA4BYMUO5D7OLGVJWZ2D5FCWU7SB63FNZ4QUU574SMNA6ELK5TZD3SO3',
});
directory.addAsset('cryptomover.com', {
  code: 'CME',
  issuer: 'GA4BYMUO5D7OLGVJWZ2D5FCWU7SB63FNZ4QUU574SMNA6ELK5TZD3SO3',
});
directory.addAsset('cryptomover.com', {
  code: 'CM3x2',
  issuer: 'GA4BYMUO5D7OLGVJWZ2D5FCWU7SB63FNZ4QUU574SMNA6ELK5TZD3SO3',
});
directory.addAsset('cryptomover.com', {
  code: 'HKDC',
  issuer: 'GA4BYMUO5D7OLGVJWZ2D5FCWU7SB63FNZ4QUU574SMNA6ELK5TZD3SO3',
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['CNY', 'ripplefox.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['JPY', 'vcbear.net'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['XRP', 'vcbear.net'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['BTC', 'naobtc.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['XEL', 'naobtc.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['BTC', 'vcbear.net'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['EURT', 'tempo.eu.com'],
});
directory.addPair({
  baseBuying: ['BTC', 'naobtc.com'],
  counterSelling: ['EURT', 'tempo.eu.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['MOBI', 'mobius.network'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['BTC', 'btc.papayame.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['LTC', 'ltc.papayame.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['ETH', 'apay.io'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['BAT', 'apay.io'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['ICN', 'apay.io'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['OMG', 'apay.io'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['REP', 'apay.io'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['ZRX', 'apay.io'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['NGN', 'tonaira.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['GFT', 'gft.network'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['EQD', 'equid.co'],
});
directory.addPair({
  baseBuying: ['BTC', 'naobtc.com'],
  counterSelling: ['EQD', 'equid.co'],
});
directory.addPair({
  baseBuying: ['EURT', 'tempo.eu.com'],
  counterSelling: ['PHP', 'coins.asia'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['PHP', 'coins.asia'],
});
directory.addPair({
  baseBuying: ['SEED', 'collective21.org'],
  counterSelling: ['XLM', 'native'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['CM3', 'cryptomover.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['CM10', 'cryptomover.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['CME', 'cryptomover.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['CM3x2', 'cryptomover.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['HKDC', 'cryptomover.com'],
});
directory.addPair({
  baseBuying: ['XLM', 'native'],
  counterSelling: ['XLQ', 'liquido.i-server.org'],
});
directory.addDestination('GA5XIGA5C7QTPTWXQHY6MCJRMTRZDOSHR6EFIBNDQTCQHG262N4GGKTM', {
  name: 'Kraken',
  requiredMemoType: 'MEMO_ID',
});
directory.addDestination('GCGNWKCJ3KHRLPM3TM6N7D3W5YKDJFL6A2YCXFXNMRTZ4Q66MEMZ6FI2', {
  name: 'Poloniex',
  requiredMemoType: 'MEMO_ID',
});
directory.addDestination('GB6YPGW5JFMMP2QB2USQ33EUWTXVL4ZT5ITUNCY3YKVWOJPP57CANOF3', {
  name: 'Bittrex',
  requiredMemoType: 'MEMO_TEXT',
});
directory.addDestination('GB7GRJ5DTE3AA2TCVHQS2LAD3D7NFG7YLTOEWEBVRNUUI2Q3TJ5UQIFM', {
  name: 'BTC38',
  requiredMemoType: 'MEMO_ID',
});
directory.addDestination('GBV4ZDEPNQ2FKSPKGJP2YKDAIZWQ2XKRQD4V4ACH3TCTFY6KPY3OAVS7', {
  name: 'Changelly',
  requiredMemoType: 'MEMO_ID',
});

module.exports = directory;
