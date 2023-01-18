import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    document.querySelector("#emojis").innerHTML="";
    let fmonkeys = this.addBananas();
    //foreach the loop and it is ready
    fmonkeys.forEach(fmonkeys =>{
      let p = document.createElement("p")
      p.textContent=fmonkeys;
      document.querySelector('#emojis').append(p);
    });
  }

  addBananas() {
    let monkeys = ["🐵", "🐵", "🐵"];
    let feededMonkeys = monkeys.map((monkey)=>{
      return monkey + "🍌";
    });
    return feededMonkeys;
  }
}
