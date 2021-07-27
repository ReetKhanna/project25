class Paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		
		this.image=loadImage("paper.png")
		
		
		

		this.body=Bodies.rectangle(this.x,this.y,50,50)
		
		World.add(world, this.body)
		

	}
	display()
	{
			var position=this.body.position

			

			push()
			translate(position.x, position.y);
			imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,0,0,50,50);
			pop()

			
			
	}

}