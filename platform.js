class Platform{
    constructor(x, y, w, h){
    
        this.collider = createSprite(x, y - h / 2, w, windowHeight / 360)
        this.collider.visible = false
        this.collider.shapeColor = "red"

        this.sprite = createSprite(x, y, w, h)
        this.sprite.visible = false

        tgroup.add(this.sprite)
        collidergroup.add(this.collider)
        
    }
}