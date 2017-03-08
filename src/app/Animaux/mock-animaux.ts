import { Animal } from './animal';

export const ANIMAUX:Animal[] =[
  {
    id:1,
    type:'chien',
    nom:'Lennon',
    race:'Shar-Pei',
    sexe:'mâle',
    picture:"http://ruedusharpei.free.fr/Chronique/Pourquoi/Shao9-08-03g.jpg",
    note:[19],
    date_de_naissance:new Date()
  },
  {
    id:2,
    type:'chat',
    nom:'Kwiskas',
    race:'siamois',
    sexe:'femelle',
    picture:"https://static.wamiz.fr/images/animaux/chats/large/siamois.jpg",
    note:[13],
    date_de_naissance:new Date()
  }
];
