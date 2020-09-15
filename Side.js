class Side {
    constructor(x,y,width,height){
        var side_options = {
            isStatic : true 
        }
        this.side  = Bodies.rectangle(x,y,width,height,side_options);
        this.width = width;
        this.height = height;

        World.add(world,this.side);

    }

    display(){
        rectMode(CENTER);
        fill("red");

        rect(this.side.position.x,this.side.position.y,this.width,this.height);
    }

} 