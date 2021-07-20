var touchedSprite

class lvl1{
    constructor(){

        this.level1Group = createGroup()

        this.px = mouseX
        this.py = mouseY

        this.w = windowWidth
        this.h = windowHeight

        //Bools
        this.touchGround = true
        this.continueStory = true
        this.storylineBool = true
        this.gameState = true
        this.dislayGO = false
        this.passed = false
        this.checkAnimation = false
        this.pauzeSwitch = false
        this.pauzed = false

        this.cameraPlus = 0
        this.leftcameraPlus = 0
        this.storylinePart = 0

        this.bg = loadImage("lvl1/Bg.png")
        this.storyp1 = loadImage("lvl1/Speeches/Speech1.png")
        this.storyp2 = loadImage("lvl1/Speeches/Speech2.png")
        this.storyp3 = loadImage("lvl1/Speeches/Speech3.png")
        this.storyp4 = loadImage("lvl1/Speeches/Speech4.png")
        this.storyp5 = loadImage("lvl1/Speeches/Speech5.png")
        this.storyp6 = loadImage("lvl1/Speeches/Speech6.png")
        this.storyp7 = loadImage("lvl1/Speeches/Speech7.png")

        this.panimation = loadAnimation("lvl1/Dyso/Move/red/r1.png", "lvl1/Dyso/Move/red/r2.png", "lvl1/Dyso/Move/red/r3.png", "lvl1/Dyso/Move/red/r4.png", "lvl1/Dyso/Move/red/r5.png", "lvl1/Dyso/Move/red/r6.png", "lvl1/Dyso/Move/red/r7.png", "lvl1/Dyso/Move/red/r8.png")
        this.pidle = loadAnimation("lvl1/Dyso/Move/red/Idle.png")
        this.pdeath = loadAnimation("lvl1/Dyso/Other/d1.png", "lvl1/Dyso/Other/d2.png", "lvl1/Dyso/Other/d3.png", "lvl1/Dyso/Other/d4.png", "lvl1/Dyso/Other/d5.png", "lvl1/Dyso/Other/d6.png", "lvl1/Dyso/Other/d7.png", "lvl1/Dyso/Other/d8.png", "lvl1/Dyso/Other/d9.png", "lvl1/Dyso/Other/d10.png")
        this.pdeath.looping = false
        this.pjump = loadAnimation("lvl1/Dyso/Move/red/j1.png", "lvl1/Dyso/Move/red/j2.png", "lvl1/Dyso/Move/red/j3.png", "lvl1/Dyso/Move/red/j4.png", "lvl1/Dyso/Move/red/j5.png", "lvl1/Dyso/Move/red/j6.png", "lvl1/Dyso/Move/red/j7.png", "lvl1/Dyso/Move/red/j8.png", "lvl1/Dyso/Move/red/j9.png", "lvl1/Dyso/Move/red/j10.png")

        this.moveInstruct = loadImage("lvl1/AD to move.png")
        this.moveInVis = 0

        this.jumpInstruct = loadImage("lvl1/Spacebar to jump.png")
        this.jumpInVis = 0


        this.p1 = new Platform(this.w / 3.46, this.h / 1.15, 730, 100)
        this.p2 = new Platform(this.w / 1.47, this.h / 1.15, 160, 100)
        this.p3 = new Platform(this.w / 1.17, this.h / 1.18, 155, 150)
        this.p4 = new Platform(this.w / 1.025, this.h / 1.18, 35, 150)
        this.p5 = new Platform(this.w / 0.825, this.h / 1.18, 455, 150)
        this.p6 = new Platform(this.w / 0.6863, this.h / 1.17, 35, 150)
        this.p7 = new Platform(this.w / 0.6336, this.h / 1.28, 140, 40)
        this.p8 = new Platform(this.w / 0.5791, this.h / 1.28, 140, 40)
        this.p9 = new Platform(this.w / 0.5435, this.h / 1.17, 35, 150)
        this.p10 = new Platform(this.w / 0.5245, this.h / 1.3, 25, 25)
        this.p11 = new Platform(this.w / 0.5081, this.h / 1.3, 25, 25)
        this.p12 = new Platform(this.w / 0.4932, this.h / 1.27, 35, 100)
        this.p13 = new Platform(this.w / 0.4735, this.h / 1.47, 140, 40)
        this.p14 = new Platform(this.w / 0.4556, this.h / 1.27, 35, 100)
        this.p15 = new Platform(this.w / 0.4280, this.h / 1.32, 140, 40)
        this.p16 = new Platform(this.w / 0.3993, this.h / 1.32, 140, 40)
        this.p17 = new Platform(this.w / 0.3820, this.h / 1.2, 35, 150)
        this.p18 = new Platform(this.w / 0.3720, this.h / 1.23, 35, 30)
        this.p19 = new Platform(this.w / 0.3585, this.h / 1.32, 140, 40)
        this.p20 = new Platform(this.w / 0.3468, this.h / 1.45, 35, 30)
        this.p21 = new Platform(this.w / 0.3395, this.h / 1.63, 35, 30)
        this.p22 = new Platform(this.w / 0.3328, this.h / 1.9, 35, 30)
        this.p23 = new Platform(this.w / 0.3137, this.h / 1.9, 325, 40)



        this.ground = createSprite(this.w / 2, this.h - this.h / 20, this.w, this.h / 10)
        this.ground.visible = false
        


        this.groundCollider = createSprite(this.w * 0.5, this.h - this.h / 20 - 3, this.w, this.h / 10)
        this.groundCollider.visible = false
        


        this.leftCollider = createSprite(windowWidth / 6, this.h / 2, windowWidth / 3.06, this.h)
        this.leftCollider.visible = false
        



        this.lWall = createSprite(-1 * windowWidth / 6.5, this.h, this.w / 3, this.h)
        this.lWall.visible = false

        

        collidergroup.add(this.groundCollider)
        tgroup.add(this.ground)

        this.player = new Plr(this.w / 25.6, this.h / 1.309, this.pidle, this.panimation, this.pjump, this.pdeath)
        

        this.storylineBg = createSprite(this.w / 2, this.h / 2, this.w, this.h)
        this.storylineBg.visible = false
        

        this.storyline = createSprite(this.w / 2 - this.w / 15  , this.h - this.h / 2.3, this.w, this.h / 2)
        this.storyline.scale = 2.7

        

        this.gyo1 = new Enemy(this.w / 0.853, this.h / 1.45)
        this.gyo2 = new Enemy(this.w / 0.512, this.h / 1.45)
        this.gyo3 = new Enemy(this.w / 0.449, this.h / 1.7)

        

        this.camX = windowWidth

        this.screen = createSprite(camera.position.x, this.h / 2, this.w, this.h)
        this.screen.shapeColor = "black"
        this.screen.visible = false
        
        
        this.GO = createSprite(this.w / 2, this.h / 3, 20, 20)
        this.GOimg = loadImage("lvl1/GO.png")
        this.GO.visible = false
        this.GO.addImage(this.GOimg)
        

        this.retry = createSprite(this.w / 2, this.h / 1.6, 20, 20)
        this.retryImg = loadImage("lvl1/retry.png")
        this.retry.addImage(this.retryImg)
        this.retry.visible = false
        this.retry.scale = 0.4
        

        this.pointer = createSprite(50, this.h / 1.3, 20, 20)
        this.pImg = loadImage("lvl1/pointer.png")
        this.pointer.addImage(this.pImg)
        this.pointer.visible = false
        

        

        this.ob1 = createSprite(760, 640, 50, 50)
        this.ob2 = createSprite(980, 640, 50, 50)
        this.ob3 = createSprite(1195, 640, 50, 50)
        this.ob4 = createSprite(1300, 640, 50, 50)
        this.ob5 = createSprite(1810, 640, 50, 50)
        this.ob6 = createSprite(2120, 650, 460, 50)
        this.ob7 = createSprite(2850, 650, 970, 50)
        this.ob8 = createSprite(3565, 500, 40, 40)
        this.ob9 = createSprite(3990, 350, 40, 40)


        
        this.ob1.visible = false
        this.ob2.visible = false
        this.ob3.visible = false
        this.ob4.visible = false
        this.ob5.visible = false
        this.ob6.visible = false
        this.ob7.visible = false
        this.ob8.visible = false
        this.ob9.visible = false


        obgroup.add(this.ob1)
        obgroup.add(this.ob2)
        obgroup.add(this.ob3)
        obgroup.add(this.ob4)
        obgroup.add(this.ob5)
        obgroup.add(this.ob6)
        obgroup.add(this.ob7)
        obgroup.add(this.ob8)
        obgroup.add(this.ob9)

        this.portal = createSprite(4180, 315, 20, 20)
        this.portal.scale = 0.3
        this.portalAni = loadAnimation("portal/0.png", "portal/1.png", "portal/2.png", "portal/3.png", "portal/4.png", "portal/5.png", "portal/6.png", "portal/7.png")
        this.portal.addAnimation("looping", this.portalAni)
        this.portal.animation.frameDelay = 1
        this.portal.depth = 1
        this.portal.setCollider("circle", 0, 0, 30)

        camera.position.x = windowWidth / 2
        camera.position.y = windowHeight / 2

        //UI
        this.lImg = loadImage("left.png")
        this.leftMove = createSprite(60, 647.5, 90, 90)
        this.l1x = this.leftMove.x - this.leftMove.width * 1.5 / 2
        this.l2x = this.leftMove.x + this.leftMove.width * 1.5 / 2
        this.l1y = this.leftMove.y - this.leftMove.height * 1.5 / 2
        this.l2y = this.leftMove.y + this.leftMove.height * 1.5 / 2
        this.leftMove.scale = 1.5
        this.leftMove.addImage(this.lImg)
        

        this.rImg = loadImage("right.png")
        this.rightMove = createSprite(160, 647.5, 90, 90)
        this.r1x = this.rightMove.x - this.rightMove.width * 1.5 / 2
        this.r2x = this.rightMove.x + this.rightMove.width * 1.5 / 2
        this.r1y = this.rightMove.y - this.rightMove.height * 1.5 / 2
        this.r2y = this.rightMove.y + this.rightMove.height * 1.5 / 2
        this.rightMove.scale = 1.5
        this.rightMove.addImage(this.rImg)
        

        this.jImg = loadImage("up.png")
        this.jumpMove = createSprite(this.w / 2 + this.camX / 2.2, 647.5, 90, 90)
        this.u1x = this.jumpMove.x - this.jumpMove.width * 1.5 / 2
        this.u2x = this.jumpMove.x + this.jumpMove.width * 1.5 / 2
        this.u1y = this.jumpMove.y - this.jumpMove.height * 1.5 / 2
        this.u2y = this.jumpMove.y + this.jumpMove.height * 1.5 / 2
        this.jumpMove.scale = 1.5
        this.jumpMove.addImage(this.jImg)
        

        this.pauze = createSprite(this.w / 1.03, this.h / 18, 50, 50)
        this.pauzeUp = loadImage("lvl1/pauzeUp.png")
        this.pauze.addImage(this.pauzeUp)
        this.pauze.scale = 1.2

        this.lSprite = createSprite(this.w / 2.5, this.h / 1.55, 70, 50)
        this.lSprite.visible = false
        this.y1x = this.lSprite.x - this.lSprite.width / 2
        this.y2x = this.lSprite.x + this.lSprite.width / 2
        this.y1y = this.lSprite.y - this.lSprite.height / 2
        this.y2y = this.lSprite.y + this.lSprite.height / 2

        this.rSprite = createSprite(this.w / 1.7, this.h / 1.55, 70, 50)
        this.rSprite.visible = false
        this.n1x = this.rSprite.x - this.rSprite.width / 2
        this.n2x = this.rSprite.x + this.rSprite.width / 2
        this.n1y = this.rSprite.y - this.rSprite.height / 2
        this.n2y = this.rSprite.y + this.rSprite.height / 2

        this.pauzeScreen = createSprite(camera.position.x, camera.position.y, windowWidth, this.h)
        this.pauzeScreen.shapeColor = 'rgba(10, 10, 10, 0.7)'
        this.pauzeScreen.visible = false
        this.pauzeScreen.depth = 20

        this.pauzeMImg = loadImage("PauzeMenu.png")
        this.pauzeMenu = createSprite(windowWidth / 2, windowHeight / 2, this.w / 2.5, this.h / 2.5)
        this.pauzeMenu.addImage(this.pauzeMImg)
        this.pauzeMenu.scale = 1.3
        this.pauzeMenu.visible = false
        this.pauzeMenu.depth = 21

        this.resume = createSprite(windowWidth / 2, windowHeight / 1.75, this.w / 7.5294, this.h / 9.4736)
        this.resumeImg = loadImage("resumeB.png")
        this.resume.addImage(this.resumeImg)
        this.resume.visible = false

        this.home = createSprite(windowWidth / 2.8, windowHeight / 1.75, this.w / 18.2857, this.h / 9.4736)
        this.homeImg = loadImage("homeB.png")
        this.home.addImage(this.homeImg)
        this.home.visible = false

        this.settings = createSprite(windowWidth / 1.55, windowHeight / 1.75, this.w / 18.2857, this.h / 9.4736)
        this.settingsImg = loadImage("settingsB.png")
        this.settings.addImage(this.settingsImg)
        this.settings.visible = false


        //level1 group
        this.level1Group.add(this.player.plr)
        this.level1Group.add(this.storylineBg)
        this.level1Group.add(this.storyline)
        this.level1Group.add(this.gyo1.gyo)
        this.level1Group.add(this.gyo2.gyo)
        this.level1Group.add(this.gyo3.gyo)
        this.level1Group.add(this.screen)
        this.level1Group.add(this.GO)
        this.level1Group.add(this.retry)
        this.level1Group.add(this.pointer)
        this.level1Group.add(this.lWall)
        this.level1Group.add(this.ground)
        this.level1Group.add(this.p1.sprite, this.p2.sprite, this.p3.sprite, this.p4.sprite, this.p5.sprite, this.p6.sprite, this.p7.sprite, this.p8.sprite, this.p9.sprite, this.p10.sprite, this.p11.sprite, this.p12.sprite, this.p13.sprite, this.p14.sprite, this.p15.sprite, this.p16.sprite, this.p17.sprite, this.p18.sprite, this.p19.sprite,this.p20.sprite, this.p21.sprite, this.p22.sprite, this.p23.sprite)
        this.level1Group.add(this.groundCollider)
        this.level1Group.add(this.leftCollider)
        this.level1Group.add(this.ob1, this.ob2, this.ob3, this.ob4, this.ob5, this.ob6, this.ob7, this.ob8, this.ob9)
        this.level1Group.add(this.leftMove)
        this.level1Group.add(this.rightMove)
        this.level1Group.add(this.jumpMove)
        this.level1Group.add(this.pauze)
        this.level1Group.add(this.lSprite, this.rSprite)
        this.level1Group.add(this.portal)

    }


