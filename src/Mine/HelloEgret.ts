class HelloEgret extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddStage,this);
	}

	private onAddStage(event:egret.Event):void{
		this.init();
	}

	private init():void{
		var txt:egret.TextField=new egret.TextField();
		this.addChild(txt);
		txt.size=60;
		txt.textColor=0x00ff00;
		txt.text="HelloWorld";
		txt.x=200;
		txt.y=200;

		var shape:egret.Shape=new egret.Shape();
		this.addChild(shape);
		shape.x=this.stage.stageWidth/2;
		shape.y=this.stage.stageHeight/2;
		shape.graphics.lineStyle(1,0x666666);
		shape.graphics.moveTo(0,0);
		var R:number=300;//半径
		var N:number=7;//边
		for(var i:number=1;i<=360;i++)
		{//公式a*sin(n*angle)
			var len:number=R*Math.sin(N*i);
			var tx:number=Math.cos(i)*len;
			var ty:number=Math.sin(i)*len;
			shape.graphics.lineTo(tx,ty);
		}
	}
}