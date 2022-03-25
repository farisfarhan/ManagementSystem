export class User{
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public gender: string;
    public NRIC: string;
    public address: string;
    public postCode: string;
    public state: string;
}
interface userInterface{
    id: string;
  }

  const employee: userInterface = {
      id: 'husijso'
  }

  class employer implements userInterface{
      id: string

      constructor(id){
        this.id = id
      }
  }

  const emplyer1 = new employer('ahmad');
  console.log(emplyer1);