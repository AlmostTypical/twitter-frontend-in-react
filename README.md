# Northwitter

## Objectives

1. Introduce yourself to web requests and how we get data from a server. In this exercise we will use GET requests mostly but the API we will be working with has two POST endpoints as well.
2. Learn how to manipulate web pages based on the data they receive and the way the user interacts with them.
3. Put your functional programming into use as you will need to manipulate the data served up. Our API served up the data exactly the same as Twitter does.
4. Build a pixel perfect clone of Twitter which will be an awesome show piece for your portfolio!
5. More experience with react and working with real data.

## Instructions

1. Build up a basic HTML layout using [Bulma](http://bulma.io/)
2. Populate the page with your profile data from the twitter API which has been provided
3. Populate the trends on your twitter clone by fetching them from the API
4. Populate the time line with all the tweets
5. Add each user's avatar to their tweets
6. Display any images from the tweets
7. Make any hash tags, mentions or urls open in a new window using the real link
8. Play with Bulma to make your page look as close to Twitter's as you can!

## Extra Credit

1. Make your page send a tweet by posting it to the API's dummy post route
2. Make your interface add the newly sent tweet to the top of the time line
3. Test posting the tweet to the API's dummy post-error route and handle the response
4. Add more pages such as user profile and a modal for direct messaging

## API documentation

### GET routes

#### Status
<https://protected-oasis-31937.herokuapp.com/>
Check the status of the application

#### Handles
<https://protected-oasis-31937.herokuapp.com/handles>
Check which twitter handles are available to get data for

#### Trends
<https://protected-oasis-31937.herokuapp.com/trends>
Get twitters current trends

#### Tweets
<https://protected-oasis-31937.herokuapp.com/tweets>
Get all tweets for all handles

#### Individual handle's tweets
<https://protected-oasis-31937.herokuapp.com/tweets/northcoders>
Get tweets for a certain handle. In this case 'northcoders'

#### Individual handle's followers
<https://protected-oasis-31937.herokuapp.com/followers/northcoders>
Get followers for a certain handle. In this case 'northcoders'

#### Individual handle's following
<https://protected-oasis-31937.herokuapp.com/following/northcoders>
Get following for a certain handle. In this case 'northcoders'

### POST routes

#### Success
<https://protected-oasis-31937.herokuapp.com/serve-ok>
Dummy post route which returns a status 200 OK

#### Error
<https://protected-oasis-31937.herokuapp.com/serve-error>
Dummy post route which returns a status 500 ERROR