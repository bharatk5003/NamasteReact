import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items, onAddToCart }) => {
  const dispatch = useDispatch();
  const handleItem = (item) => {
    //Dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, imageId } = item.card.info;

        return (
          <div
            key={id}
            className="p-2 m-2 border-b border-gray-300 text-left flex justify-between items-start"
          >
            {/* Left section — name, price, description */}
            <div className="w-9/12">
              <span className="font-semibold">{name}</span>
              <span className="ml-2 text-sm text-gray-700">₹{price / 100}</span>
              <p className="text-xs text-gray-500 mt-1">{description}</p>
            </div>

            {/* Right section — image + Add button */}
            <div className="relative w-24 h-24">
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 border border-green-600 rounded-md px-3 py-1 text-xs font-semibold hover:bg-green-600 hover:text-white transition-all"
                onClick={() => handleItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
