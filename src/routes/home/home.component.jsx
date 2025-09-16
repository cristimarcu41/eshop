import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories=[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://media.gq-magazine.co.uk/photos/5dceb09dc62d9b0008fc8fc8/master/pass/HATS_Untitled-1.jpg"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://www.florencemarinex.com/cdn/shop/collections/Jackets_Collection_Header.jpg?v=1741373472&width=1200"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://www.buzzsneakers.ro/files/thumbs/files/images/slike-proizvoda/media/DQ3/DQ3991-002/images/thumbs_900/DQ3991-002_900_900px.jpg"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://www.shutterstock.com/image-photo/young-woman-enjoying-warmth-sun-600nw-2510390557.jpg"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://img.freepik.com/premium-photo/lifestyle-summer-portrait-man-standing-top-mountaing-with-beautiful-landscape-front-male-traveler-enjoying-nature-view-from-highest-peak-hill_149066-782.jpg"
  }
]

  return <Directory categories={categories} />;
}

export default Home;
