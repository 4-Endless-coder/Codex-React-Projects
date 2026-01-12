import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  "http://localhost:5173",                     
  "https://foody-zone-peach.vercel.app"        
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Serve static images
app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  
  const foodData = [
    // Original Items (these have actual images in your public folder)
    {
      name: "Boiled Egg",
      price: 10,
      text: "Simple and nutritious boiled eggs, perfect for a protein-rich breakfast.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Japanese noodle soup with rich broth, tender noodles, and savory toppings.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Perfectly grilled chicken with herbs and spices, juicy and flavorful.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Delicious soft cake with rich frosting, perfect for dessert or breakfast treat.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Classic burger with fresh patty, crisp lettuce, tomatoes, and special sauce.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy pancakes stacked high, served with maple syrup and butter.",
      image: "/images/pancake.png",
      type: "dinner",
    },

    // Indian Breakfast Items (using placeholder images)
    {
      name: "Masala Dosa",
      price: 12,
      text: "Crispy South Indian crepe filled with spiced potato masala, served with sambhar and coconut chutney.",
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Idli Sambhar",
      price: 8,
      text: "Soft steamed rice cakes served with aromatic lentil soup and coconut chutney.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Poha",
      price: 7,
      text: "Flattened rice cooked with mustard seeds, curry leaves, and peanuts - a Maharashtra breakfast classic.",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Chole Bhature",
      price: 15,
      text: "Spicy chickpea curry paired with fluffy deep-fried bread, a North Indian favorite.",
      image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Aloo Paratha",
      price: 10,
      text: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with yogurt and pickle.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Upma",
      price: 6,
      text: "Savory semolina porridge tempered with mustard seeds, curry leaves, and cashews.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Medu Vada",
      price: 9,
      text: "Crispy lentil donuts, perfectly fried and served with coconut chutney and sambhar.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      type: "breakfast",
    },

    // Indian Lunch Items
    {
      name: "Butter Chicken",
      price: 28,
      text: "Tender chicken in a rich, creamy tomato-based gravy with aromatic spices and butter.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Chicken Biryani",
      price: 25,
      text: "Fragrant basmati rice layered with marinated chicken, saffron, and whole spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Paneer Tikka",
      price: 22,
      text: "Grilled cottage cheese cubes marinated in yogurt and Indian spices, perfectly charred.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Veg Thali",
      price: 20,
      text: "Complete Indian meal platter with dal, sabzi, roti, rice, papad, and dessert.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Pav Bhaji",
      price: 14,
      text: "Spicy mashed vegetable curry served with buttered soft bread rolls.",
      image: "https://images.unsplash.com/photo-1606491048052-4a0b1e9c6dcc?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Rajma Chawal",
      price: 16,
      text: "Red kidney beans curry cooked in tomato gravy, served with steamed rice.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Kadai Paneer",
      price: 24,
      text: "Cottage cheese cooked with bell peppers, onions, and tomatoes in a spicy kadai masala.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Fish Curry",
      price: 30,
      text: "Fresh fish cooked in a tangy coconut-based curry with aromatic spices.",
      image: "https://images.unsplash.com/photo-1626074353765-517a65e68f42?w=400&h=300&fit=crop",
      type: "lunch",
    },

    // Indian Dinner Items
    {
      name: "Dal Makhani",
      price: 18,
      text: "Slow-cooked black lentils in a creamy, buttery tomato gravy with aromatic spices.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Tandoori Chicken",
      price: 32,
      text: "Chicken marinated in yogurt and spices, cooked in a traditional clay oven until smoky and tender.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Palak Paneer",
      price: 19,
      text: "Cottage cheese cubes in a smooth spinach gravy with cream and Indian spices.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Rogan Josh",
      price: 30,
      text: "Kashmiri lamb curry with aromatic spices, yogurt, and a rich, flavorful gravy.",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Malai Kofta",
      price: 21,
      text: "Deep-fried vegetable and paneer balls in a rich, creamy tomato-cashew gravy.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Hyderabadi Dum Biryani",
      price: 35,
      text: "Aromatic rice cooked with tender meat in the traditional dum style with saffron and spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Chicken Korma",
      price: 27,
      text: "Mild and creamy chicken curry made with yogurt, cream, and ground nuts.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Prawn Masala",
      price: 38,
      text: "Succulent prawns cooked in a spicy tomato and onion masala with coastal spices.",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=400&h=300&fit=crop",
      type: "dinner",
    },

    // Snacks & Extras
    {
      name: "Samosa",
      price: 6,
      text: "Crispy fried pastry filled with spiced potatoes and peas, served with tangy chutney.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      type: "breakfast",
    },
    {
      name: "Pakora",
      price: 8,
      text: "Mixed vegetable fritters coated in spiced chickpea flour batter and deep-fried.",
      image: "https://images.unsplash.com/photo-1606491048052-4a0b1e9c6dcc?w=400&h=300&fit=crop",
      type: "lunch",
    },
    {
      name: "Tandoori Roti",
      price: 3,
      text: "Whole wheat flatbread baked in a traditional tandoor oven.",
      image: "https://images.unsplash.com/photo-1619158401915-0093d6d6d242?w=400&h=300&fit=crop",
      type: "dinner",
    },
    {
      name: "Naan",
      price: 4,
      text: "Soft leavened flatbread brushed with butter, perfect for scooping up curries.",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;