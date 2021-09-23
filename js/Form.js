class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter your name")
    this.playbutton=createButton("PLAY")
    this.titleimage=createImg("assets/title.png","Game title")
    this.greeting=createElement("h2")
     
  }
  setElementsPositions(){
   this.titleimage.position(120,100)
   this.input.position(width/2-110,height/2-80)
   this.playbutton.position(width/2-90,height/2-20)
   this.greeting.position(width/2-300,height/2-100)
     
  }
  hide(){
    this.input.hide()
    this.playbutton.hide()
    this.greeting.hide()

  } 
  handleMousePressed(){
   this.playbutton(()=>{
     this.input.hide()
     this.playbutton.hide()
     var message=`.hello ${this.input.value()}wait for another player to join`
     this.greeting.html()
   })
    

  }  
   display(){
     this.setElementsPositions();
     this.handleMousePressed();
   }
  

}
