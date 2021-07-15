class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementPosition(){
    this.titleImg.position(120,160);
    this.input.position(width/2 -110, height/2 -80);
    this.playButton.position(width/2-90, height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }

  setElementStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customFont");
    this.playButton.class("customFont");
    this.greeting.class("greeting");
  }

}
