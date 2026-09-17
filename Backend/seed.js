import mongoose from "mongoose";
import dotenv from "dotenv";
import Soil from "./model/soil.model.js";

dotenv.config();

const mongoDbUri = process.env.MongoDBURI;

if (!mongoDbUri) {
  console.error("MongoDBURI is required in .env to seed data");
  process.exit(1);
}

const sampleSoils = [
  {
    name: "Alluvial Soil (River Basin)",
    title: "High natural fertility, rich in potash and lime. Ideal for rice, wheat, maize, sugarcane, and pulses.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Alluvium"
  },
  {
    name: "Black Soil (Regur / Cotton Soil)",
    title: "Volcanic clay-rich soil with exceptional moisture retention. Prime choice for cotton, soybean, and groundnut.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Vertisol"
  },
  {
    name: "Red & Yellow Soil Advisory",
    title: "Porous crystalline texture. Responds exceptionally well to balanced NPK fertilization for millets and oilseeds.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Red_soil"
  },
  {
    name: "Laterite Soil Management",
    title: "Rich in iron and aluminum, developed under heavy tropical rains. Highly productive for tea, coffee, cashew, and rubber.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Laterite"
  },
  {
    name: "Loamy Horticulture Soil",
    title: "The agricultural gold standard (sand, silt, clay balanced). Ideal for intensive greenhouse and vegetable farming.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Loam"
  },
  {
    name: "Arid & Sandy Soil Cultivation",
    title: "Light permeable texture. Exceptional response to modern drip fertigation for drought-resistant crops like bajra.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Sand"
  },
  {
    name: "Clay & Wetland Paddy Soil",
    title: "Heavy soil with dense water-holding capacity. Crucial for wetland paddy cultivation, lotus, and water chestnuts.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Clay"
  },
  {
    name: "Peaty & Organic Marsh Soil",
    title: "Dark organic matter with high acidity. Highly responsive to liming and drainage for specialty tuber crops and greens.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Peat"
  },
  {
    name: "Forest & Mountain Soil",
    title: "Formed in forested regions under cool climates. Rich in natural humus; suitable for apple orchards, spices, and tea.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Brown_earth"
  },
  {
    name: "Chalky & Calcareous Soil",
    title: "Alkaline soil rich in calcium carbonate. Excellent drainage for lavender, brassicas, spinach, and sweet corn.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=700&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Calcareous_soil"
  }
];

async function seedDB() {
  const force = process.argv.includes("--force") || process.argv.includes("-f");

  try {
    await mongoose.connect(mongoDbUri);
    console.log("Connected to MongoDB for seeding...");

    if (force) {
      console.log("Force flag detected. Refreshing soil collection...");
      await Soil.deleteMany({});
      await Soil.insertMany(sampleSoils);
      console.log(`Successfully refreshed database with ${sampleSoils.length} soil records!`);
    } else {
      const count = await Soil.countDocuments();
      if (count === 0) {
        await Soil.insertMany(sampleSoils);
        console.log(`Successfully seeded ${sampleSoils.length} soil records!`);
      } else {
        console.log(`Database already contains ${count} soil records. Pass '--force' to overwrite.`);
      }
    }

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB. Seed script finished successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDB();
