
// https://en.wikipedia.org/wiki/Epoch_(astronomy)
let epochJ2000 = new Date('2000-01-01T11:58:55.816Z');
// https://www.timeanddate.com/calendar/march-equinox.html
// https://www.timeanddate.com/astronomy/tropicalyearlength.html
// https://www.timeanddate.com/calendar/seasons.html?year=2000
// https://data.giss.nasa.gov/modelE/ar5plots/srvernal.html
let epochMarchEquinox2000 = new Date('2000-03-20T07:35:00Z');
let earthOrbitPeriod = 365.26;
let earthSiderialDay = 24*3600*1000 * (1-1/earthOrbitPeriod);

let bodies = [ "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", ];
// Units: radius (m), mass (kg), orbitRadius (m), orbitPeriod (days), orbitIncl (deg)
let bodyDefs = {
  // Sun
  Sun: { name: "Sun", radius: 695950, mass: 1.989E+30, satNum: "", orbitCenter: "", orbitRadius: 0, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Mercury: { name: "Mercury", radius: 2433, mass: 3.302E+23, satNum: "I", orbitCenter: "Sun", orbitRadius: 57950000, orbitPeriod: 87.97, orbitIncl: 7, orbitEcc: 0.21, },
  Venus: { name: "Venus", radius: 6053, mass: 4.8685E+24, satNum: "II", orbitCenter: "Sun", orbitRadius: 108110000, orbitPeriod: 224.7, orbitIncl: 3.39, orbitEcc: 0.01, },
  Earth: { name: "Earth", radius: 6371, tiltDeg: 23.5, siderialDay: earthSiderialDay, mass: 5.9736E+24, satNum: "III", orbitCenter: "Sun", orbitRadius: 149570000, orbitPeriod: 365.26, orbitIncl: 0, orbitEcc: 0.02, },
  Mars: { name: "Mars", radius: 3380, mass: 6.4185E+23, satNum: "IV", orbitCenter: "Sun", orbitRadius: 227840000, orbitPeriod: 686.98, orbitIncl: 1.85, orbitEcc: 0.09, },
  Jupiter: { name: "Jupiter", radius: 71492, mass: 1.8986E+27, satNum: "V", orbitCenter: "Sun", orbitRadius: 778140000, orbitPeriod: 4332.71, orbitIncl: 1.31, orbitEcc: 0.05, },
  Saturn: { name: "Saturn", radius: 58219, mass: 5.6846E+26, satNum: "VI", orbitCenter: "Sun", orbitRadius: 1427000000, orbitPeriod: 10759.5, orbitIncl: 2.49, orbitEcc: 0.06, },
  Uranus: { name: "Uranus", radius: 23470, mass: 8.6832E+25, satNum: "VII", orbitCenter: "Sun", orbitRadius: 2870300000, orbitPeriod: 30685, orbitIncl: 0.77, orbitEcc: 0.05, },
  Neptune: { name: "Neptune", radius: 22716, mass: 1.0243E+26, satNum: "VIII", orbitCenter: "Sun", orbitRadius: 4499900000, orbitPeriod: 60190, orbitIncl: 1.77, orbitEcc: 0.01, },
  Pluto: { name: "Pluto", radius: 1137, mass: 1.3105E+22, satNum: "IX", orbitCenter: "Sun", orbitRadius: 5913000000, orbitPeriod: 90550, orbitIncl: 17.15, orbitEcc: 0.25, },

  // Earth
  Moon: { name: "Moon", radius: 1738, mass: 7.35E+22, satNum: "I", orbitCenter: "Earth", orbitRadius: 384403, orbitPeriod: 27.32, orbitIncl: 5.14, orbitEcc: 0.05, },
  // Mars
  Phobos: { name: "Phobos", radius: 11, mass: 1.08E+16, satNum: "I", orbitCenter: "Mars", orbitRadius: 9408, orbitPeriod: 0.32, orbitIncl: 1, orbitEcc: 0.02, },
  Deimos: { name: "Deimos", radius: 6, mass: 1.80E+15, satNum: "II", orbitCenter: "Mars", orbitRadius: 23457, orbitPeriod: 1.26, orbitIncl: 1.8, orbitEcc: 0, },
  // Jupiter
  Metis: { name: "Metis", radius: 20, mass: 9.56E+16, satNum: "XVI", orbitCenter: "Jupiter", orbitRadius: 128000, orbitPeriod: 0.29, orbitIncl: 0, orbitEcc: 0, },
  Adrastea: { name: "Adrastea", radius: 10, mass: 1.91E+16, satNum: "XIV", orbitCenter: "Jupiter", orbitRadius: 129000, orbitPeriod: 0.3, orbitIncl: 0, orbitEcc: 0, },
  Amalthea: { name: "Amalthea", radius: 94, mass: 7.17E+18, satNum: "V", orbitCenter: "Jupiter", orbitRadius: 181400, orbitPeriod: 0.5, orbitIncl: 0.4, orbitEcc: 0, },
  Thebe: { name: "Thebe", radius: 50, mass: 7.77E+17, satNum: "XV", orbitCenter: "Jupiter", orbitRadius: 222000, orbitPeriod: 0.67, orbitIncl: 0.8, orbitEcc: 0.02, },
  Io: { name: "Io", radius: 1821, mass: 8.94E+22, satNum: "I", orbitCenter: "Jupiter", orbitRadius: 421900, orbitPeriod: 1.77, orbitIncl: 0.04, orbitEcc: 0, },
  Europa: { name: "Europa", radius: 1565, mass: 4.80E+22, satNum: "II", orbitCenter: "Jupiter", orbitRadius: 671200, orbitPeriod: 3.55, orbitIncl: 0.47, orbitEcc: 0.01, },
  Ganymede: { name: "Ganymede", radius: 2634, mass: 1.48E+23, satNum: "III", orbitCenter: "Jupiter", orbitRadius: 1071000, orbitPeriod: 7.15, orbitIncl: 0.19, orbitEcc: 0, },
  Callisto: { name: "Callisto", radius: 2403, mass: 1.08E+23, satNum: "IV", orbitCenter: "Jupiter", orbitRadius: 1880000, orbitPeriod: 16.69, orbitIncl: 0.28, orbitEcc: 0.01, },
  Themisto: { name: "Themisto", radius: 0, mass: 0, satNum: "XVIII", orbitCenter: "Jupiter", orbitRadius: 7507000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Leda: { name: "Leda", radius: 8, mass: 5.68E+15, satNum: "XIII", orbitCenter: "Jupiter", orbitRadius: 11110000, orbitPeriod: 238.72, orbitIncl: 27, orbitEcc: 0.15, },
  Himalia: { name: "Himalia", radius: 93, mass: 9.56E+18, satNum: "VI", orbitCenter: "Jupiter", orbitRadius: 11470000, orbitPeriod: 250.57, orbitIncl: 28, orbitEcc: 0.16, },
  Lysithea: { name: "Lysithea", radius: 18, mass: 7.77E+16, satNum: "X", orbitCenter: "Jupiter", orbitRadius: 11710000, orbitPeriod: 259.22, orbitIncl: 29, orbitEcc: 0.11, },
  Elara: { name: "Elara", radius: 38, mass: 7.77E+17, satNum: "VII", orbitCenter: "Jupiter", orbitRadius: 11740000, orbitPeriod: 259.65, orbitIncl: 28, orbitEcc: 0.21, },
  Ananke: { name: "Ananke", radius: 15, mass: 3.82E+16, satNum: "XII", orbitCenter: "Jupiter", orbitRadius: 20700000, orbitPeriod: -631, orbitIncl: 147, orbitEcc: 0.17, },
  Carme: { name: "Carme", radius: 20, mass: 9.56E+16, satNum: "XI", orbitCenter: "Jupiter", orbitRadius: 22350000, orbitPeriod: -692, orbitIncl: 163, orbitEcc: 0.21, },
  Pasiphae: { name: "Pasiphae", radius: 25, mass: 1.91E+17, satNum: "VIII", orbitCenter: "Jupiter", orbitRadius: 23500000, orbitPeriod: -735, orbitIncl: 147, orbitEcc: 0.38, },
  Sinope: { name: "Sinope", radius: 18, mass: 7.77E+16, satNum: "IX", orbitCenter: "Jupiter", orbitRadius: 23700000, orbitPeriod: -758, orbitIncl: 153, orbitEcc: 0.28, },
  Iocaste: { name: "Iocaste", radius: 0, mass: 0, satNum: "XXIV", orbitCenter: "Jupiter", orbitRadius: 20216000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Harpalyke: { name: "Harpalyke", radius: 0, mass: 0, satNum: "XXII", orbitCenter: "Jupiter", orbitRadius: 21132000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Praxidike: { name: "Praxidike", radius: 0, mass: 0, satNum: "XXVII", orbitCenter: "Jupiter", orbitRadius: 20964000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Taygete: { name: "Taygete", radius: 0, mass: 0, satNum: "XX", orbitCenter: "Jupiter", orbitRadius: 23312000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Chaldene: { name: "Chaldene", radius: 0, mass: 0, satNum: "XXI", orbitCenter: "Jupiter", orbitRadius: 23387000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Kalyke: { name: "Kalyke", radius: 0, mass: 0, satNum: "XXIII", orbitCenter: "Jupiter", orbitRadius: 23745000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Callirrhoe: { name: "Callirrhoe", radius: 0, mass: 0, satNum: "XVII", orbitCenter: "Jupiter", orbitRadius: 24100000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Megaclite: { name: "Megaclite", radius: 0, mass: 0, satNum: "XIX", orbitCenter: "Jupiter", orbitRadius: 23911000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Isonoe: { name: "Isonoe", radius: 0, mass: 0, satNum: "XXVI", orbitCenter: "Jupiter", orbitRadius: 23078000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Erinome: { name: "Erinome", radius: 0, mass: 0, satNum: "XXV", orbitCenter: "Jupiter", orbitRadius: 23168000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  // Saturn
  Pan: { name: "Pan", radius: 10, mass: 4.54961E+15, satNum: "XVIII", orbitCenter: "Saturn", orbitRadius: 133583, orbitPeriod: 0.58, orbitIncl: 0, orbitEcc: 0, },
  Atlas: { name: "Atlas", radius: 15, mass: 1.24841E+16, satNum: "XV", orbitCenter: "Saturn", orbitRadius: 137670, orbitPeriod: 0.6, orbitIncl: 0, orbitEcc: 0, },
  Prometheus: { name: "Prometheus", radius: 46, mass: 2.70E+17, satNum: "XVI", orbitCenter: "Saturn", orbitRadius: 139350, orbitPeriod: 0.61, orbitIncl: 0, orbitEcc: 0, },
  Pandora: { name: "Pandora", radius: 42, mass: 2.20E+17, satNum: "XVII", orbitCenter: "Saturn", orbitRadius: 141700, orbitPeriod: 0.63, orbitIncl: 0, orbitEcc: 0, },
  Epimetheus: { name: "Epimetheus", radius: 57, mass: 5.60E+17, satNum: "XI", orbitCenter: "Saturn", orbitRadius: 151420, orbitPeriod: 0.69, orbitIncl: 0.34, orbitEcc: 0.01, },
  Janus: { name: "Janus", radius: 89, mass: 2.01E+18, satNum: "X", orbitCenter: "Saturn", orbitRadius: 151470, orbitPeriod: 0.69, orbitIncl: 0.14, orbitEcc: 0.01, },
  Mimas: { name: "Mimas", radius: 199, mass: 3.80E+19, satNum: "I", orbitCenter: "Saturn", orbitRadius: 185540, orbitPeriod: 0.94, orbitIncl: 1.53, orbitEcc: 0.02, },
  Enceladus: { name: "Enceladus", radius: 249, mass: 8.40E+19, satNum: "II", orbitCenter: "Saturn", orbitRadius: 239040, orbitPeriod: 1.37, orbitIncl: 0.02, orbitEcc: 0, },
  Tethys: { name: "Tethys", radius: 530, mass: 7.55E+20, satNum: "III", orbitCenter: "Saturn", orbitRadius: 294670, orbitPeriod: 1.89, orbitIncl: 1.09, orbitEcc: 0, },
  Telesto: { name: "Telesto", radius: 15, mass: 1.53549E+16, satNum: "XIII", orbitCenter: "Saturn", orbitRadius: 294870, orbitPeriod: 1.89, orbitIncl: 0, orbitEcc: 0, },
  Calypso: { name: "Calypso", radius: 13, mass: 9.9955E+15, satNum: "XIV", orbitCenter: "Saturn", orbitRadius: 294870, orbitPeriod: 1.89, orbitIncl: 0, orbitEcc: 0, },
  Dione: { name: "Dione", radius: 560, mass: 1.05E+21, satNum: "IV", orbitCenter: "Saturn", orbitRadius: 377420, orbitPeriod: 2.74, orbitIncl: 0.02, orbitEcc: 0, },
  Helene: { name: "Helene", radius: 16.5, mass: 1.86352E+16, satNum: "XII", orbitCenter: "Saturn", orbitRadius: 377400, orbitPeriod: 2.74, orbitIncl: 0.2, orbitEcc: 0.01, },
  Rhea: { name: "Rhea", radius: 764, mass: 2.49E+21, satNum: "V", orbitCenter: "Saturn", orbitRadius: 527070, orbitPeriod: 4.52, orbitIncl: 0.35, orbitEcc: 0, },
  Titan: { name: "Titan", radius: 2575, mass: 1.35E+23, satNum: "VI", orbitCenter: "Saturn", orbitRadius: 1221860, orbitPeriod: 15.95, orbitIncl: 0.33, orbitEcc: 0.03, },
  Hyperion: { name: "Hyperion", radius: 143, mass: 1.77E+19, satNum: "VII", orbitCenter: "Saturn", orbitRadius: 1481000, orbitPeriod: 21.28, orbitIncl: 0.43, orbitEcc: 0.1, },
  Iapetus: { name: "Iapetus", radius: 718, mass: 1.88E+21, satNum: "VIII", orbitCenter: "Saturn", orbitRadius: 3560800, orbitPeriod: 79.33, orbitIncl: 14.72, orbitEcc: 0.03, },
  Phoebe: { name: "Phoebe", radius: 110, mass: 4.00E+18, satNum: "IX", orbitCenter: "Saturn", orbitRadius: 12954000, orbitPeriod: -550.48, orbitIncl: 175.3, orbitEcc: 0.16, },
  // Uranus
  Cordelia: { name: "Cordelia", radius: 13, mass: 1.39115E+16, satNum: "VI", orbitCenter: "Uranus", orbitRadius: 49752, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Ophelia: { name: "Ophelia", radius: 16, mass: 2.5936E+16, satNum: "VII", orbitCenter: "Uranus", orbitRadius: 53764, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Bianca: { name: "Bianca", radius: 22, mass: 6.74235E+16, satNum: "VIII", orbitCenter: "Uranus", orbitRadius: 59165, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Cressida: { name: "Cressida", radius: 33, mass: 2.27554E+17, satNum: "IX", orbitCenter: "Uranus", orbitRadius: 61767, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Desdemona: { name: "Desdemona", radius: 29, mass: 1.54432E+17, satNum: "X", orbitCenter: "Uranus", orbitRadius: 62659, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Juliet: { name: "Juliet", radius: 42, mass: 4.69128E+17, satNum: "XI", orbitCenter: "Uranus", orbitRadius: 64358, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Portia: { name: "Portia", radius: 55, mass: 1.05349E+18, satNum: "XII", orbitCenter: "Uranus", orbitRadius: 66097, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Rosalind: { name: "Rosalind", radius: 27, mass: 1.24633E+17, satNum: "XIII", orbitCenter: "Uranus", orbitRadius: 69927, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Cupid: { name: "Cupid", radius: 6, mass: 1.36772E+15, satNum: "", orbitCenter: "Uranus", orbitRadius: 75000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Belinda: { name: "Belinda", radius: 34, mass: 2.48874E+17, satNum: "XIV", orbitCenter: "Uranus", orbitRadius: 75255, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Perdita: { name: "Perdita", radius: 40, mass: 4.0525E+17, satNum: "", orbitCenter: "Uranus", orbitRadius: 76000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Puck: { name: "Puck", radius: 77, mass: 2.89078E+18, satNum: "XV", orbitCenter: "Uranus", orbitRadius: 86006, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Mab: { name: "Mab", radius: 8, mass: 3.242E+15, satNum: "", orbitCenter: "Uranus", orbitRadius: 98000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Miranda: { name: "Miranda", radius: 236, mass: 6.30E+19, satNum: "V", orbitCenter: "Uranus", orbitRadius: 129400, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Ariel: { name: "Ariel", radius: 581, mass: 1.35E+21, satNum: "I", orbitCenter: "Uranus", orbitRadius: 191800, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Umbriel: { name: "Umbriel", radius: 585, mass: 1.2E+21, satNum: "II", orbitCenter: "Uranus", orbitRadius: 267200, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Titania: { name: "Titania", radius: 789, mass: 3.526E+21, satNum: "III", orbitCenter: "Uranus", orbitRadius: 438600, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Oberon: { name: "Oberon", radius: 761, mass: 3.014E+21, satNum: "IV", orbitCenter: "Uranus", orbitRadius: 586100, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Francisco: { name: "Francisco", radius: 6, mass: 1.36772E+15, satNum: "", orbitCenter: "Uranus", orbitRadius: 4281000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Caliban: { name: "Caliban", radius: 40, mass: 4.0525E+17, satNum: "", orbitCenter: "Uranus", orbitRadius: 7169000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Stephano: { name: "Stephano", radius: 15, mass: 2.13706E+16, satNum: "", orbitCenter: "Uranus", orbitRadius: 7948000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Trinculo: { name: "Trinculo", radius: 5, mass: 791504697915527, satNum: "", orbitCenter: "Uranus", orbitRadius: 8578000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Sycorax: { name: "Sycorax", radius: 80, mass: 3.242E+18, satNum: "", orbitCenter: "Uranus", orbitRadius: 12213000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Margaret: { name: "Margaret", radius: 6, mass: 1.36772E+15, satNum: "", orbitCenter: "Uranus", orbitRadius: 14689000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Prospero: { name: "Prospero", radius: 20, mass: 5.06563E+16, satNum: "", orbitCenter: "Uranus", orbitRadius: 16568000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Setebos: { name: "Setebos", radius: 20, mass: 5.06563E+16, satNum: "", orbitCenter: "Uranus", orbitRadius: 17681000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Ferdinand: { name: "Ferdinand", radius: 6, mass: 1.36772E+15, satNum: "", orbitCenter: "Uranus", orbitRadius: 21000000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  // Neptune
  Naiad: { name: "Naiad", radius: 29, mass: 2.12132E+17, satNum: "III", orbitCenter: "Neptune", orbitRadius: 48200, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Thalassa: { name: "Thalassa", radius: 40, mass: 5.56663E+17, satNum: "IV", orbitCenter: "Neptune", orbitRadius: 50000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Despina: { name: "Despina", radius: 74, mass: 3.52458E+18, satNum: "V", orbitCenter: "Neptune", orbitRadius: 52600, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Galatea: { name: "Galatea", radius: 79, mass: 4.28838E+18, satNum: "VI", orbitCenter: "Neptune", orbitRadius: 62000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Larissa: { name: "Larissa", radius: 96.5, mass: 7.69531E+18, satNum: "VII", orbitCenter: "Neptune", orbitRadius: 73600, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Proteus: { name: "Proteus", radius: 209, mass: 7.94056E+19, satNum: "VIII", orbitCenter: "Neptune", orbitRadius: 117600, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Triton: { name: "Triton", radius: 1353, mass: 2.14E+22, satNum: "I", orbitCenter: "Neptune", orbitRadius: 353100, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Nereid: { name: "Nereid", radius: 170, mass: 4.27326E+19, satNum: "II", orbitCenter: "Neptune", orbitRadius: 5900000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Halimede: { name: "Halimede", radius: 61, mass: 1.97425E+18, satNum: "", orbitCenter: "Neptune", orbitRadius: 15728000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Sao: { name: "Sao", radius: 40, mass: 5.56663E+17, satNum: "", orbitCenter: "Neptune", orbitRadius: 22422000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Laomedeia: { name: "Laomedeia", radius: 40, mass: 5.56663E+17, satNum: "", orbitCenter: "Neptune", orbitRadius: 23571000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Psamathe: { name: "Psamathe", radius: 38, mass: 4.77269E+17, satNum: "", orbitCenter: "Neptune", orbitRadius: 46695000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  Neso: { name: "Neso", radius: 60, mass: 1.87874E+18, satNum: "", orbitCenter: "Neptune", orbitRadius: 48387000, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
  // Pluto
  Charon: { name: "Charon", radius: 586, mass: 1.52E+21, satNum: "", orbitCenter: "Pluto", orbitRadius: 17500, orbitPeriod: 0, orbitIncl: 0, orbitEcc: 0, },
};

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000000 );
// Camera options.
camera.position.set(0,2,2.5);
// camera.position.set(0,9,0);
camera.lookAt(0,0,0);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor("#222222");
document.body.appendChild( renderer.domElement );
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

var sceneControls = new THREE.OrbitControls(camera, renderer.domElement);

// Stats.js
var stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

// DAT.GUI
var settings = {
  PlanetScale: .5,
  OrbitOpacity: .2,
  TargetPlanet: "Mars",

  effTime: 0,                // the effective effTime to display
  programStartTime: 0,       // the actual time the program started running
  baseTime: 0,               // the actual time that time was unpaused at this current speedMultiplier
  baseEffTime: 0,            // 
  secPerDay: 24*3600,
  speedMultiplier: 0,
  rangeBeginEffTime: 0,
  rangeEndEffTime: 0,

  Date: "",
  PauseTime: false,
  SpeedScale: "Solar System",  // ["Solar System", "Earth Orbits"]
  Speed: "10 Sec/Year",        // ["Real Time", "10 Sec/Year"]
  // SecPerYear: 10,
  StartDate: "Now",
  EndDate: "10 Years",
  DateAdjust: 0.5,
};

function timeToStr(time) {
  let str = new Date(time).toISOString().replace('T',' ').replace(/\.\d+Z$/,'');
  return(str);
}

function initSettings() {
  let now = Date.now();
  let dateStr = timeToStr(now);
  settings.Date = dateStr;
  if (settings.DateControl) settings.DateControl.setValue(dateStr);
  settings.PauseTime = false;
  settings.SpeedScale = "Solar System";  // ["Solar System", "Earth Orbits"]
  settings.Speed = "10 Sec/Year";        // ["Real Time", "10 Sec/Year"]
  // settings.SecPerYear = 10;
  settings.StartDate = "Now";
  settings.EndDate = "10 Years";
  settings.DateAdjust = 0.5;

  settings.programStartTime = now;
  settings.effTime = now;
  settings.baseEffTime = now;
  settings.baseTime = now;
  settings.secPerDay = 24*3600;
  settings.effTimeDays = now / settings.secPerDay / 1000;   // convert ms to days
  let secPerYear = 24*3600*bodyDefs.Earth.orbitPeriod;
  let secPerYearSpeed = 10;
  // console.log("XXX secPerYear [%s] secPerDay [%s] earth.orbitPeriod [%s]", secPerYear, secPerDay, bodyDefs.Earth.orbitPeriod);
  settings.speedMultiplier = secPerYear / secPerYearSpeed;   // TODO: should be based on settings.Speed
  settings.rangeBeginEffTime = now;
  settings.rangeEndEffTime = now + 10*secPerYear*1000;
}

function initGui() {
  // https://github.com/dataarts/dat.gui/blob/master/API.md
  // https://codepen.io/justgooddesign/pen/sbGLC
  // https://www.nowherenearithaca.com/2015/07/datgui-easy-way-to-allow-users-to.html
  var gui = new dat.GUI();
  gui.add(settings, 'PlanetScale', 0, 1);
  gui.add(settings, 'OrbitOpacity', 0, 1);
  gui.add(settings, 'TargetPlanet', bodies).onChange((value) => { console.log("settings.TargetPlanet [%s] [%s]", value, settings.TargetPlanet); });
  var guiSectionDateTime = gui.addFolder('Date/Time');
  settings.DateControl = guiSectionDateTime.add(settings, 'Date').onFinishChange((dateStr) => { onDateAdjustChange(dateStr); });
  guiSectionDateTime.add(settings, 'PauseTime').onChange((paused) => { onPauseTimeChange(paused); });
  // guiSectionDateTime.add(settings, 'SpeedScale', ["Solar System"]);
  guiSectionDateTime.add(settings, 'Speed', ["Real Time", "1 Sec/Year", "4 Sec/Year", "10 Sec/Year", "30 Sec/Year"]).onChange((speedStr) => { onSpeedChange(speedStr); });
  // guiSectionDateTime.add(settings, 'SecPerYear', 0, Math.round(settings.speedMultiplier * 2), 1).onChange((fract) => { onSecPerYearChange(fract); });
  guiSectionDateTime.add(settings, 'StartDate', ['Now']);
  guiSectionDateTime.add(settings, 'EndDate', ['10 Years']);
  settings.DateAdjustControl = guiSectionDateTime.add(settings, 'DateAdjust', 0, 1, .001);
  guiSectionDateTime.open();
}

function updateTime() {
  if (settings.PauseTime) {
    // do nothing
  }
  else {
    let now = Date.now();
    settings.effTime = settings.baseEffTime + (now - settings.baseTime)*settings.speedMultiplier;
    settings.effTimeDays = settings.effTime / settings.secPerDay / 1000;
    settings.DateControl.setValue(timeToStr(settings.effTime));
  }
}
function onDateAdjustChange(effDateStr) {
  let effTime = new Date(effDateStr).valueOf();
  if (effTime) {
    let now = Date.now();
    settings.effTime = effTime;
    settings.effTimeDays = settings.effTime / settings.secPerDay / 1000;
    settings.baseEffTime = settings.effTime;
    settings.baseTime = now;
    let canonicalEffDateStr = timeToStr(effTime);
    if (effDateStr !== canonicalEffDateStr) {
      settings.DateControl.setValue(canonicalEffDateStr);
    }
  }
}
function onSpeedChange(speedStr) {  // multiplier
  let now = Date.now();
  settings.effTime = settings.baseEffTime + (now - settings.baseTime)*settings.speedMultiplier;
  settings.effTimeDays = settings.effTime / settings.secPerDay / 1000;
  settings.baseEffTime = settings.effTime;
  settings.baseTime = now;
  if (settings.rangeBeginEffTime > settings.effTime) settings.rangeBeginEffTime = settings.effTime;
  if (settings.rangeEndEffTime   < settings.effTime) settings.rangeEndEffTime   = settings.effTime;
  settings.DateAdjust = (settings.effTime - settings.rangeBeginEffTime) / (settings.rangeEndEffTime - settings.rangeBeginEffTime);
  settings.DateAdjustControl.updateDisplay();
  let matches;
  if (matches = speedStr.match(/^([\d]+) Sec\/Year$/)) {
    let secPerYearSpeed = parseInt(matches[1], 10);
    let secPerYear = 24*3600*bodyDefs.Earth.orbitPeriod;
    // console.log("XXX secPerYear [%s] secPerDay [%s] earth.orbitPeriod [%s]", secPerYear, secPerDay, bodyDefs.Earth.orbitPeriod);
    settings.speedMultiplier = secPerYear / secPerYearSpeed;   // TODO: should be based on settings.Speed
  }
  else {
    settings.speedMultiplier = 1;
  }
}
function onPauseTimeChange(paused) {
  if (paused) {
    if (settings.rangeBeginEffTime > settings.effTime) settings.rangeBeginEffTime = settings.effTime;
    if (settings.rangeEndEffTime   < settings.effTime) settings.rangeEndEffTime   = settings.effTime;
    settings.DateAdjust = (settings.effTime - settings.rangeBeginEffTime) / (settings.rangeEndEffTime - settings.rangeBeginEffTime);
    settings.DateAdjustControl.updateDisplay();
  }
  else {
    let now = Date.now();
    settings.baseEffTime = settings.effTime;
    settings.baseTime = now;
  }
}

function initScene() {
  let earthMass = bodyDefs.Earth.mass;
  let earthOrbitRadius = bodyDefs.Earth.orbitRadius;
  for (let name in bodyDefs) {
    let body = bodyDefs[name];
    if (!body.mass) body.mass = 0;
    if (!body.radius) body.radius = 0;
    if (!body.orbitRadius) body.orbitRadius = 0;
    body.massMe = body.mass/earthMass;
    body.orbitRadiusAU = body.orbitRadius/earthOrbitRadius;
    body.radiusAU = body.radius/earthOrbitRadius;
    body.radiusScaled = Math.sqrt(Math.sqrt(body.radiusAU));
  }

  // Sun (spotlight).
  var bodyDef = bodyDefs.Sun;
  var sunGeometry = new THREE.SphereGeometry(1, 30, 30);
  var sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
  var sun = new THREE.Mesh(sunGeometry, sunMaterial);
  bodyDef.mesh = sun;

  var sunLight = new THREE.PointLight(0xffffff);  // the sun emits white light
  sunLight.position.set(0, 0, 0);                 // the sun is at the origin
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.camera.near = 500;
  sunLight.shadow.camera.far = 4000;
  sunLight.add(sun);
  sunLight.shadow.camera.fov = 30;
  scene.add(sunLight);

  // Extra lighting.
  var light = new THREE.PointLight( 0xffffff, 0.5, 100 );
  light.position.set(0, 0, 50);
  scene.add( light );

  createBody(bodyDefs.Mercury, scene, 0xaaaaaa);
  createBody(bodyDefs.Venus,   scene, 0xcc9900);
  createBody(bodyDefs.Earth,   scene, 0x0055ff);
  createBody(bodyDefs.Mars,    scene, 0xff3355);
  createBody(bodyDefs.Jupiter, scene, 0xbb6600);
  createBody(bodyDefs.Saturn,  scene, 0xdddd99);
  createBody(bodyDefs.Uranus,  scene, 0xaaffaa);
  createBody(bodyDefs.Neptune, scene, 0xaaccff);

  // Stars.
  var starsGeometry = new THREE.CircleGeometry(0.1, 3);
  starsGeometry.vertices.shift(); // Remove center vertex and all 3 vertices
  starsGeometry.vertices.shift(); // Remove center vertex and all 3 vertices
  starsGeometry.vertices.shift(); // Remove center vertex and all 3 vertices
  starsGeometry.vertices.shift(); // Remove center vertex and all 3 vertices
  let nearestStar = 268770;   // The closest star is 268770 AU away, so discard stars generated randomly that are closer than that
  let farthestStar = 650000;  // This is the farthest star we will model
  for (var p = 0; p < 1000; p++) {
    let x = Math.random() * 2 * farthestStar - farthestStar;
    let y = Math.random() * 2 * farthestStar - farthestStar;
    let z = Math.random() * 2 * farthestStar - farthestStar;
    if (
      (x > -nearestStar && x < nearestStar) &&
      (y > -nearestStar && y < nearestStar) &&
      (z > -nearestStar && z < nearestStar)
    ) {
      // skip this star
    }
    else {
      var starPoint = new THREE.Vector3(x, y, z);
      starsGeometry.vertices.push(starPoint);
    }
  }

  var starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
  var starsMesh = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starsMesh);

  let gltfLoader = new THREE.GLTFLoader();

  // let sunFilename = './assets/sun/scene.gltf';
  // gltfLoader.load(sunFilename, (gltf) => {
  //   console.log("sun", gltf);
  //   gltf.scene.position.set(1,0,1);
  //   let scale = .01;
  //   gltf.scene.scale.set(scale,scale,scale);
  //   scene.add( gltf.scene );
  //   console.log("Asset [%s] loaded", sunFilename);
  // }, undefined, ( error ) => {
  // 	console.error('Asset ['+sunFilename+'] errored on load', error);
  // });

  // let earthFilename = './assets/earth/scene.gltf';
  // gltfLoader.load(earthFilename, (gltf) => {
  //   console.log("earth", gltf);
  //   gltf.scene.position.set(-1,0,1);
  //   let scale = .001;
  //   gltf.scene.scale.set(scale,scale,scale);
  //   scene.add( gltf.scene );
  //   console.log("Asset [%s] loaded", earthFilename);
  // }, undefined, ( error ) => {
  // 	console.error('Asset ['+earthFilename+'] errored on load', error);
  // });
}

function createBody(bodyDef, scene, color) {
  var geometry = new THREE.SphereGeometry(1, 20, 20);
  var material = new THREE.MeshLambertMaterial( { color: color } );
  var mesh = new THREE.Mesh( geometry, material );
  bodyDef.mesh = mesh;
  scene.add(mesh);

  // createCircle(scene, bodyDef.orbitRadiusAU, color);
  let orbitGeometry = new THREE.CircleGeometry(bodyDef.orbitRadiusAU, 60);
  orbitGeometry.vertices.shift(); // Remove center vertex
  let orbitMaterial = new THREE.LineBasicMaterial({color: color, transparent: true, opacity: settings.OrbitOpacity});
  let orbitMesh = new THREE.LineLoop(orbitGeometry, orbitMaterial);  //To get a closed circle use LineLoop instead
  orbitMesh.rotation.x = Math.PI/2;
  bodyDef.orbitMesh = orbitMesh;
  scene.add(orbitMesh);
}
  
//   function createCircle(scene, radius, color) {
//     // console.log("createCircle() radius=[%s] color=[%s]", radius, color);
//     let circleGeometry = new THREE.CircleGeometry(radius, 60);
//     circleGeometry.vertices.shift(); // Remove center vertex
//     let circleMaterial = new THREE.LineBasicMaterial({color: color});
//     let circleMesh = new THREE.LineLoop(circleGeometry, circleMaterial);  //To get a closed circle use LineLoop instead
//     scene.add(circleMesh);
//   }
  
function updateSun(bodyDef) {
  let scaleFactor = settings.PlanetScale;
  let scale = (1-scaleFactor)*bodyDef.radiusAU + scaleFactor*bodyDef.radiusScaled;
  bodyDef.mesh.scale.set(scale, scale, scale);
}

function updateOrbitingBody(bodyDef) {
  let orbits = settings.effTimeDays/bodyDef.orbitPeriod;
  let angle = orbits * 2 * Math.PI;
  let mesh = bodyDef.mesh;
  let orbitRadiusAU = bodyDef.orbitRadiusAU;
  //   if (sec < 5 && bodyDef.name === "Earth") {
  //       console.log("Earth: sec[%s] days[%s] orbits[%s] angle[%s]", sec, days, orbits, angle);
  //   }
  mesh.position.set(-Math.sin(angle) * orbitRadiusAU, 0, -Math.cos(angle) * orbitRadiusAU);
  let scaleFactor = settings.PlanetScale;
  let scale = (1-scaleFactor)*bodyDef.radiusAU + scaleFactor*bodyDef.radiusScaled;
  mesh.scale.set(scale, scale, scale);
  bodyDef.orbitMesh.material.opacity = settings.OrbitOpacity;
}

function animate() {
  requestAnimationFrame(animate);
  stats.begin();
  updateTime();
  updateSun(bodyDefs.Sun);
  for (let name of bodies) {
    updateOrbitingBody(bodyDefs[name]);
  }
  renderer.render(scene, camera);
  stats.end();
}

initSettings();
initGui();
initScene();
animate();