    play(){
        this.player.plr.collide(tgroup)
        this.ground.x = camera.position.x
        this.groundCollider.x = camera.position.x
        this.w = camera.position.x  + this.camX / 2
        this.lSprite.x = camera.position.x - this.camX / 10
        this.rSprite.x = camera.position.x + this.camX / 10
        this.leftMove.x = camera.position.x - this.camX / 2.2
        this.rightMove.x = camera.position.x - this.camX / 2.8
        this.jumpMove.x = camera.position.x + this.camX / 2.2
        this.pauze.x = camera.position.x  + this.camX / 2.13
        this.pauzeScreen.x = camera.position.x
        this.resume.x = camera.position.x
        this.home.x = camera.position.x + this.camX / 2.8 / 2.15
        this.settings.x = camera.position.x - this.camX / 1.55 / 4
        // this.pauze.x = camera.position.x + this.camX / 1.03 / 2

    


        this.player.plr.collide(this.lWall)


        if(this.player.plr.isTouching(obgroup)){
            this.player.plr.changeAnimation("death", this.pdeath)
            this.player.plr.animation.play()
            this.checkAnimation = true
            this.player.plr.velocityY = 5
        }

        if(this.checkAnimation){
            if(this.player.plr.animation.getFrame() == this.player.plr.animation.getLastFrame()){
                

                setTimeout(() => {
                    this.displayGO = true
                    this.player.plr.animation.rewind()
                }, 300)
                
            }
        }

        if(this.player.plr.isTouching(this.portal)){
            this.passed = true
        }

        image(this.bg, 0, 0, 5000, this.h)

        if(this.gameState){

            this.gyo1.move(windowWidth / 0.9481, 1780)
            this.gyo2.move(windowWidth / 0.6918, 2350)
            this.gyo3.move(windowWidth / 0.4923, 2825)

            this.screen.visible = false
            this.GO.visible = false
            this.retry.visible = false


        if(this.storylineBool){

            this.player.plr.visible = false
            this.leftMove.visible = false
            this.rightMove.visible = false
            this.jumpMove.visible = false

            if(keyIsDown(32) && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false
            }
            
            if(touches.length > 0 && this.continueStory && levelState == 0){
                this.storylinePart += 1
                this.continueStory = false   
            }

            if(touches.length == 0){
                this.continueStory = true
            }

            if(keyWentUp(32) || mouseWentDown("leftButton")){
                this.continueStory = true
            }
    
            if(this.storylinePart == 0){
                this.storyline.addImage(this.storyp1)
                this.storyline.y + 30
            }else if(this.storylinePart == 1){
                this.storyline.addImage(this.storyp2)
            }else if(this.storylinePart == 2){
                this.storyline.addImage(this.storyp3)
                this.storyline.y - 90
            }else if(this.storylinePart == 3){
                this.storyline.addImage(this.storyp4)
            }else if(this.storylinePart == 4){
                this.storyline.addImage(this.storyp5)
            }else if(this.storylinePart == 5){
                this.storyline.addImage(this.storyp6)
            }else if(this.storylinePart == 6){
                this.storyline.addImage(this.storyp7)
            }else if(this.storylinePart > 6){
                this.storyline.destroy()
                this.storylineBool = false
            }

        }else{

            this.player.plr.visible = true
            this.leftMove.visible = true
            this.rightMove.visible = true
            this.jumpMove.visible = true

            this.checkAnimation = false
            this.displayGO = false

            if(collidergroup.isTouching(this.player.plr)){
                this.touchGround = true
            }

            if(obgroup.isTouching(this.player.plr)){
                  this.gameState = false
            }
              
              this.gyo1.collision(this.player.plr)
              this.gyo2.collision(this.player.plr)
              //this.testGyo.collision(this.player.plr)

            if(this.pauzed == false){

                this.leftMove.visible = true
                this.rightMove.visible = true
                this.jumpMove.visible = true
                this.pauzeScreen.visible = false
                

                if(keyDown("LEFT_ARROW") || keyDown(65)){
                    this.player.plr.x -= 8
                    this.player.plr.changeAnimation("run", panimation)
                    this.player.plr.mirrorX(-1)
                    camera.position.x -= this.leftcameraPlus
                }else if(keyDown("RIGHT_ARROW") || keyDown(68)){
                    this.player.plr.x += 8
                    this.player.plr.changeAnimation("run", panimation)
                    this.player.plr.mirrorX(1)
                    camera.position.x += this.cameraPlus
                }else if(keyDown("UP_ARROW") && this.touchGround && this.player.plr.isTouching(tgroup) == false|| keyDown(32) && this.touchGround && this.player.plr.isTouching(tgroup) == false){
                    this.player.plr.velocityY = -12
                    this.touchGround = false
                    this.player.plr.changeAnimation("jump", pjump)
                }else if(touches.length == 0){
                    this.player.plr.changeAnimation("idle", pidle)
                    this.player.plr.setCollider("rectangle", 0, 0, 15, 35)
                }

                if(touches.length == 1 || touches.length == 2){
                    for(let touch of touches){

                        if(touch.x > this.l1x && touch.x < this.l2x && touch.y > this.l1y && touch.y < this.l2y){
                            this.player.plr.x -= 8
                            this.player.plr.changeAnimation("run", panimation)
                            this.player.plr.mirrorX(-1)
                            this.player.plr.setCollider("rectangle", 0, 0, 30, 30)
                            camera.position.x -= this.leftcameraPlus
                        }else if(touch.x > this.r1x && touch.x < this.r2x && touch.y > this.r1y && touch.y < this.r2y){
                            this.player.plr.x += 8
                            this.player.plr.changeAnimation("run", panimation)
                            this.player.plr.mirrorX(1)
                            this.player.plr.setCollider("rectangle", 0, 0, 30, 30)
                            camera.position.x += this.cameraPlus
                        }else if(touch.x > this.u1x && touch.x < this.u2x && touch.y > this.u1y && touch.y < this.u2y  && this.touchGround && this.player.plr.isTouching(tgroup) == false){
                            this.player.plr.velocityY = -12
                            this.touchGround = false
                            this.player.plr.changeAnimation("jump", pjump)
                        }else if(touches.length == 0){
                            this.player.plr.changeAnimation("idle", pidle)
                            this.player.plr.setCollider("rectangle", 0, 0, 20, 30)
                        }

                        if(touch.x > this.pauze.x - this.pauze.width / 2 && touch.x < this.pauze.x + this.pauze.width && touch.y > this.pauze.y - this.pauze.height && touch.y < this.pauze.y + this.pauze.height){
                            this.pauzed = true
                    	    this.pauze.visible = false
                        }


                        if(this.gameState == false){
                            if(this.displayGO){ 
                                if(touch.x > this.y1x && touch.x < this.y2x && touch.y > this.y1y && touch.y < this.y2y){
                                    this.gameState = true
                                    camera.position.x = this.camX / 2
                                    this.player.plr.x = 50
                                    this.player.plr.y = 530
                
                                    this.screen.visible = false
                                    this.GO.visible = false
                                    this.retry.visible = false
                
                                    this.lSprite.visible = false
                                    this.rSprite.visible = false
                
                                    this.moveInVis = 0
                
                                    this.gyo1.move(1150, 1500)
                                    this.gyo1.startOver()
                
                                    this.gyo2.move(1600, 2000)
                                    this.gyo2.startOver()

                                    this.player.plr.animation.goToFrame(0)
                
                                    camera.position.x = windowWidth / 2
                                    camera.position.y = windowHeight / 2
                                    
                                }else if(touch.x > this.n1x && touch.x < this.n2x && touch.y > this.n1y && touch.y < this.n2y){
                                    levelState = 0
                                    this.screen.visible = false
                                    this.GO.visible = false
                                    this.retry.visible = false
                                    this.level1Group.destroyEach()
                                }
                            }
                        }
                    }
                }
            }


            if(this.pauzed){
                this.pauzeMenu.visible = true
                this.leftcameraPlus = 0
                this.cameraPlus = 0
                this.player.plr.velocityY = 0
                this.player.plr.pause()

                this.leftMove.visible = false
                this.rightMove.visible = false
                this.jumpMove.visible = false
                this.pauzeScreen.visible = true
                this.resume.visible = true
                this.settings.visible = true
                this.home.visible = true

                this.player.plr.depth = 19

                if(spriteTouched(this.resume, this.w / 7.5294, this.h / 9.4736)){
                    this.pauzed = false

                    this.pauzeMenu.visible = false
                    this.player.plr.play()

                    this.leftMove.visible = true
                    this.rightMove.visible = true
                    this.jumpMove.visible = true
                    this.pauzeScreen.visible = false
                    this.resume.visible = false
                    this.settings.visible = false
                    this.home.visible = false

                    this.pauze.visible = true
                }
                
                
            }


            
            if(this.touchGround != true){
               this.player.plr.changeAnimation("jump", pjump)
            }
            
            if(this.pauzed == false){
                this.player.plr.velocityY = this.player.plr.velocityY + 0.8
            }
            

            if(this.player.plr.x > camera.position.x - 10){
                this.cameraPlus = 8
            }else if(this.player.plr.x < camera.position.x){
                this.cameraPlus = 0
            }

            if(this.player.plr.x > windowWidth * 2.79){
                this.cameraPlus = 0
            }


            if(this.player.plr.x > camera.position.x - windowWidth / 4){
                this.leftcameraPlus = 0
            }else if(this.player.plr.x <= camera.position.x - windowWidth / 4 && this.player.plr.isTouching(this.leftCollider) == false){
                this.leftcameraPlus = 8
            }else if(this.player.plr.isTouching(this.leftCollider)){
                this.leftcameraPlus = 0
            }
             

                if(this.player.plr.x > 0){
                    push()
                    tint(255, this.moveInVis)
                    image(this.moveInstruct, windowWidth / 50, this.h / 1.5, windowWidth / 8.5, this.h / 36)
                    this.moveInVis += 4
                    pop()
                }  

                if(this.player.plr.x > this.w / 3){
                    push()
                    tint(255, this.jumpInVis)
                    image(this.jumpInstruct, windowWidth / 2.3, this.h / 1.5, windowWidth / 6.4, this.h / 36)
                    this.jumpInVis += 4
                    pop()
                }else{
                    this.jumpInVis = 0
                }         
            }

        }else if(this.gameState == false){

        this.GO.x = camera.position.x
        this.retry.x = camera.position.x
        this.screen.x = camera.position.x

            var changePressed = true


            if(this.displayGO && this.gameState == false){
                this.screen.visible = true
                this.GO.visible = true
                this.retry.visible = true
                this.leftMove.visible = false
                this.rightMove.visible = false
                this.jumpMove.visible = false
                

            }
        }
    }

    end(){
        if(this.passed){

            this.player.plr.x = 4180
            this.player.plr.y = 325

            this.player.plr.scale -= 0.03
                
            if(this.player.plr.scale < 0){
                levelState = 2
                this.level1Group.destroyEach()
            }
            
        }
    }
        
}

  

function spriteTouched(sprite, sWidth, sHeight){
    this.l1x = sprite.x - sWidth / 2
    this.l2x = sprite.x + sWidth / 2
    this.l1y = sprite.y - sHeight / 2
    this.l2y = sprite.y + sHeight / 2

    // this.tempSprite = createSprite(sprite.x, sprite.y, sWidth, sHeight)
    

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


