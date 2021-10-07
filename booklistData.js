//Reusable components

export const MyLogo = () => {
  return (
    <h1>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Barnes_%26_Noble_logo.svg/1200px-Barnes_%26_Noble_logo.svg.png"
        alt="barnesnoble"
      ></img>
    </h1>
  );
};

const myHeader = "Best-selling books";

export const MyH2 = () => <h2 className="myH2">{myHeader}</h2>;

export const bookStack = [
  {
    id: 1,
    img: "https://bit.ly/3AeN8LH",
    title: "The dying citizen",
    author: "Victor Davis Hanson",
    btnText: "Buy",
  },
  {
    id: 2,
    img: "https://bit.ly/3FoNF1i",
    title: "Peril",
    author: "Bob Woodward & Robert Costa",
    btnText: "Buy",
  },
  {
    id: 3,
    img: "https://bit.ly/3loMJ5f",
    title: "Taste my life through food",
    author: "Stanley Tucci",
    btnText: "Buy",
  },
  {
    id: 4,
    img: "https://bit.ly/3msJhG0",
    title: "James Clear",
    author: "Atomic habits",
    btnText: "Buy",
  },
  {
    id: 5,
    img: "https://bit.ly/3lenimG",
    title: "Colleen Hoover",
    author: "It ends with us",
    btnText: "Buy",
  },
  {
    id: 6,
    img: "https://bit.ly/3aaZUQK",
    title: "Fiona Hall",
    author: "There is nothing for you here",
    btnText: "Buy",
  },
  {
    id: 7,
    img: "https://bit.ly/3DhvDft",
    title: "The four agreements",
    author: "Don Miguel Ruiz",
    btnText: "Buy",
  },
  {
    id: 7,
    img: "https://bit.ly/2YtqfXG",
    title: "The storyteller",
    author: "David Grohl",
    btnText: "Buy",
  },
  {
    id: 7,
    img: "https://bit.ly/3iELDR4",
    title: "Feeding the soul",
    author: "Tabitha Brown",
    btnText: "Buy",
  },
];



//this is our re-usable foot menu

export const FootMenu = () =>{
  return(
    <div className='myMenu'>
      <a href='https://google.com'>Home</a>
      <a href='https://google.com'>Media</a>
      <a href='https://google.com'>Books</a>
      <a href='https://google.com'>Bestsellers</a>
      <a href='https://google.com'>Signup</a>
    </div>
  )
}