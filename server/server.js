const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '96522e8b569c45ffb9dbada27a420d70',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const reviews = ['This Sake is the best!', 'Best stuff', 'love sake']

app.use(express.static(path.join(__dirname, "../public")));

// app.get('/', (req, res) => {
//     rollbar.info('HTML served successfully');
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

app.get('/api/reviews', (req, res) => {
    rollbar.info('Someone got the list of reviews to load');
    res.status(200).send(reviews)
})

app.post('/api/reviews', (req, res) => {
    let {review} = req.body
 
    const index = reviews.findIndex(eachReview => {
        return eachReview === review
    })
 
    try {
        if (index === -1 && review !== '') {
            rollbar.log('Student added successfully', {author: "Yama", type: "manual entry"});
            students.push(review)
            res.status(200).send(students)
        } else if (review === ''){
            rollbar.error('No review provided');
            res.status(400).send('You must enter a review.')
        } else {
            rollbar.error("The same review already exists");
            res.status(400).send('The same review already exists.')
        }
    } catch (err) {
        console.log(err)
    }
 })

 app.delete('/api/reviews/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    reviews.splice(targetIndex, 1)
    res.status(200).send(reviews)
})

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4005;

app.listen(port, () => console.log(`We vibin on port ${port}`));