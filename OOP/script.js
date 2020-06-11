class Animal {
  constructor(name,color,type) {
    this.name=name;
    this.color=color;
    this.type="Animal";
  }
}

class cow extends Animal {
  constructor(name,color,type) {
    super(name,color,type);
  }

  sound = () => {console.log(`helloooo my name is ${this.name+"mooo"} and my color is ${this.color+"mooo"} and my type is ${this.type+"mooo"}`)};
}

const cow1 = new cow("bakra","black");
