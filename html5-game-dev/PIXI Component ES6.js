/**
 * Author **
 */

import { Sprite, Texture, Point, AnimatedSprite } from "pixi.js";
import Brain from "../../Brain";

//PLUGINS
import tweenManager from "pixi-tween";

//COMPONENTS
import Component from "./Component.js";

export default class Entity extends Sprite {
	constructor(index) {
		//const texture = Texture.fromImage(asset);
		super();

		//COMPONENT
		this.component = new Component();
		this.component.anchor.set(0.5);
		this.component.x = 0;
		this.component.y = 0 + 10;
		this.component.visible = false;
		this.component.interactive = false;
		this.component(this.component);

		//SPRITE
		this.sprite = new PIXI.Sprite(texture);
		this.sprite.anchor.set(0.5);
		this.sprite.x = 0;
		this.sprite.y = 0;
		this.sprite.visible = true;
		this.sprite.interactive = false;
		this.addChild(this.sprite);

		//TEXT
		var style = new PIXI.TextStyle({
			fontFamily: "Arial",
			fontSize: 16,
			fontStyle: "italic",
			fontWeight: "bold",
			fill: ["#ffffff", "#99CCFF"],
			stroke: "#000000",
			strokeThickness: 4,

			wordWrap: true,
			wordWrapWidth: 440,
			align: "center"
		});

		let text = new PIXI.Text("text", style);
		text.anchor.set(0.5);
		text.x += 0;
		text.y += 40;
		text.rotation = 0;
		text.alpha = 1;
		this.addChild(text);

		//EVENTS
		this.on("pointerdown", onClick);
		this.on("pointerover", onOver);
		this.on("pointerout", onOut);

		function onOver() {
			text.alpha = 1;
		}
		function onOut() {
			text.alpha = 0;
		}

		function onClick() {
			console.log("SOMEONE CLICKED ME!");
		}
	}

	someFunction(param) {
		console.log(param);
	}

	update(mousepos) {
		//const { x, y } = mousepos;
	}
}
