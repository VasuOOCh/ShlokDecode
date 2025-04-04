"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

interface Poem {
  author: string;
  title: string;
  description: string;
  image: string;
}

const categories: string[] = ["Prem", "Virasat", "Jeevan", "Hasya", "Bhakti"];

const poems: Record<string, Poem[]> = {
  Prem: [
    {
      author: "Rahul Verma",
      title: "Prem ki Nadiya",
      description: "Ek pyara sa prem geet jo dil ko chhoo jaaye.",
      image: "/image1.jpg",
    },
    {
      author: "Meera Bai",
      title: "Krishna Prem",
      description: "Shri Krishna ke prem mein doobi ek madhur kavita.",
      image: "/image6.jpg",
    },
    {
      author: "Kabir Das",
      title: "Prem aur Satya",
      description: "Prem aur satya ka sundar milan ek kavita ke roop mein.",
      image: "/image7.jpg",
    },
  ],
  Virasat: [
    {
      author: "Anjali Sharma",
      title: "Hamari Virasat",
      description: "Ek kahani jo hamari parampara ko darshati hai.",
      image: "/image2.jpg",
    },
    {
      author: "Subhash Chandra",
      title: "Swatantrata ki Virasat",
      description: "Bharat ki swatantrata ki kahani ek kavita ke roop mein.",
      image: "/image8.jpg",
    },
    {
      author: "Ramdhari Singh Dinkar",
      title: "Rashtra ki Pehchaan",
      description: "Ek kavita jo deshbhakti ko naya roop deti hai.",
      image: "/image9.jpg",
    },
  ],
  Jeevan: [
    {
      author: "Suresh Gupta",
      title: "Jeevan ka Safar",
      description: "Jeevan ke safar ki kahani ek kavita ke roop mein.",
      image: "/image3.jpg",
    },
    {
      author: "Mahadevi Verma",
      title: "Jeevan ke Rang",
      description: "Jeevan ke anek rangon ki ek sundar abhilakha.",
      image: "/image10.jpg",
    },
    {
      author: "Harivansh Rai Bachchan",
      title: "Madhushala",
      description: "Jeevan ke sukh-dukh aur asha ko darshati ek kavita.",
      image: "/image11.jpg",
    },
  ],
  Hasya: [
    {
      author: "Neha Agarwal",
      title: "Masti Bhari Duniya",
      description: "Ek mazedaari kavita jo hansi laayegi.",
      image: "/image4.jpg",
    },
    {
      author: "Sankar Prasad",
      title: "Chintu ka Bhavishya",
      description: "Ek natkhat ladke ki hasi-mazaak se bhari kahani.",
      image: "/image12.jpg",
    },
    {
      author: "Kaka Hathrasi",
      title: "Hansi ke Rang",
      description: "Ek hasya kavita jo sabko hasne par majboor kar degi.",
      image: "/image13.jpg",
    },
  ],
  Bhakti: [
    {
      author: "Amit Tripathi",
      title: "Bhakti Ras",
      description: "Bhagwan ki mahima ko vyakt karti kavita.",
      image: "/image5.jpg",
    },
    {
      author: "Tulsidas",
      title: "Ramcharitmanas",
      description: "Bhagwan Ram ki leelaon ka sundar chitran.",
      image: "/image14.jpg",
    },
    {
      author: "Surdas",
      title: "Krishna Leela",
      description: "Shri Krishna ke anant charitraon ka madhur varnan.",
      image: "/image15.jpg",
    },
  ],
};

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Prem");

  return (
    <div className="container mx-auto p-6 bg-black text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Explore Poems</h1>
      <div className="flex justify-center mb-6">
        <FormControl className="w-64 bg-white text-black">
          <InputLabel className="text-white">Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as string)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {poems[selectedCategory]?.map((poem: Poem, index: number) => (
          <Card key={index} details={poem} />
        ))}
      </div>
    </div>
  );
}
