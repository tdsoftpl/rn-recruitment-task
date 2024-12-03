
import {atom} from 'jotai';



interface Filters {
  gender: any;

  status: string[];

  species: string[];

}



export const filtersAtom = atom<Filters>({

  status: [],

  species: [],

  gender: []  ,

});