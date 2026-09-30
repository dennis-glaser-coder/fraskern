const square2z = [
  [1,3,4,50],[1.5,5,4,50],[2,6,4,50],[2.5,8,4,50],[3,9,3,50],[3,9,4,50],
  [3.5,11,4,50],[4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[7,20,8,60],
  [8,20,8,60],[9,25,10,75],[10,25,10,75],[11,25,12,75],[12,30,12,75],
  [14,45,14,100],[15,45,16,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const square4z = [
  [1,3,4,50],[1.5,5,4,50],[2,6,4,50],[2.5,8,4,50],[3,9,3,50],[3,9,4,50],
  [3.5,11,4,50],[4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[7,20,8,60],
  [8,20,8,60],[8,24,8,60],[9,25,10,75],[10,25,10,75],[10,30,10,75],
  [11,30,12,75],[12,30,12,75],[12,35,12,75],[13,45,14,100],[14,45,14,100],
  [15,45,16,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const hrc65 = [
  [1,3,4,50],[1.5,4,4,50],[2,6,4,50],[2.5,8,4,50],[3,8,3,50],[3,8,4,50],
  [3.5,10,4,50],[4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[7,20,8,60],
  [8,20,8,60],[9,25,10,75],[10,25,10,75],[11,30,12,75],[12,30,12,75],
  [14,45,14,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const alu2z = [
  [1,3,4,50],[1.5,5,4,50],[2,6,4,50],[2.5,8,4,50],[3,9,3,50],[3,9,4,50],
  [3.5,11,4,50],[4,12,4,50],[5,15,5,50],[5,15,6,50],[6,18,6,50],[7,24,8,60],
  [8,24,8,60],[10,30,10,75],[11,35,12,75],[12,35,12,75],[14,45,14,100],
  [16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const rough = [
  [4,12,4,50],[5,13,5,50],[5,13,6,50],[6,15,6,50],[8,20,8,60],[10,25,10,75],
  [12,30,12,75],[14,45,14,100],[16,45,16,100],[18,45,18,100],[20,45,20,100],
].map(([diameter,cuttingLength,shank,overall])=>({diameter,cuttingLength,shank,overall}))

const ball = [
  [0.5,2,4,50],[0.75,3,4,50],[1,4,4,50],[1.25,5,4,50],[1.5,6,3,50],[1.5,6,4,50],
  [1.75,7,4,50],[2,8,4,50],[2.5,10,5,50],[2.5,10,6,50],[3,12,6,50],
  [3.5,14,8,60],[4,16,8,60],[5,20,10,75],[6,24,12,75],[7,28,14,100],
  [8,32,16,100],[9,36,18,100],[10,40,20,100],
].map(([radius,cuttingLength,shank,overall])=>({radius,diameter:radius*2,cuttingLength,shank,overall}))

const corner = [
  [2,.2,6,4,50],[2,.5,6,4,50],[2.5,.2,8,4,50],[2.5,.5,8,4,50],
  [3,.2,9,4,50],[3,.5,9,4,50],[3.5,.5,11,4,50],[4,.2,10,4,50],[4,.5,10,4,50],
  [5,.5,13,5,50],[5,.5,13,6,50],[5,1,13,6,50],[6,.2,15,6,50],[6,.5,15,6,50],
  [6,1,15,6,50],[8,.5,20,8,60],[8,1,20,8,60],[8,2,20,8,60],
  [10,.5,25,10,75],[10,1,25,10,75],[10,2,25,10,75],[10,3,25,10,75],
  [12,.5,30,12,75],[12,1,30,12,75],[12,2,30,12,75],[12,3,30,12,75],
].map(([diameter,radius,cuttingLength,shank,overall])=>({diameter,radius,cuttingLength,shank,overall}))

const images = {
  h45_2z:'https://image.made-in-china.com/202f0j00OIFvbDuhbTqf/Handerk-High-Performance-Cutting-Tools-Keyway-End-Mill-HRC45-Milling-Cutter.webp',
  h45_4z:'https://image.made-in-china.com/202f0j00luZvEQcFZjkP/Handerk-HRC45-4flute-CNC-Router-Bits-Cemented-Carbide-Flat-End-Mill-Fir-Cutting-Tool.webp',
  h45_ball:'https://image.made-in-china.com/2f0j00GHfMcYqUVRbo/Handerk-Good-Wear-Resistance-Ball-Nose-End-Mill-45HRC-Cutting-Tools.jpg',
  h45_corner:'https://image.made-in-china.com/2f0j00WLbCFZonLUkf/Handerk-Solid-Carbide-End-Mill-4-Flute-Cutting-Tools-Corner-Raidus-End-Mill-HRC45.jpg',
  copper:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A8%E7%B2%97%E7%9A%AE%E5%88%80.png',
  hard:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%92%A2%E7%94%A865%E5%B9%B3%E5%88%80-1.png',
  alu:'https://hdktools.com/wp-content/uploads/2025/02/%E4%B8%BB%E9%A1%B5%E4%BA%A7%E5%93%81%E8%BD%AE%E6%92%AD%E2%80%94%E9%93%9D%E7%94%A8%E4%B8%83%E5%BD%A9%E7%90%83%E5%88%80-1.png',
}

export const products = [
  {
    id:'h45-2z-standard', name:'VHM Schaftfräser HRC45 2Z', series:'HRC45', shape:'Schaftfräser',
    flutes:2, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_2z, brandMask:true, variants:square2z,
    description:'2-schneidiger VHM-Schaftfräser für Stahl und Guss. Standardlänge, 35° Drall.',
  },
  {
    id:'h45-4z-standard', name:'VHM Schaftfräser HRC45 4Z', series:'HRC45', shape:'Schaftfräser',
    flutes:4, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_4z, brandMask:true, variants:square4z,
    description:'4-schneidiger VHM-Schaftfräser für Stahl und Guss. Standardlänge, universelle Geometrie.',
  },
  {
    id:'h45-ball-standard', name:'VHM Kugelfräser HRC45 2Z', series:'HRC45', shape:'Kugelfräser',
    flutes:2, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_ball, brandMask:true, variants:ball,
    description:'VHM-Kugelfräser für Konturen, 3D-Bearbeitung und Schlichtoperationen.',
  },
  {
    id:'h45-corner-standard', name:'VHM Torusfräser HRC45 4Z', series:'HRC45', shape:'Torusfräser',
    flutes:4, coating:'AlTiN', materials:['Stahl','Guss'], image:images.h45_corner, brandMask:true, variants:corner,
    description:'VHM-Torusfräser mit Eckenradius für stabile Kanten und universelle Bearbeitung.',
  },
  {
    id:'h55-2z-standard', name:'VHM Schaftfräser TiSiN HRC55 2Z', series:'HRC55', shape:'Schaftfräser',
    flutes:2, coating:'TiSiN', materials:['Stahl','Guss'], image:images.copper, variants:square2z,
    description:'TiSiN-beschichteter 2-Schneider für Stahl und Guss mit hoher Temperatur- und Verschleißbeständigkeit.',
  },
  {
    id:'h65-4z-standard', name:'VHM Hochleistungsfräser HRC65 4Z', series:'HRC65', shape:'Schaftfräser',
    flutes:4, coating:'High Performance', materials:['Hochfeste Stähle','Edelstahl','Guss'], image:images.hard, variants:hrc65,
    description:'4-schneidiger Hochleistungsfräser mit 45° Drall für harte und wärmebehandelte Stähle.',
  },
  {
    id:'alu-2z-standard', name:'VHM Aluminiumfräser 2Z', series:'AL', shape:'Aluminiumfräser',
    flutes:2, coating:'polierte Schneiden', materials:['Aluminium','NE-Metalle'], image:images.alu, variants:alu2z,
    description:'2-schneidiger VHM-Fräser mit großen Spanräumen für Aluminium und NE-Metalle.',
  },
  {
    id:'rough-standard', name:'VHM Schruppfräser TiSiN', series:'HRC55', shape:'Schruppfräser',
    flutes:4, coating:'TiSiN', materials:['Stahl','Guss'], image:images.copper, variants:rough,
    description:'VHM-Schruppfräser für hohen Materialabtrag in Stahl und Guss.',
  },
]
