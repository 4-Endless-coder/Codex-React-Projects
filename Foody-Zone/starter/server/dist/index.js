"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const allowedOrigins = [
    "http://localhost:5173",
    "https://foody-zone-peach.vercel.app"
];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true
}));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
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
        {
            name: "Masala Dosa",
            price: 12,
            text: "Crispy South Indian crepe filled with spiced potato masala, served with sambhar and coconut chutney.",
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
            type: "breakfast",
        },
        {
            name: "Idli Sambhar",
            price: 8,
            text: "Soft steamed rice cakes served with aromatic lentil soup and coconut chutney.",
            image: "https://images.pexels.com/photos/4331488/pexels-photo-4331488.jpeg",
            type: "breakfast",
        },
        {
            name: "Poha",
            price: 7,
            text: "Flattened rice cooked with mustard seeds, curry leaves, and peanuts - a Maharashtra breakfast classic.",
            image: "https://images.pexels.com/photos/13063292/pexels-photo-13063292.jpeg",
            type: "breakfast",
        },
        {
            name: "Chole Bhature",
            price: 15,
            text: "Spicy chickpea curry paired with fluffy deep-fried bread, a North Indian favorite.",
            image: "https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg",
            type: "breakfast",
        },
        {
            name: "Aloo Paratha",
            price: 10,
            text: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with yogurt and pickle.",
            image: "https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg",
            type: "breakfast",
        },
        {
            name: "Upma",
            price: 6,
            text: "Savory semolina porridge tempered with mustard seeds, curry leaves, and cashews.",
            image: "https://images.pexels.com/photos/20408455/pexels-photo-20408455.jpeg",
            type: "breakfast",
        },
        {
            name: "Medu Vada",
            price: 9,
            text: "Crispy lentil donuts, perfectly fried and served with coconut chutney and sambhar.",
            image: "https://images.pexels.com/photos/21751212/pexels-photo-21751212.jpeg",
            type: "breakfast",
        },
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
            image: "https://images.pexels.com/photos/17696653/pexels-photo-17696653.jpeg",
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
            image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg",
            type: "lunch",
        },
        {
            name: "Rajma Chawal",
            price: 16,
            text: "Red kidney beans curry cooked in tomato gravy, served with steamed rice.",
            image: "https://media.istockphoto.com/id/1432801373/photo/rajma-chawal-is-a-popular-north-indian-food-rajma-is-a-socked-red-kidney-beans-cooked-with.jpg?s=612x612&w=0&k=20&c=2rXmEpF7rG1FuBmx55fHmrsrcROa0jkY4PHbcnRVtag=",
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
            image: "https://images.pexels.com/photos/8684075/pexels-photo-8684075.jpeg",
            type: "lunch",
        },
        {
            name: "Dal Makhani",
            price: 18,
            text: "Slow-cooked black lentils in a creamy, buttery tomato gravy with aromatic spices.",
            image: "https://images.pexels.com/photos/19834445/pexels-photo-19834445.jpeg",
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
            image: "https://images.pexels.com/photos/31249589/pexels-photo-31249589.jpeg",
            type: "dinner",
        },
        {
            name: "Rogan Josh",
            price: 30,
            text: "Kashmiri lamb curry with aromatic spices, yogurt, and a rich, flavorful gravy.",
            image: "https://images.pexels.com/photos/30203309/pexels-photo-30203309.jpeg",
            type: "dinner",
        },
        {
            name: "Malai Kofta",
            price: 21,
            text: "Deep-fried vegetable and paneer balls in a rich, creamy tomato-cashew gravy.",
            image: "https://t4.ftcdn.net/jpg/15/35/69/15/360_F_1535691562_MQEFMwbGGRjY1tEm2u5CelSQnZMrvBsu.jpg",
            type: "dinner",
        },
        {
            name: "Hyderabadi Dum Biryani",
            price: 35,
            text: "Aromatic rice cooked with tender meat in the traditional dum style with saffron and spices.",
            image: "https://images.pexels.com/photos/7469289/pexels-photo-7469289.jpeg",
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
            image: "https://images.pexels.com/photos/29547418/pexels-photo-29547418.jpeg",
            type: "lunch",
        },
        {
            name: "Tandoori Roti",
            price: 3,
            text: "Whole wheat flatbread baked in a traditional tandoor oven.",
            image: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg",
            type: "dinner",
        },
        {
            name: "Naan",
            price: 4,
            text: "Soft leavened flatbread brushed with butter, perfect for scooping up curries.",
            image: "https://images.pexels.com/photos/15119269/pexels-photo-15119269.jpeg",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map