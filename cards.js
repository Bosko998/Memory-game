let cards = (value) => {
    let allCards = 
    [
    {imgSrc: "./img/anchor.png", name:"anchor"},
    {imgSrc: "./img/anchor.png", name:"anchor"},
    {imgSrc: "./img/bucket.png", name:"bucket"},
    {imgSrc: "./img/bucket.png", name:"bucket"},
    {imgSrc: "./img/icecream.png", name:"icecream"},
    {imgSrc: "./img/icecream.png", name:"icecream"},
    {imgSrc: "./img/surfboard.png", name:"surfboard"},
    {imgSrc: "./img/surfboard.png", name:"surfboard"},
    {imgSrc: "./img/ship.png", name:"ship"},
    {imgSrc: "./img/ship.png", name:"ship"},
    {imgSrc: "./img/pirate.jpg", name:"pirate"},
    {imgSrc: "./img/pirate.jpg", name:"pirate"},
    {imgSrc: "./img/sun.jpg", name:"sun"},
    {imgSrc: "./img/sun.jpg", name:"sun"},
    {imgSrc: "./img/beachchair.jpg", name:"beachchair"},
    {imgSrc: "./img/beachchair.jpg", name:"beachchair"},
    {imgSrc: "./img/equipment.jpg", name:"equipment"},
    {imgSrc: "./img/equipment.jpg", name:"equipment"},
    {imgSrc: "./img/seastar.jpg", name:"seastar"},
    {imgSrc: "./img/seastar.jpg", name:"seastar"},
    {imgSrc: "./img/jetski.png", name:"jetski"},
    {imgSrc: "./img/jetski.png", name:"jetski"},
    {imgSrc: "./img/parachute.jpg", name:"parachute"},
    {imgSrc: "./img/parachute.jpg", name:"parachute"},
    {imgSrc: "./img/rainbow.jpg", name:"rainbow"},
    {imgSrc: "./img/rainbow.jpg", name:"rainbow"},
    {imgSrc: "./img/sunglasses.jpg", name:"sunglasses"},
    {imgSrc: "./img/sunglasses.jpg", name:"sunglasses"},
    {imgSrc: "./img/kite.jpg", name:"kite"},
    {imgSrc: "./img/kite.jpg", name:"kite"},
    {imgSrc: "./img/bicycle.jpg", name:"bicycle"},
    {imgSrc: "./img/bicycle.jpg", name:"bicycle"},
    {imgSrc: "./img/ball.jpg", name:"ball"},
    {imgSrc: "./img/ball.jpg", name:"ball"},
    {imgSrc: "./img/beach.jpg", name:"beach"},
    {imgSrc: "./img/beach.jpg", name:"beach"},
    {imgSrc: "./img/fish.png", name:"fish"},
    {imgSrc: "./img/fish.png", name:"fish"},
    {imgSrc: "./img/owl.png", name:"owl"},
    {imgSrc: "./img/owl.png", name:"owl"},
    {imgSrc: "./img/elephant.jpg", name:"elephant"},
    {imgSrc: "./img/elephant.jpg", name:"elephant"},
    {imgSrc: "./img/rabbit.jpg", name:"rabbit"},
    {imgSrc: "./img/rabbit.jpg", name:"rabbit"},
    {imgSrc: "./img/giraffe.png", name:"giraffe"},
    {imgSrc: "./img/giraffe.png", name:"giraffe"},
    {imgSrc: "./img/lion.jpg", name:"lion"},
    {imgSrc: "./img/lion.jpg", name:"lion"},
    {imgSrc: "./img/turtle.png", name:"turtle"},
    {imgSrc: "./img/turtle.png", name:"turtle"},
    {imgSrc: "./img/dragon.jpg", name:"dragon"},
    {imgSrc: "./img/dragon.jpg", name:"dragon"},
    {imgSrc: "./img/cow.png", name:"cow"},
    {imgSrc: "./img/cow.png", name:"cow"},
    {imgSrc: "./img/shark.png", name:"shark"},
    {imgSrc: "./img/shark.png", name:"shark"},
    {imgSrc: "./img/fisherman.jpg", name:"fisherman"},
    {imgSrc: "./img/fisherman.jpg", name:"fisherman"},
    {imgSrc: "./img/dog.png", name:"dog"},
    {imgSrc: "./img/dog.png", name:"dog"},
    {imgSrc: "./img/cat.jpg", name:"cat"},
    {imgSrc: "./img/cat.jpg", name:"cat"},
    {imgSrc: "./img/monkey.png", name:"monkey"},
    {imgSrc: "./img/monkey.png", name:"monkey"},
    {imgSrc: "./img/chicken.jpg", name:"chicken"},
    {imgSrc: "./img/chicken.jpg", name:"chicken"},
    {imgSrc: "./img/pig.jpg", name:"pig"},
    {imgSrc: "./img/pig.jpg", name:"pig"},
    {imgSrc: "./img/bird.jpg", name:"bird"},
    {imgSrc: "./img/bird.jpg", name:"bird"},
    {imgSrc: "./img/god.png", name:"god"},
    {imgSrc: "./img/god.png", name:"god"},
    {imgSrc: "./img/devil.png", name:"devil"},
    {imgSrc: "./img/devil.png", name:"devil"},
    {imgSrc: "./img/tiger.jpg", name:"tiger"},
    {imgSrc: "./img/tiger.jpg", name:"tiger"},
    {imgSrc: "./img/sheep.jpg", name:"sheep"},
    {imgSrc: "./img/sheep.jpg", name:"sheep"},
    {imgSrc: "./img/spider.jpg", name:"spider"},
    {imgSrc: "./img/spider.jpg", name:"spider"},
    {imgSrc: "./img/robot.jpg", name:"robot"},
    {imgSrc: "./img/robot.jpg", name:"robot"},
    {imgSrc: "./img/pineapple.png", name:"pineapple"},
    {imgSrc: "./img/pineapple.png", name:"pineapple"},
    {imgSrc: "./img/tomato.png", name:"tomato"},
    {imgSrc: "./img/tomato.png", name:"tomato"},
    {imgSrc: "./img/cherry.jpg", name:"cherry"},
    {imgSrc: "./img/cherry.jpg", name:"cherry"},
    {imgSrc: "./img/watermelon.jpg", name:"watermelon"},
    {imgSrc: "./img/watermelon.jpg", name:"watermelon"},
    {imgSrc: "./img/snake.jpg", name:"snake"},
    {imgSrc: "./img/snake.jpg", name:"snake"},
    {imgSrc: "./img/ladybug.jpg", name:"ladybug"},
    {imgSrc: "./img/ladybug.jpg", name:"ladybug"},
    {imgSrc: "./img/rik.png", name:"rik"},
    {imgSrc: "./img/rik.png", name:"rik"},
    {imgSrc: "./img/morty.png", name:"morty"},
    {imgSrc: "./img/morty.png", name:"morty"},
    {imgSrc: "./img/beautyandbeast.png", name:"beautyandbeast"},
    {imgSrc: "./img/beautyandbeast.png", name:"beautyandbeast"},
    ]
    let slicedCard = allCards.slice(0,Number(value))
    return slicedCard;
}

export{cards}