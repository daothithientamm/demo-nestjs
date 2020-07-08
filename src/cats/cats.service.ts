import { Injectable} from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string) {
    const cat = this.cats.find(x => x.id === id);
    return cat;
  }
  updateOne(id:string, data: Object) {
   const catIndex =  this.cats.findIndex(x => x.id === id);
   if(catIndex !== -1) this.cats[catIndex] = {...this.cats[catIndex], ...data}
  }
}
