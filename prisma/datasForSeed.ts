import { Resource } from './prismaTypes';

export const resourceTypeDatas = [
  { name: 'Enmatter' },
  { name: 'Refined Enmatter' },
  { name: 'Ore' },
  { name: 'Refined Ore' },
];

export const oresRefinedDatas: Omit<Resource, 'resourceTypeId' | 'id'>[] = [
  { name: 'Alternative Rock', value: 0.01, imageUrlId: '3732' },
  { name: 'Adomasite Ingot', value: 1.8, imageUrlId: '1731' },
  { name: 'Alferix Ingot', value: 2.85, imageUrlId: '1500' },
  { name: 'Azzurdite Ingot', value: 3.06, imageUrlId: '1501' },
  { name: 'Belkar Ingot', value: 0.06, imageUrlId: '1502' },
  { name: 'Blausariam Ingot', value: 0.12, imageUrlId: '1503' },
  { name: 'Caldorite Ingot', value: 0.51, imageUrlId: '1504' },
  { name: 'Cobalt Ingot', value: 0.6, imageUrlId: '1505' },
  { name: 'Copper Ingot', value: 0.48, imageUrlId: '1506' },
  { name: 'Cumbriz Ingot', value: 0.45, imageUrlId: '1507' },
  { name: 'Dianum Ingot', value: 3.75, imageUrlId: '1509' },
  { name: 'Durulium Ingot', value: 2.4, imageUrlId: '1510' },
  { name: 'Erdorium Ingot', value: 0.24, imageUrlId: '1511' },
  { name: 'Erionite Ingot', value: 0.6, imageUrlId: '3232' },
  { name: 'Frigulite Ingot', value: 0.36, imageUrlId: '1512' },
  { name: 'Ganganite Ingot', value: 0.36, imageUrlId: '1513' },
  { name: 'Gazzurdite Ingot', value: 0.75, imageUrlId: '1514' },
  { name: 'Gold Ingot', value: 3, imageUrlId: '1515' },
  { name: 'Himi Ingot', value: 0.426, imageUrlId: '1949' },
  { name: 'Hansidian Ingot', value: 0.03, imageUrlId: '1720' },
  { name: 'Ignisium Ingot', value: 0.21, imageUrlId: '1516' },
  { name: 'Iolite Ingot', value: 0.6, imageUrlId: '3234' },
  { name: 'Iron Ingot', value: 0.36, imageUrlId: '1517' },
  { name: 'Kanerium Ingot', value: 7.5, imageUrlId: '929' },
  { name: 'Kirtz Ingot', value: 16.8, imageUrlId: '1519' },
  { name: 'Langotz Ingot', value: 2.7, imageUrlId: '1520' },
  { name: 'Lanorium Ingot', value: 0.66, imageUrlId: '1521' },
  { name: 'Lysterium Ingot', value: 0.03, imageUrlId: '1522' },
  { name: 'Maganite Ingot', value: 3.06, imageUrlId: '1523' },
  { name: 'Megan Ingot', value: 0.54, imageUrlId: '1524' },
  { name: 'Morpheus Ingot', value: 2.49, imageUrlId: '1967' },
  { name: 'Narcanisum Ingot', value: 0.24, imageUrlId: '1525' },
  { name: 'Niksarium Ingot', value: 1.98, imageUrlId: '1526' },
  { name: 'Petonium Ingot', value: 5.37, imageUrlId: '1527' },
  { name: 'Platinum Ingot', value: 9, imageUrlId: '1908' },
  { name: 'Pyrite Ingot', value: 0.6, imageUrlId: '3236' },
  { name: 'Quantium Ingot', value: 1.8, imageUrlId: '1528' },
  { name: 'Redulite Ingot', value: 6.6, imageUrlId: '2846' },
  { name: 'Rugaritz Ingot', value: 4.5, imageUrlId: '1529' },
  { name: 'Terrudite Ingot', value: 3.3, imageUrlId: '1530' },
  { name: 'Tridenite Ingot', value: 6, imageUrlId: '2309' },
  { name: 'Valurite Ingot', value: 18, imageUrlId: '1531' },
  { name: 'Vesperdite Ingot', value: 5.4, imageUrlId: '2845' },
  { name: 'Xemerite Ingot', value: 12, imageUrlId: '1909' },
  { name: 'Zanderium Ingot', value: 7.5, imageUrlId: '3050' },
  { name: 'Zinc Ingot', value: 0.3, imageUrlId: '1532' },
];
export const oresDatas: Omit<Resource, 'resourceTypeId' | 'id'>[] = [
  { name: 'Adomasite Stone', value: 0.6, imageUrlId: '1818' },
  { name: 'Alferix Stone', value: 0.95, imageUrlId: '1637' },
  { name: 'Azzurdite Stone', value: 1.02, imageUrlId: '1381' },
  { name: 'Belkar Stone', value: 0.02, imageUrlId: '1545' },
  { name: 'Blausariam Stone', value: 0.04, imageUrlId: '1546' },
  { name: 'Caldorite Stone', value: 0.17, imageUrlId: '1543' },
  { name: 'Cobalt Stone', value: 0.2, imageUrlId: '1638' },
  { name: 'Copper Stone', value: 0.16, imageUrlId: '1554' },
  { name: 'Cumbriz Stone', value: 0.15, imageUrlId: '1550' },
  { name: 'Dianum Ore', value: 1.25, imageUrlId: '1952' },
  { name: 'Durulium Stone', value: 0.8, imageUrlId: '1548' },
  { name: 'Erdorium Stone', value: 0.4, imageUrlId: '1636' },
  { name: 'Erionite Stone', value: 0.2, imageUrlId: '3231' },
  { name: 'Frigulite Stone', value: 0.12, imageUrlId: '1951' },
  { name: 'Ganganite Stone', value: 0.12, imageUrlId: '1257' },
  { name: 'Gazzurdite Stone', value: 0.25, imageUrlId: '1544' },
  { name: 'Gold Stone', value: 1, imageUrlId: '1553' },
  { name: 'Hansidian Rock', value: 0.01, imageUrlId: '1719' },
  { name: 'Himi Rock', value: 0.142, imageUrlId: '2308' },
  { name: 'Ignisium Stone', value: 0.7, imageUrlId: '1549' },
  { name: 'Iolite Stone', value: 0.2, imageUrlId: '3233' },
  { name: 'Iron Stone', value: 0.13, imageUrlId: '1541' },
  { name: 'Kanerium Ore', value: 2.5, imageUrlId: '1541' },
  { name: 'Kirtz Stone', value: 5.6, imageUrlId: '1817' },
  { name: 'Langotz Stone', value: 0.9, imageUrlId: '1552' },
  { name: 'Lanorium Stone', value: 0.22, imageUrlId: '1273' },
  { name: 'Lysterium Stone', value: 0.01, imageUrlId: '1540' },
  { name: 'Maganite Ore', value: 1.05, imageUrlId: '1539' },
  { name: 'Megan Stone', value: 0.18, imageUrlId: '1542' },
  { name: 'Morpheus Stone', value: 0.83, imageUrlId: '1966' },
  { name: 'Narcanisum Stone', value: 0.08, imageUrlId: '1556' },
  { name: 'Niksarium Stone', value: 0.65, imageUrlId: '1551' },
  { name: 'Petonium Stone', value: 1.79, imageUrlId: '1256' },
  { name: 'Platinum Stone', value: 3, imageUrlId: '1950' },
  { name: 'Pyrite Stone', value: 0.2, imageUrlId: '3235' },
  { name: 'Quantium Stone', value: 0.6, imageUrlId: '1639' },
  { name: 'Redulite Ore', value: 2.2, imageUrlId: '2848' },
  { name: 'Rugaritz Ore', value: 1.5, imageUrlId: '3235' },
  { name: 'Terrudite Stone', value: 1.1, imageUrlId: '1555' },
  { name: 'Tridenite Ore', value: 2, imageUrlId: '2655' },
  { name: 'Valurite Stone', value: 6, imageUrlId: '1640' },
  { name: 'Vesperdite Ore', value: 1.8, imageUrlId: '2844' },
  { name: 'Xemerite Ore', value: 4, imageUrlId: '2567' },
  { name: 'Zanderium Ore', value: 2.5, imageUrlId: '2696' },
  { name: 'Zinc Stone', value: 0.1, imageUrlId: '1547' },
];
export const enmatterRefinedDatas: Omit<Resource, 'resourceTypeId' | 'id'>[] = [
  { name: 'Root Acid', value: 1.28, imageUrlId: '1276' },
  { name: 'Alicenies Gel', value: 0.1, imageUrlId: '1373' },
  { name: 'Angelic Flakes', value: 1, imageUrlId: '364' },
  { name: 'Light Mail', value: 0.02, imageUrlId: '1902' },
  { name: 'Ares Powder', value: 0.52, imageUrlId: '1375' },
  { name: 'Pearl Sand', value: 1.92, imageUrlId: '1252' },
  { name: 'Binary Energy', value: 1.5, imageUrlId: '1177' },
  { name: 'Medical Compress', value: 0.18, imageUrlId: '1819' },
  { name: 'Putty', value: 0.78, imageUrlId: '1277' },
  { name: 'Oil', value: 0.02, imageUrlId: '371' },
  { name: 'Dianthus Crystal Powder', value: 0.6, imageUrlId: '3205' },
  { name: 'Dunkel Plastix', value: 1.1, imageUrlId: '1656' },
  { name: 'Energized Crystal Cell', value: 0.6, imageUrlId: '3206' },
  { name: 'Antimagnetic Oil', value: 2, imageUrlId: '1903' },
  { name: 'File Root Pellet', value: 0.6, imageUrlId: '3204' },
  { name: 'Garcen Lubricant', value: 0.2, imageUrlId: '1227' },
  { name: 'Henren Cube', value: 1.26, imageUrlId: '2693' },
  { name: 'Light Liquid', value: 0.84, imageUrlId: '1498' },
  { name: 'Lytairian Powder', value: 0.38, imageUrlId: '950' },
  { name: 'Magerian Spray', value: 0.5, imageUrlId: '1660' },
  { name: 'Melchi Crystal', value: 0.04, imageUrlId: '1904' },
  { name: 'Chalmon', value: 1.56, imageUrlId: '1730' },
  { name: 'Typonolic Gas', value: 0.3, imageUrlId: '1662' },
  { name: 'Inhaler', value: 0.8, imageUrlId: '1901' },
];
export const enmatterDatas: Omit<Resource, 'resourceTypeId' | 'id'>[] = [
  { name: 'Acid Root', value: 0.64, imageUrlId: '1271' },
  { name: 'Alicenies Liquid', value: 0.05, imageUrlId: '368' },
  { name: 'Angelic Grit', value: 0.5, imageUrlId: '707' },
  { name: 'Angel Scales', value: 0.01, imageUrlId: '1900' },
  { name: 'Ares Head', value: 0.26, imageUrlId: '708' },
  { name: 'Azur Pearl', value: 0.96, imageUrlId: '1255' },
  { name: 'Binary Fluid', value: 0.75, imageUrlId: '1392' },
  { name: 'Blood Moss', value: 0.09, imageUrlId: '1820' },
  { name: 'Cave Sap', value: 0.39, imageUrlId: '1270' },
  { name: 'Crude Oil', value: 0.01, imageUrlId: '395' },
  { name: 'Dianthus Liquid', value: 0.3, imageUrlId: '3202' },
  { name: 'Dunkel Particle', value: 0.55, imageUrlId: '3526' },
  { name: 'Energized Crystal', value: 0.3, imageUrlId: '3203' },
  { name: 'Ferrum Nuts', value: 1, imageUrlId: '1965' },
  { name: 'File Root Globule', value: 0.3, imageUrlId: '3230' },
  { name: 'Garcen Grease', value: 0.1, imageUrlId: '699' },
  { name: 'Henren Stems', value: 0.63, imageUrlId: '2697' },
  { name: 'Lumis Leach', value: 0.42, imageUrlId: '1488' },
  { name: 'Lytairian Dust', value: 0.19, imageUrlId: '949' },
  { name: 'Magerian Mist', value: 0.25, imageUrlId: '526' },
  { name: 'Melchi Water', value: 0.02, imageUrlId: '706' },
  { name: 'Solis Bean', value: 0.78, imageUrlId: '2044' },
  { name: 'Typonolic Steam', value: 0.15, imageUrlId: '1254' },
  { name: 'Vegetation Spores', value: 0.4, imageUrlId: '2307' },
];
