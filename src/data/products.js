import heroCatalog from '../catalog/hero.js'
import universalCatalog from '../catalog/universal.js'
import roughingCatalog from '../catalog/roughing.js'

export const products = [
  {
    id: 'fk-universal-4z',
    name: 'FRÄSKERN Universal 4Z',
    subtitle: 'VHM-Schaftfräser · Universalserie',
    flutes: '4 Schneiden',
    coating: 'beschichtet',
    materials: ['Stahl', 'Guss'],
    badge: 'UNIVERSAL',
    image: universalCatalog,
  },
  {
    id: 'fk-hard-4z',
    name: 'FRÄSKERN Hard 4Z',
    subtitle: 'VHM-Hochleistungsfräser · HRC-Serie',
    flutes: '4 Schneiden',
    coating: 'Hochleistungsbeschichtung',
    materials: ['hochfeste Stähle', 'Edelstahl'],
    badge: 'HRC',
    image: heroCatalog,
  },
  {
    id: 'fk-alu',
    name: 'FRÄSKERN Alu',
    subtitle: 'VHM-Fräser · Aluminiumserie',
    flutes: '2 / 3 Schneiden',
    coating: 'polierte Schneiden',
    materials: ['Aluminium', 'NE-Metalle'],
    badge: 'ALU',
    image: universalCatalog,
  },
  {
    id: 'fk-rough',
    name: 'FRÄSKERN Rough',
    subtitle: 'VHM-Schruppfräser',
    flutes: 'Schruppgeometrie',
    coating: 'TiSiN-Serie',
    materials: ['Stahl', 'Guss'],
    badge: 'SCHRUPPEN',
    image: roughingCatalog,
  },
]
