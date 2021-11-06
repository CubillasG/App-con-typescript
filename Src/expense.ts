interface ExpensesItems{
    id: number,
    titulo: string,
    costo: precio,
}
interface precio{
    numero: number,
    divisa: divisa,
}
interface IExpenses{
    expenses: ArrayList<ExpensesItems>,
    finalDivisa: divisa,
    add(item:ExpensesItems): boolean,
    get(): ExpensesItems | null,
    getTotal():string,
    remove(id:number):boolean,

}
type divisa = 'Peso' | 'Usd'

class ArrayList<T>{
    private items: T[];
     constructor(){
         this.items = [];
     }
     add (item:T){
         this.items.push(item)


     }
    get (index:number): T|null {
        const item:T[] = this.items.filter((x:T , i:number)=>{
            return i == index;

        });
        if(item.length == 0){
            return null
        }else{
            return item[0]
        }
    }

     createFrom(value:T[]):void{
         this.items = [...value];
         
     }   
     getAll():T[]{
         return this.items
     }
    }

class Expenses {

}