class MainMenu{
    constructor(){
        this.levelState = 0
        this.tutorial;

        this.menu = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)
        this.menuImg = loadImage("MainMenu/menu.jpg")
        this.menu.addImage(this.menuImg)

        this.lvl1button = createSprite(windowWidth / 6.5, windowHeight / 4, windowWidth / 12, windowWidth / 12)
        this.lvl1button.visible = false
        this.lvl1Img = loadImage("MainMenu/lvl1Img.png")
        this.lvl1button.addImage(this.lvl1Img)

        this.dysoTxt = createSprite(windowWidth / 2, windowHeight / 3, 200, 200)
        this.txtImg = loadImage("MainMenu/startText.png")
        this.dysoTxt.addImage(this.txtImg)
        this.dysoTxt.scale = 1

        this.playButton = createSprite(windowWidth / 2, windowHeight / 1.3, windowWidth / 6, windowHeight / 8)
        this.playButton.shapeColor = "red"
        this.playImg = loadImage("MainMenu/playB.png")
        this.playButton.addImage(this.playImg)
        this.playButton.scale = 1

        this.lvlButton = createSprite(windowWidth / 1.3, windowHeight / 1.25, windowWidth / 10, windowHeight / 8)
        this.menuImg = loadImage("MainMenu/menuImg.png")
        this.lvlButton.addImage(this.menuImg)
        this.lvlButton.scale = 1

    }

    play(){

        if(spriteTouched(this.playButton,  windowWidth / 6, windowHeight / 8) || spriteTouched(this.lvl1button,  windowWidth / 12, windowWidth / 12) && this.lvl1button.visible == true){
            levelState = 1
            this.menu.visible = false
            this.playButton.visible = false
            this.lvlButton.visible = false
            this.lvl1button.visible = false
            this.tutorial = new lvl1
            this.dysoTxt.visible = false
        }


        if(spriteTouched(this.lvlButton, windowWidth / 10, windowHeight / 8)){
            // this.menu.visible = false
            this.playButton.visible = false
            this.lvlButton.visible = false
            this.lvl1button.visible = true
            this.dysoTxt.visible = false
         }

        if(levelState == 1){
            this.tutorial.play()
            this.tutorial.end()
        }

        if(levelState == 0){
            this.tutorial = null

            this.menu.visible = true
            this.playButton.visible = true
            this.lvlButton.visible = true
            this.lvl1button.visible = false
            this.dysoTxt.visible = true

            camera.position.x = windowWidth / 2

        }

        if(levelState == 2){
            this.tutorial = null
        }
    }
}

function spriteTouched(sprite, sWidth, sHeight){
    this.l1x = sprite.x - sWidth / 2
    this.l2x = sprite.x + sWidth / 2
    this.l1y = sprite.y - sHeight / 2
    this.l2y = sprite.y + sHeight / 2


    if(touches.length == 1 || touches.length == 2){
        for(let touch of touches){

            if(touch.x > this.l1x && touch.x < this.l2x && touch.y > this.l1y && touch.y < this.l2y){
                return true
            }else{
                return false
            }
        }
    }
}