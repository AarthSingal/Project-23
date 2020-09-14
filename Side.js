class Side {
    constructor(x,y,width,height){
        var side_options = {
            isStatic : true 
        }
        this.Side  = Bodies.rectangle(x,y,width,height,side_options);
        this.width = width;
        this.height = height;

        World.add(world,this.side);

    }

    display(){
        rectMode(CENTER);

        rect(this.side.position.x,this.side.position.y,this.width,this.height);
    }

} 