import { CategoryComponent } from './category/category.component';

export interface Product{
  id:number;
  category_id:number;
  name:string,
  price:string;
  description:string,
  image: string,
  link:string,
}

export const products = [
  {
    id:1,
    category_id:1,
    name: 'Минихолодильник М-Cool M6',
    price: '24 000 ₽',
    description: 'Портативный минихолодильник М-Cool M6 для транспортировки термочувствительных лекарств. Поддерживает температуру от +2 до +14 градусов.',
    image:'https://diamarka.com/upload/resize_cache/iblock/900/400_400_140cd750bba9870f18aada2478b24840a/900dc073faee49773f6fa5932f407cd0.jpg',
    link:'https://diamarka.com/termosumki_i_chekhly/minikholodilnik-m-cool-m6/',
  },
  {
    id:2,
    category_id:1,
    name: 'Термочехол для хранения инсулина',
    price: '1 330 ₽',
    description: 'Чехол для хранения инсулина FRIO Large Wallet ( размер 140*180 мм)',
    image:'https://diamarka.com/upload/resize_cache/iblock/fb7/400_400_140cd750bba9870f18aada2478b24840a/fb71ea6b3dbb99ad6d2cc5da7cfa9b82.jpeg',
    link:'https://diamarka.com/termosumki_i_chekhly/termochekhol_dlya_khraneniya_insulina_frio_large_wallet_180_kh_140mm/?oid=19980'
  },
  {
    id:3,
    category_id:1,
    name: 'Термопенал FREEPACK',
    price: '800 ₽',
    description: 'Яркие и стильные термопеналы для активных людей!',
    image:'https://diamarka.com/upload/iblock/302/30213ae465367a9176536997bfd2ab89.jpg',
    link:'https://diamarka.com/diabeticheskie_tovary/termopenal_freepack_oranzhevyy_s_gelevym_paketom/'
  },
  {
    id:4,
    category_id:1,
    name: 'Термо-пенал для шприц-ручек и инсулина',
    price: '490 ₽',
    description: 'Термо-пенал для шприц-ручек и инсулина имеет специальные отделения для хранения: глюкометра, тест-полосок, шприц-ручек, прокалывателя и лекарств.',
    image:'https://diamarka.com/upload/iblock/005/005d2dfdade60f926a50c6386b1ed756.jpg',
    link:'https://diamarka.com/termosumki_i_chekhly/termo-penal-dlya-shprits-ruchek-i-insulina-s-gelevym-paketom-18-kh-10-sm/'

  },
  {
    id:5,
    category_id:1,
    name: 'Сумка-органайзер FRIO Vitesse',
    price: '1 390 ₽',
    description: 'Сумка FRIO Vitesse большая 210*280*110',
    image:'https://diamarka.com/upload/resize_cache/iblock/7b6/400_400_140cd750bba9870f18aada2478b24840a/7b638a8a081a567d1254886445ea9488.jpg',
    link:'https://diamarka.com/termosumki_i_chekhly/sumka-organayzer-frio-vitesse-dlya-perenoski-chekhlov-frio-i-diabeticheskikh-prinadlezhnostey/'
  },
  {
    id:6,
    category_id:1,
    name: 'Термочехол для хранения инсулиновой помпы',
    price: '1 230 ₽',
    description: 'Чехол для хранения инсулиновой помпы FRIO Pump Wallet',
    image:'https://diamarka.com/upload/resize_cache/iblock/fb5/400_400_140cd750bba9870f18aada2478b24840a/fb56b9f00f92507c8537adea84d5931c.jpg',
    link:'https://diamarka.com/termosumki_i_chekhly/chekhol-dlya-khraneniya-insulinovoy-pompy-frio-pump-wallet/?oid=19985'

  },
  {
    id:7,
    category_id:1,
    name: 'Термосумка Dia`s Синий',
    price: '990 ₽',
    description: 'Вместительная термосумка для хранения и транспортировки инсулина, других лекарств и личных вещей.',
    image:'https://diamarka.com/upload/iblock/255/255e0e3945fc2ab3e19718c30289d26d.jpg',
    link:'https://diamarka.com/termosumki_i_chekhly/termosumka_dia_s_siniy/'

  },
  {
    id:8,
    category_id:1,
    name: 'Чехол для хранения инсулина FREEZE',
    price: '1 490 ₽',
    description: 'Встречайте наши стильные и яркие новинки! FREEZE - аналог чехлов для хранения инсулина FRIO.',
    image:'https://diamarka.com/upload/resize_cache/iblock/297/400_400_140cd750bba9870f18aada2478b24840a/297b1e5246edcdb86f61db1a3dcfe6c0.jpg',
    link:'https://diamarka.com/diabeticheskie_tovary/chekhol_dlya_khraneniya_insulina_freeze_large_tropiki_razmer_160_210_mm/'

  },
  {
    id:9,
    category_id:2,
    name: 'Шприц-ручка Autopen Classic',
    price: '1 980 ₽',
    description: 'Шприц-ручка Autopen Classic 3ml 1 Unit',
    image:'https://diamarka.com/upload/resize_cache/iblock/91d/400_400_140cd750bba9870f18aada2478b24840a/91d209db6e4fcf8d132008c834c2aaa6.jpg',
    link:'https://diamarka.com/shprits_ruchki/shprits_ruchka_autopen_classic_3ml_1_unit_shag_1_edinitsa/'

  },
  {
    id:10,
    category_id:2,
    name: 'Шприц-ручка НовоПен 4',
    price: '1 780 ₽',
    description: 'Шприц-ручка НовоПен 4 (NovoPen 4) - продолжение популярной серии ручек Новопен от компании НовоНордиск, создательницы самой распространенной в мире ручки Новопен 3.',
    image:'https://diamarka.com/upload/resize_cache/iblock/257/400_400_140cd750bba9870f18aada2478b24840a/257870cff58e13f9c16dffce0e6b4252.jpg',
    link:'https://diamarka.com/shprits_ruchki/shprits_ruchka_novopen_4/'

  },
  {
    id:11,
    category_id:2,
    name: 'Шприц-ручка ХумаПен Люксура',
    price: '3 400 ₽',
    description: 'Удобная и функциональная шприц ручка ХумаПен Люксура с шагом 1 единица. Шприц-ручка подходит для инсулинов Хумалог, Хумулин, Хумалог Микс.',
    image:'https://diamarka.com/upload/resize_cache/iblock/44d/400_400_140cd750bba9870f18aada2478b24840a/44d936ef67667f5b6635d7efdf5fac67.jpg',
    link:'https://diamarka.com/shprits_ruchki_i_igly/shprits-ruchka-khumapen-lyuksura/'

  },
  {
    id:12,
    category_id:2,
    name: 'Шприц-ручка ХумаПен Люксура ДТ',
    price: '3 600 ₽',
    description: 'удобная и функциональная шприц ручка ХумаПен Люксура ДТ с шагом 0,5 единиц',
    image:'https://diamarka.com/upload/iblock/476/4761ab6ccdaf684c04809b0dbffe04c3.jpg',
    link:'https://diamarka.com/shprits_ruchki_i_igly/shprits-ruchka-khumapen-lyuksura-dt/'

  },
  {
    id:13,
    category_id:2,
    name: 'Шприц-ручка Autopen Classic 3ml 2 Unit',
    price: '2 120 ₽',
    description: 'Шприц-ручка Autopen Classic 3ml 2 Unit',
    image:'https://apollo-frankfurt.akamaized.net/v1/files/w9uzscfb8ufh3-KZ/image;s=1000x700',
    link:'https://diamarka.com/shprits_ruchki_i_igly/shprits_ruchka_autopen_classic_3ml_2_unit_shag_2_edinitsy/'

  },
  {
    id:14,
    category_id:2,
    name: 'Шприц ручка ХумаПен Саввио',
    price: '3 500 ₽',
    description: 'Шприц-ручка ХумаПен Саввио (зеленая)',
    image:'https://diamarka.com/upload/resize_cache/iblock/b1d/400_400_140cd750bba9870f18aada2478b24840a/b1d1f6f096c17623f43458a7344d836b.png',
    link:'https://diamarka.com/shprits_ruchki_i_igly/shprits-ruchka-khumapen-savvio-zelyenaya-humapen-savvio-shag-1-ed/'

  },
  {
    id:15,
    category_id:2,
    name: 'Шприц ручка ХумаПен Саввио',
    price: '3 500 ₽',
    description: 'Шприц-ручка ХумаПен Саввио (красная)',
    image:'https://diamarka.com/upload/resize_cache/iblock/c40/400_400_140cd750bba9870f18aada2478b24840a/c4002e5c39b0cd32c5946953de57e673.png',
    link:'https://diamarka.com/shprits_ruchki_i_igly/shprits-ruchka-khumapen-savvio-krasnaya-humapen-savvio-shag-1-ed/'

  },
  {
    id:16,
    category_id:3,
    name:'Таблетки от гипогликемии Dextro4 ',
    price:'250 ₽',
    description:'Конфеты таблетированные Dextro4 - самый быстрый способ борьбы с гипогликемией, так как купируют гипогликемию, быстрее чем традиционные продукты на основе обыкновенного сахара.',
    image:'https://diamarka.com/upload/resize_cache/iblock/b6c/400_400_140cd750bba9870f18aada2478b24840a/b6cbe6470900fd23da1cf37a36743d98.jpg',
    link:'https://diamarka.com/sredstva_pri_gipoglikemii/tabletki-ot-gipoglikemii-dextro4-klassicheskiy-36-tab-/'
  },
  {
    id:17,
    category_id:3,
    name:'Таблетки от гипогликемии Dextro4 КЛУБНИКА',
    price:'250 ₽',
    description:'Конфеты таблетированные Dextro4 самый быстрый и правильный способ борьбы с гипогликемией.Декстроза всасывается уже в ротовой полости и моментально действует',
    image:'https://diamarka.com/upload/resize_cache/iblock/6fc/400_400_140cd750bba9870f18aada2478b24840a/6fc9245829bacb80a56079a77a62c3d7.jpg',
    link:'https://diamarka.com/sredstva_pri_gipoglikemii/tabletki-ot-gipoglikemii-dextro4-klubnika-36-tab-/'
  },
  {
    id:18,
    category_id:3,
    name:'Гель HYPOFREE 1 ХЕ АПЕЛЬСИН',
    price:'330 ₽',
    description:'НОВИНКА! Попробуйте новые гели с апельсиновым вкусом по 1ХЕ в тубе.',
    image:'https://diamarka.com/upload/resize_cache/iblock/049/400_400_140cd750bba9870f18aada2478b24840a/04938cb87be2bece8839e2141247cbe1.jpg',
    link:'https://diamarka.com/sredstva_pri_gipoglikemii/gel-hypofree-1-khe-apelsin-10-tub/'
  },
  {
    id:19,
    category_id:3,
    name:'Таблетки от гипогликемии ГипоХит ЧЕРНИКА',
    price:'680 ₽',
    description:'Таблетки от гипогликемии ГипоХит ЧЕРНИКА шоу-бокс, 100 шт.',
    image:'https://diamarka.com/upload/resize_cache/iblock/c32/400_400_140cd750bba9870f18aada2478b24840a/c320a2739842faf29fa2d8e09d485193.jpg',
    link:'https://diamarka.com/sredstva_pri_gipoglikemii/tabletki-ot-gipoglikemii-gipokhit-chernika-shou-boks-100-sht/'
  },
  {
    id:20,
    category_id:3,
    name:'Напиток фруктовый HYPOFREE,(1ХЕ) ВИШНЯ',
    price:'340 ₽',
    description:'Напиток фруктовый HYPOFREE,(1ХЕ) ВИШНЯ, 10 туб',
    image:'https://diamarka.com/upload/resize_cache/iblock/734/400_400_140cd750bba9870f18aada2478b24840a/73442a7a2d3b1ef42ab8a0579e205bfd.jpg',
    link:'https://diamarka.com/sredstva_pri_gipoglikemii/napitok-fruktovyy-hypofree-1khe-vishnya-10-tub/'
  },
  {
    id:21,
    category_id:3,
    name:'Конфеты таблетированные HYPOFREE ',
    price:'280 ₽',
    description:'Купируйте гипогликемию быстро и точно вместе с конфетами на основе декстрозы от Гипофри!',
    image:'https://diamarka.com/upload/resize_cache/iblock/e60/400_400_140cd750bba9870f18aada2478b24840a/e60f9413364d49061a52ca78931bd14e.jpeg',
    link:'https://diamarka.com/novinki/konfety_tabletirovannye_hypofree_54_sht_3_tuby_po_18sht_apelsin/'
  },
  {
    id:22,
    category_id:3,
    name:'Печенье "Кокосовое" низкоуглеводное',
    price:'325 ₽',
    description:'Хрустящее, рассыпчатое, ароматное, вкусное и сверх НИЗКОУГЛЕВОДНОЕ печенье. Любители сладенького - налетай!:)',
    image:'https://diamarka.com/upload/iblock/f72/f72bf4103f8bc768ad70928b4b3a4337.jpg',
    link:'https://diamarka.com/batonchiki_i_pechene/pechene_kokosovoe_nizkouglevodnoe_200gr/'
  },
  {
    id:23,
    category_id:4,
    name:'Глюкометр Сателлит-Экспресс',
    price:'1 450 ₽',
    description:'Глюкометр САТЕЛЛИТ ЭКСПРЕСС ПКГ-03',
    image:'https://diamarka.com/upload/iblock/106/10695dbf27334116c90636b66796be8b.jpg',
    link:'https://diamarka.com/glyukometry_satellit/glyukometr-satellit-ekspress/'
  },
  {
    id:24,
    category_id:4,
    name:'Глюкометр Акку-Чек Перформа ',
    price:'750 ₽',
    description:'Глюкометр Акку-Чек Перформа',
    image:'https://diamarka.com/upload/resize_cache/iblock/c13/400_400_140cd750bba9870f18aada2478b24840a/c132f316e21350d5b8be9e12d0b6c82e.jpg',
    link:'https://diamarka.com/glyukometry/glyukometr-akku-chek-performa-accu-chek-performa/'
  },
  {
    id:25,
    category_id:4,
    name:'Глюкометр Диаконт говорящий',
    price:'950 ₽',
    description:'Глюкометр Говорящий Диаконт (Diacont Voice)',
    image:'https://diamarka.com/upload/resize_cache/iblock/4b6/400_400_140cd750bba9870f18aada2478b24840a/4b6c4935930c7dce9cf0570add51c0a6.jpg',
    link:'https://diamarka.com/glyukometry/glyukometr-govoryashchiy-diakont-diacont-voice/'
  },
  {
    id:26,
    category_id:4,
    name:'Глюкометр Диаконт Мини',
    price:'715 ₽',
    description:'Глюкометр Диаконт Мини (Diacont) - новый маленький глюкометр для любимых тест-полосок.',
    image:'https://diamarka.com/upload/iblock/587/587d5769cc5db405fa51ecfedcc8f84b.jpg',
    link:'https://diamarka.com/glyukometry/glyukometr-diakont-mini-diacont/'
  },
  {
    id:27,
    category_id:4,
    name:'Глюкометр Контур Плюс',
    price:'490 ₽',
    description:'Собираетесь купить глюкометр «Контур Плюс» от Ascensia Diabetes Care Holdings AG?Рекомендуем присмотреться к акции и получить глюкометр Contour Plus',
    image:'https://diamarka.com/upload/resize_cache/iblock/d2a/400_400_140cd750bba9870f18aada2478b24840a/d2ac38d8a0a4302d630e14e5456e602c.jpg',
    link:'https://diamarka.com/glyukometry_contour/glyukometr-kontur-plyus-contour-plus/'
  },
  {
    id:28,
    category_id:4,
    name:'Система мониторирования глюкозы iPro2',
    price:'113 590 ₽',
    description:'Система мониторирования глюкозы iPro2 ММТ-7745',
    image:'https://diamarka.com/upload/iblock/594/594a6f2903570ed206d8b8b6d994e9be.jpg',
    link:'https://diamarka.com/monitoring_glyukozy/sistema-monitorirovaniya-glyukozy-ipro2-mmt-7745/'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/