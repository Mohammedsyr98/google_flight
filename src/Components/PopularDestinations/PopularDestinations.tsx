import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import Bangkok from "../../assets/Bangkok.jpeg";
import Berlin from "../../assets/Berlin.jpg";
import Dubai from "../../assets/Dubai.jpeg";
import Istanbul from "../../assets/Istanbul.jpeg";
import London from "../../assets/London.jpeg";
import LosAngeles from "../../assets/Los Angeles.jpeg";
import Moscow from "../../assets/Moscow.jpeg";
import NewYork from "../../assets/NewYork.jpeg";
import Paris from "../../assets/Paris.jpeg";
import Rome from "../../assets/Rome.webp";
import Sydney from "../../assets/Sydney.jpeg";
import Tokyo from "../../assets/Tokyo.jpeg";
import Toronto from "../../assets/Toronto.jpeg";
import Barcelona from "../../assets/Barcelona.avif";

const cities = [
  { name: "New York", image: NewYork },
  { name: "Paris", image: Paris },
  { name: "Tokyo", image: Tokyo },
  { name: "London", image: London },
  { name: "Dubai", image: Dubai },
  { name: "Rome", image: Rome },
  { name: "Sydney", image: Sydney },
  { name: "Istanbul", image: Istanbul },
  { name: "Moscow", image: Moscow },
  { name: "Toronto", image: Toronto },
  { name: "Bangkok", image: Bangkok },
  { name: "Los Angeles", image: LosAngeles },
  { name: "Berlin", image: Berlin },
  { name: "Barcelona", image: Barcelona },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function PopularDestinations() {
  return (
    <>
      <Typography
        fontSize={18}
        fontWeight={600}
        sx={{ opacity: 0.8, marginBottom: "20px" }}>
        Popular destinations from your city
      </Typography>
      <Box sx={{ width: "100%", padding: "20px" }}>
        <Slider {...sliderSettings}>
          {cities.map((city, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                textAlign: "center",
                padding: "0 5px",
              }}>
              <Box
                sx={{
                  position: "relative",
                  width: "95%",
                  height: "100px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}>
                {/* Image */}
                <img
                  src={city.image}
                  alt={city.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                />

                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 5,
                    left: "10%",
                    transform: "translateX(-10%)",
                    color: "white",

                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "12px",
                  }}>
                  {city.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
