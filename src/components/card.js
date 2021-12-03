import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardCont =  document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgCont = document.createElement('div');
  const img = document.createElement('img');
  const autherName = document.createElement('span');

  img.src = article.authorPhoto;
  img.alt = 'Picture of author';
  headline.textContent = article.headline;
  author.textContent = 'Author: ';
  imgCont.textContent = '';
  autherName.textContent = article.autherName;

  cardCont.appendChild(headline);
  cardCont.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(autherName);

  cardCont.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgCont.classList.add('img-container')

  return cardCont;
}

const cardAppender = (articles) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/${articles}`)
  .then(resp => {
    document.querySelector('.card').appendChild(Card(resp.data));
    // console.log(resp);
  })
  .catch(err=> console.error(err));
}

export { Card, cardAppender }
