import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Space",
      price: 499,
      image:
        "https://cdn.pixabay.com/photo/2011/12/15/11/26/orion-nebula-11183_960_720.jpg 1x",
    },
    {
      id: 2,
      name: "Sasti Car",
      price: 699,
      image:
        "https://cdn.pixabay.com/photo/2021/11/30/10/14/bmw-6834970_960_720.jpg 1x",
    },
    {
      id: 3,
      name: "Car",
      price: 799,
      image:
        "https://cdn.pixabay.com/photo/2021/11/30/10/14/bmw-6834969_960_720.jpg 1x",
    },
  ]);
}
