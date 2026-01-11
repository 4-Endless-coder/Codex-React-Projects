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
    // Original Items
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

    // Indian Breakfast Items
    {
      name: "Masala Dosa",
      price: 12,
      text: "Crispy South Indian crepe filled with spiced potato masala, served with sambhar and coconut chutney.",
      image: "/images/masala-dosa.png",
      type: "breakfast",
    },
    {
      name: "Idli Sambhar",
      price: 8,
      text: "Soft steamed rice cakes served with aromatic lentil soup and coconut chutney.",
      image: "/images/idli-sambhar.png",
      type: "breakfast",
    },
    {
      name: "Poha",
      price: 7,
      text: "Flattened rice cooked with mustard seeds, curry leaves, and peanuts - a Maharashtra breakfast classic.",
      image: "/images/poha.png",
      type: "breakfast",
    },
    {
      name: "Chole Bhature",
      price: 15,
      text: "Spicy chickpea curry paired with fluffy deep-fried bread, a North Indian favorite.",
      image: "/images/chole-bhature.png",
      type: "breakfast",
    },
    {
      name: "Aloo Paratha",
      price: 10,
      text: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with yogurt and pickle.",
      image: "/images/aloo-paratha.png",
      type: "breakfast",
    },
    {
      name: "Upma",
      price: 6,
      text: "Savory semolina porridge tempered with mustard seeds, curry leaves, and cashews.",
      image: "/images/upma.png",
      type: "breakfast",
    },
    {
      name: "Medu Vada",
      price: 9,
      text: "Crispy lentil donuts, perfectly fried and served with coconut chutney and sambhar.",
      image: "/images/medu-vada.png",
      type: "breakfast",
    },

    // Indian Lunch Items
    {
      name: "Butter Chicken",
      price: 28,
      text: "Tender chicken in a rich, creamy tomato-based gravy with aromatic spices and butter.",
      image: "/images/butter-chicken.png",
      type: "lunch",
    },
    {
      name: "Chicken Biryani",
      price: 25,
      text: "Fragrant basmati rice layered with marinated chicken, saffron, and whole spices.",
      image: "/images/chicken-biryani.png",
      type: "lunch",
    },
    {
      name: "Paneer Tikka",
      price: 22,
      text: "Grilled cottage cheese cubes marinated in yogurt and Indian spices, perfectly charred.",
      image: "/images/paneer-tikka.png",
      type: "lunch",
    },
    {
      name: "Veg Thali",
      price: 20,
      text: "Complete Indian meal platter with dal, sabzi, roti, rice, papad, and dessert.",
      image: "/images/veg-thali.png",
      type: "lunch",
    },
    {
      name: "Pav Bhaji",
      price: 14,
      text: "Spicy mashed vegetable curry served with buttered soft bread rolls.",
      image: "/images/pav-bhaji.png",
      type: "lunch",
    },
    {
      name: "Rajma Chawal",
      price: 16,
      text: "Red kidney beans curry cooked in tomato gravy, served with steamed rice.",
      image: "/images/rajma-chawal.png",
      type: "lunch",
    },
    {
      name: "Kadai Paneer",
      price: 24,
      text: "Cottage cheese cooked with bell peppers, onions, and tomatoes in a spicy kadai masala.",
      image: "/images/kadai-paneer.png",
      type: "lunch",
    },
    {
      name: "Fish Curry",
      price: 30,
      text: "Fresh fish cooked in a tangy coconut-based curry with aromatic spices.",
      image: "/images/fish-curry.png",
      type: "lunch",
    },

    // Indian Dinner Items
    {
      name: "Dal Makhani",
      price: 18,
      text: "Slow-cooked black lentils in a creamy, buttery tomato gravy with aromatic spices.",
      image: "/images/dal-makhani.png",
      type: "dinner",
    },
    {
      name: "Tandoori Chicken",
      price: 32,
      text: "Chicken marinated in yogurt and spices, cooked in a traditional clay oven until smoky and tender.",
      image: "/images/tandoori-chicken.png",
      type: "dinner",
    },
    {
      name: "Palak Paneer",
      price: 19,
      text: "Cottage cheese cubes in a smooth spinach gravy with cream and Indian spices.",
      image: "/images/palak-paneer.png",
      type: "dinner",
    },
    {
      name: "Rogan Josh",
      price: 30,
      text: "Kashmiri lamb curry with aromatic spices, yogurt, and a rich, flavorful gravy.",
      image: "/images/rogan-josh.png",
      type: "dinner",
    },
    {
      name: "Malai Kofta",
      price: 21,
      text: "Deep-fried vegetable and paneer balls in a rich, creamy tomato-cashew gravy.",
      image: "/images/malai-kofta.png",
      type: "dinner",
    },
    {
      name: "Hyderabadi Dum Biryani",
      price: 35,
      text: "Aromatic rice cooked with tender meat in the traditional dum style with saffron and spices.",
      image: "/images/hyderabadi-biryani.png",
      type: "dinner",
    },
    {
      name: "Chicken Korma",
      price: 27,
      text: "Mild and creamy chicken curry made with yogurt, cream, and ground nuts.",
      image: "/images/chicken-korma.png",
      type: "dinner",
    },
    {
      name: "Prawn Masala",
      price: 38,
      text: "Succulent prawns cooked in a spicy tomato and onion masala with coastal spices.",
      image: "/images/prawn-masala.png",
      type: "dinner",
    },

    // Snacks & Extras
    {
      name: "Samosa",
      price: 6,
      text: "Crispy fried pastry filled with spiced potatoes and peas, served with tangy chutney.",
      image: "/images/samosa.png",
      type: "breakfast",
    },
    {
      name: "Pakora",
      price: 8,
      text: "Mixed vegetable fritters coated in spiced chickpea flour batter and deep-fried.",
      image: "/images/pakora.png",
      type: "lunch",
    },
    {
      name: "Tandoori Roti",
      price: 3,
      text: "Whole wheat flatbread baked in a traditional tandoor oven.",
      image: "/images/tandoori-roti.png",
      type: "dinner",
    },
    {
      name: "Naan",
      price: 4,
      text: "Soft leavened flatbread brushed with butter, perfect for scooping up curries.",
      image: "/images/naan.png",
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