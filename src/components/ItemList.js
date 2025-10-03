import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-black border-b-2 text-left"
          >
            <div className="py-2 flex justify-between items-center">
              {/* text section */}
              <div>
                <span className="font-medium">{item?.card.info?.name}</span>
                <span> - ₹{item?.card.info.price / 100}</span>
              </div>

              {/* image section */}
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-24 h-24 object-cover rounded"
                alt={item?.card.info?.name}
              />
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
