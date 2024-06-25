import { useEffect } from "react";

const SlideBrand = () => {
  const brands: string[] = [
    "Nike",
    "Adidas",
    "Puma",
    "Asics",
    "New Balance",
    "Saucony",
    "Under Armour",
    "Brooks",
    "Reebok",
    "Vans",
    "Converse",
    "Mizuno",
  ];

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(
      getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")
    );
    const marqueeContent = document.querySelector(".marquee-content");

    if (marqueeContent) {
      root.style.setProperty(
        "--marquee-elements",
        marqueeContent.children.length.toString()
      );

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }

    return () => {
      // Cleanup function
      // You may add cleanup logic here if necessary
    };
  }, []); // Run this effect only once after the component is mounted

  return (
    <div className="marquee">
      <ul className="marquee-content">
        {brands.map((brand, index) => (
          <li key={index}>
            <h3>{brand}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideBrand;
