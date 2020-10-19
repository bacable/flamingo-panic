sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let direction = 0
let lionEnemy: Sprite = null
let flamingoFood: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 3 3 3 . . . 
    . . . . . . . . . . 3 3 3 . . . 
    . . . . . . . . . . 3 . b . . . 
    . . . . . . . . . . 3 . b . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . . . 3 3 3 . . . . . 
    . . . . . . . . b . b . . . . . 
    . . . . . . . . b . b . . . . . 
    . . . . . . . b b . b b . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(10, 10)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
game.onUpdate(function () {
    controller.moveSprite(mySprite, 100, 100)
})
game.onUpdateInterval(2000, function () {
    flamingoFood = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 . . . 7 . . . . . . 
        . . . . 7 7 . . . 7 . . . . . . 
        . . . . . 7 7 . . 7 . . 7 . . . 
        . . . . . 7 7 . . 7 . . 7 . . . 
        . . . . . 7 . . . 7 . . 7 . . . 
        . . . . . 7 7 . 7 . . . 7 . . . 
        . . . . . . 7 7 7 . . 7 7 . . . 
        . . . . . . . 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    flamingoFood.setPosition(randint(5, 155), randint(5, 115))
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(3000, function () {
    lionEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 4 . . . . 
        . . . . 5 . . . . 4 4 4 4 . . . 
        . . . . 5 . . . . 4 5 5 4 . . . 
        . . . . . 5 5 5 5 4 5 5 4 . . . 
        . . . . 5 5 5 5 5 5 4 4 . . . . 
        . . . . 5 . 5 5 5 5 5 . . . . . 
        . . . . 5 . 5 . 5 . 5 . . . . . 
        . . . . 5 . 5 . 5 . 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    lionEnemy.setFlag(SpriteFlag.BounceOnWall, true)
    direction = randint(1, 2)
    if (direction == 1) {
        lionEnemy.setVelocity(-5, 20)
    } else {
        lionEnemy.setVelocity(20, 5)
    }
})
