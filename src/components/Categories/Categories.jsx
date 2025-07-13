import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory, useFilter } from "../../context";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0); 
  const { hotelCategory, setHotelCategory } = useCategory();
  const { filterDispatch } = useFilter();

  const handleFilterClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travel-backend-3-p68x.onrender.com/api/category"
        );
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    setHotelCategory(category);
  };

  const handleLeftButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (startIndex < categories.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="categories">
      <div>
        <button className="button btn-filter d-flex align-center gap-small cursor-pointer" onClick={handleFilterClick}>
          <span className="material-icons-outlined">filter_alt</span>
          <span>Filter</span>
        </button>
      </div>

      <div className="d-flex gap">
        <button className="button-left" onClick={handleLeftButtonClick}>{"<"}</button>
        {categories.slice(startIndex, startIndex + 10).map(({ _id, category }) => (
          <div key={_id} className="item">
            <span
              className={`${category === hotelCategory ? "border-bottom" : ""} category-item`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          </div>
        ))}
        <button className="button-right " onClick={handleRightButtonClick}>{">"}</button>
      </div>
    </section>
  );
};
