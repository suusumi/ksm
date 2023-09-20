import React, { useState, useEffect } from "react";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import OutlinedButton from "@mui/material/Button";

interface Product {
  name: string;
  price: string;
}

interface PriceProps {}

const Price: React.FC<PriceProps> = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceData, setPriceData] = useState<{ [category: string]: Product[] }>(
    {},
  );

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data: { [category: string]: Product[] } = {
        category1: [
          { name: "Product 1", price: "$10" },
          { name: "Product 2", price: "$20" },
        ],
        category2: [
          { name: "Product 3", price: "$30" },
          { name: "Product 4", price: "$40" },
        ],
        category3: [
          {
            name: "fsodifj",
            price: "12$",
          },
        ],
      };

      setPriceData(data);
    };

    fetchData();
  }, []);

  const categoryNames: { [category: string]: string } = {
    category1: "Аллергология и иммунология",
    category2: "Акушерство и гинекология",
    category3: "Детские специалисты",
  };

  const categories: string[] = Object.keys(priceData);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          color: "#288e81",
          fontSize: isXsScreen ? 22 : 38,
          fontFamily: "Austin, sans-serif",
          textTransform: "uppercase",
          maxWidth: isXsScreen ? 500 : 500,
          textAlign: isXsScreen ? "center" : "left",
          marginBottom: "25px",
        }}
      >
        Услуги
      </Typography>
      <Box>
        {categories.map((category) => (
          <OutlinedButton
            key={category}
            onClick={() => handleCategoryChange(category)}
            sx={{
              color: selectedCategory === category ? "white" : "black",
              backgroundColor:
                selectedCategory === category ? "#288e81" : "transparent",
              borderColor: "#288e81",
              borderWidth: "2px",
              marginRight: "10px",
              marginBottom: "10px",
              "&:hover": {
                backgroundColor: "#288e81",
                color: "white",
              },
            }}
          >
            {categoryNames[category]}
          </OutlinedButton>
        ))}
      </Box>
      {selectedCategory && (
        <Box>
          {priceData[selectedCategory]?.map((product) => (
            <div key={product.name}>
              <Typography variant="h4">{product.name}</Typography>
              <Typography variant="body1">{product.price}</Typography>
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Price;
