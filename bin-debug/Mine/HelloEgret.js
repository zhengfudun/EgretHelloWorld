var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HelloEgret = (function (_super) {
    __extends(HelloEgret, _super);
    function HelloEgret() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddStage, _this);
        return _this;
    }
    HelloEgret.prototype.onAddStage = function (event) {
        this.init();
    };
    HelloEgret.prototype.init = function () {
        var txt = new egret.TextField();
        this.addChild(txt);
        txt.size = 60;
        txt.textColor = 0x00ff00;
        txt.text = "HelloWorld";
        txt.x = 200;
        txt.y = 200;
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.x = this.stage.stageWidth / 2;
        shape.y = this.stage.stageHeight / 2;
        shape.graphics.lineStyle(1, 0x666666);
        shape.graphics.moveTo(0, 0);
        var R = 300; //半径
        var N = 7; //边
        for (var i = 1; i <= 360; i++) {
            var len = R * Math.sin(N * i);
            var tx = Math.cos(i) * len;
            var ty = Math.sin(i) * len;
            shape.graphics.lineTo(tx, ty);
        }
    };
    return HelloEgret;
}(egret.DisplayObjectContainer));
__reflect(HelloEgret.prototype, "HelloEgret");
//# sourceMappingURL=HelloEgret.js.map