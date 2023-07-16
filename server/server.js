const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()
const cors = require('@koa/cors')

const foodHandler = (ctx) => {
  ctx.body = [
    {
      id: 1,
      name: 'Simple',
      base: 'tomato',
      imageUrl:
        'https://media.istockphoto.com/id/1389527253/hu/fot%C3%B3/veget%C3%A1ri%C3%A1nus-pizza-fel%C3%BCln%C3%A9zetben-minimalista-k%C3%A9k-alapon.jpg?s=2048x2048&w=is&k=20&c=jfbJrRRIGzW3bHGZ2J7pg9IIkXYei7idkBNIIO_6wyY=',
      ingred:
        'mozzarella cheese, tomato, olive oil seasoned with garlic, basil',
      price: 2000,
    },
    {
      id: 2,
      name: 'Jenky',
      base: 'creemy',
      imageUrl:
        'https://media.istockphoto.com/id/1389527253/hu/fot%C3%B3/veget%C3%A1ri%C3%A1nus-pizza-fel%C3%BCln%C3%A9zetben-minimalista-k%C3%A9k-alapon.jpg?s=2048x2048&w=is&k=20&c=jfbJrRRIGzW3bHGZ2J7pg9IIkXYei7idkBNIIO_6wyY=',
      ingred: 'sour cream, maize, ham, mushroom, smoked cheese',
      price: 2000,
    },
    {
      id: 3,
      name: 'Barbecue',
      base: 'barbecue',
      imageUrl:
        'https://media.istockphoto.com/id/1389527253/hu/fot%C3%B3/veget%C3%A1ri%C3%A1nus-pizza-fel%C3%BCln%C3%A9zetben-minimalista-k%C3%A9k-alapon.jpg?s=2048x2048&w=is&k=20&c=jfbJrRRIGzW3bHGZ2J7pg9IIkXYei7idkBNIIO_6wyY=',
      ingred: 'spiced beef, onion, barbecue sauce, green paprika, mozzarella',
      price: 2000,
    },
  ]
}
app.use(cors())
app.use(route.get('/food', foodHandler))

app.listen(4000)
