import { useState } from "react";
import React from "react";
import ShowCourseComponent from "./course";
import SearchComponent from "./Search";
import UserCartComponent from "./cart";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Space",
      price: 499,
      image:
        "https://cdn.pixabay.com/photo/2011/12/15/11/26/orion-nebula-11183_960_720.jpg",
    },
    {
      id: 2,
      name: "Sasti Car",
      price: 699,
      image:
        "https://cdn.pixabay.com/photo/2021/11/30/10/14/bmw-6834970_960_720.jpg",
    },
    {
      id: 3,
      name: "Car",
      price: 799,
      image:
        "https://cdn.pixabay.com/photo/2021/11/30/10/14/bmw-6834969_960_720.jpg",
    },
  ]);

  const [cartCourses, setCartCourses] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");

  const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses.find(
      (item) => item.product.id === GFGcourse.id
    );
    if (alreadyCourses) {
      const latestCartUpdate = cartCourses.map((item) =>
        item.product.id === GFGcourse.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCartCourses(latestCartUpdate);
    } else {
      setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
    }
  };

  const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses.filter(
      (item) => item.product.id !== GFGCourse.id
    );
    setCartCourses(updatedCart);
  };

  const totalAmountCalculationFunction = () => {
    return cartCourses.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  };

  const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
  );

  return (
    <div className="App">
      <SearchComponent
        searchCourse={searchCourse}
        courseSearchUserFunction={courseSearchUserFunction}
      />
      <main className="App-main">
        <ShowCourseComponent
          courses={courses}
          filterCourseFunction={filterCourseFunction}
          addCourseToCartFunction={addCourseToCartFunction}
        />

        <UserCartComponent
          cartCourses={cartCourses}
          deleteCourseFromCartFunction={deleteCourseFromCartFunction}
          totalAmountCalculationFunction={totalAmountCalculationFunction}
          setCartCourses={setCartCourses}
        />
      </main>
    </div>
  );
}

export default App;
