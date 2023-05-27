import Expresso from '../assets/images/cups/Type=Expresso.svg';
import Americano from '../assets/images/cups/Type=Americano.svg';
import ExpressoCremoso from '../assets/images/cups/Type=ExpressoCremoso.svg';
import CafeGelado from '../assets/images/cups/Type=CafeGelado.svg';
import CafeComLeite from '../assets/images/cups/Type=CafeComLeite.svg';
import Latte from '../assets/images/cups/Type=Latte.svg';
import Capuccino from '../assets/images/cups/Type=Capuccino.svg';
import Macchiato from '../assets/images/cups/Type=Macchiato.svg';
import Mochaccino from '../assets/images/cups/Type=Mochaccino.svg';
import Irlandes from '../assets/images/cups/Type=Irlandes.svg';
import Havaiano from '../assets/images/cups/Type=Havaiano.svg';
import Cubano from '../assets/images/cups/Type=Cubano.svg';
import Arabe from '../assets/images/cups/Type=Arabe.svg';
import ChocolateQuente from '../assets/images/cups/Type=ChocolateQuente.svg';

export const products = [
  {
    id: 'cof-zxc-001',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['Tradicional'],
    price: 9.9,
    quantity: 1,
    srcImage: Expresso,
  },
  {
    id: 'cof-zxc-002',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['Tradicional'],
    price: 9.9,
    quantity: 1,
    srcImage: Americano,
  },
  {
    id: 'cof-zxc-003',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    type: ['Tradicional'],
    price: 10.99,
    quantity: 1,
    srcImage: ExpressoCremoso,
  },
  {
    id: 'cof-zxc-004',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['Tradicional', 'Gelado'],
    price: 8.9,
    quantity: 1,
    srcImage: CafeGelado,
  },
  {
    id: 'cof-zxc-005',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['Tradicional', 'Com Leite'],
    price: 9.9,
    quantity: 1,
    srcImage: CafeComLeite,
  },
  {
    id: 'cof-zxc-006',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['Tradicional', 'Com Leite'],
    price: 12.99,
    quantity: 1,
    srcImage: Latte,
  },
  {
    id: 'cof-zxc-007',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['Tradicional', 'Com Leite'],
    price: 12.99,
    quantity: 1,
    srcImage: Capuccino,
  },
  {
    id: 'cof-zxc-008',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['Tradicional', 'Com Leite'],
    price: 10.9,
    quantity: 1,
    srcImage: Macchiato,
  },
  {
    id: 'cof-zxc-009',
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['Tradicional', 'Com Leite'],
    price: 14.5,
    quantity: 1,
    srcImage: Mochaccino,
  },
  {
    id: 'cof-zxc-010',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['Especial', 'com leite'],
    price: 12.9,
    quantity: 1,
    srcImage: ChocolateQuente,
  },
  {
    id: 'cof-zxc-011',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['Especial', 'Alcoólico', 'Gelado'],
    price: 10.9,
    quantity: 1,
    srcImage: Cubano,
  },
  {
    id: 'cof-zxc-012',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['Especial'],
    price: 10.99,
    quantity: 1,
    srcImage: Havaiano,
  },
  {
    id: 'cof-zxc-013',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['Especial'],
    price: 10.9,
    quantity: 1,
    srcImage: Arabe,
  },
  {
    id: 'cof-zxc-014',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['Especial', 'Alcoólico'],
    price: 12.9,
    quantity: 1,
    srcImage: Irlandes,
  },
];
