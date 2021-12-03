import axios from "axios";

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement('div');
  const dated = document.createElement('span');
  const titled = document.createElement('h1');
  const temped = document.createElement('span');

  // date.textContent = obj.date;
  // title.textContent = obj.title;
  // temp.textContent = obj.temp;

  header.appendChild(date);  
  header.appendChild(title);
  header.appendChild(temp);
  
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  return header;
}

const headerAppender = (header) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  axios.get(header)
  .then(resp => {
    // document.querySelector('.header').appendChild(Header(resp.data));
    console.log(resp);
  })
  .catch(err=> console.error(err));
  
}

export { Header, headerAppender }
