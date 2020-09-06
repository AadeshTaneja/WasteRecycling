class Dustbin {
   
    constructor(x,y){


        this.y = y
        this.x = x
        this.width = 200
        this.height = 100
        this.thickness = 20  
        
    
        

        this.leftbody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
        this.bottombody = Bodies.rectangle(this.x,this.y,this.thickness,this.height,{isStatic:true});
        this.rightbody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true});
        World.add(world,this.rightbody);
        World.add(world,this.bottombody);
        World.add(world,this.leftbody)
        
        
    }

    display(){
 
        var lpos = this.leftbody.position
        var rpos = this.rightbody.position
        var bpos = this.bottombody.position
          
        
       
        
        
        push()
        
        fill("red")
        strokeWeight(3)
        stroke("green")
        rect(lpos.x,lpos.y,this.thickness,this.height);
        pop()
        
        
        push()
        translate(rpos.x,rpos.y);
        fill("red")
        strokeWeight(3)
        stroke("green")
        rect(0,0,this.thickness,this.height)
        pop()
        
        
        
        push()
        translate(bpos.x,bpos.y);
        fill("red")
        strokeWeight(3)
        stroke("green")
        rect(0,0,this.width+20,this.thickness);
        pop()





    }



















}