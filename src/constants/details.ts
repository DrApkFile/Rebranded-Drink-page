//Video Path
import f1 from "../assets/videos/f1.mp4"
import f2 from "../assets/videos/f2.mp4"
import f3 from "../assets/videos/f3.mp4"
import f4 from "../assets/videos/f4.mp4"
import f5 from "../assets/videos/f5.mp4"
import f6 from "../assets/videos/f6.mp4"
import f7 from "../assets/videos/f7.mp4"

// Define types
interface Flavor {
    name: string;
    color: string;
    rotation: string;
}

interface Nutrient {
    label: string;
    amount: string;
}

interface Card {
    src: any;
    rotation: string;
    name: string;
    img: string;
    translation?: string; // optional since some cards don’t have it
    quote?: string;
}

// Flavor list
const flavorlists: Flavor[] = [
    {
        name: "Chocolate KOZO",
        color: "brown",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Stawberry KOZO",
        color: "red",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "Cookies & Cream",
        color: "blue",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Peanut Butter Chocolate",
        color: "orange",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "Vanilla KOZO",
        color: "white",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "Matcha KOZO",
        color: "black",
        rotation: "md:rotate-[8deg] rotate-0",
    },
];

// Nutrient list
const nutrientLists: Nutrient[] = [
    { label: "Potassium", amount: "245mg" },
    { label: "Calcium", amount: "500mg" },
    { label: "Vitamin A", amount: "176mcg" },
    { label: "Vitamin D", amount: "5mcg" },
    { label: "Iron", amount: "1mg" },
];

// Cards list
const cards: Card[] = [
    {
        src: f1,
        rotation: "rotate-z-[-10deg]",
        name: "Madison",
        img: "../assets/images/p1.png",
        translation: "translate-y-[-5%]",
        quote: "The smoothest morning routine I've ever had!",
    },
    {
        src: f2,
        rotation: "rotate-z-[4deg]",
        name: "Alexander",
        img: "../assets/images/p2.png",
        quote: "Perfect energy boost without the crash.",
    },
    {
        src: f3,
        rotation: "rotate-z-[-4deg]",
        name: "Andrew",
        img: "../assets/images/p3.png",
        translation: "translate-y-[-5%]",
        quote: "Finally, a protein drink that actually tastes like milk.",
    },
    {
        src: f4,
        rotation: "rotate-z-[4deg]",
        name: "Bryan",
        img: "../assets/images/p4.png",
        translation: "translate-y-[5%]",
        quote: "I take it everywhere. It's a game changer.",
    },
    {
        src: f5,
        rotation: "rotate-z-[-10deg]",
        name: "Chris",
        img: "../assets/images/p5.png",
        quote: "The strawberry flavor is pure nostalgia.",
    },
    {
        src: f6,
        rotation: "rotate-z-[4deg]",
        name: "Devante",
        img: "../assets/images/p6.png",
        translation: "translate-y-[5%]",
        quote: "The best post-workout treat. Period.",
    },
    {
        src: f7,
        rotation: "rotate-z-[-3deg]",
        name: "Melisa",
        img: "../assets/images/p7.png",
        translation: "translate-y-[10%]",
        quote: "Clean, creamy, and totally iconic.",
    },
];

export { flavorlists, nutrientLists, cards };