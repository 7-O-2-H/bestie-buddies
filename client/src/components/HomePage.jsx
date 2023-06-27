import React from "react";
import useAppData from "../hooks/useAppData";
import Slideshow from "./Slideshow";

export default function HomePage() {

  const slides = [
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic1.jpg?raw=true', title: 'Image 1'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic2.jpg?raw=true', title: 'Image 2'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic3.jpg?raw=true', title: 'Image 3'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic4.jpg?raw=true', title: 'Image 4'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic5.jpg?raw=true', title: 'Image 5'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/IMG-0142.jpg?raw=true', title: 'Image 6'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic7.jpg?raw=true', title: 'Image 7'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic8.jpg?raw=true', title: 'Image 8'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic9.jpg?raw=true', title: 'Image 9'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic10.jpg?raw=true', title: 'Image 10'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic11.jpg?raw=true', title: 'Image 11'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic12.jpg?raw=true', title: 'Image 12'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic13.jpg?raw=true', title: 'Image 13'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic14.jpg?raw=true', title: 'Image 14'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic15.jpg?raw=true', title: 'Image 15'},
    //{url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic%2025.jpg?raw=true', title: 'Image 16'},
    // {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic17.jpg?raw=true', title: 'Image 17'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic18.jpg?raw=true', title: 'Image 18'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic19.jpg?raw=true', title: 'Image 19'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic20.jpg?raw=true', title: 'Image 20'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic21.jpg?raw=true', title: 'Image 21'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic22.jpg?raw=true', title: 'Image 22'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic23.jpg?raw=true', title: 'Image 23'},
    // {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic24.png?raw=true', title: 'Image 24'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic%2025.jpg?raw=true', title: 'Image 25'},
    //{url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic%2025.jpg?raw=true', title: 'Image 26'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic27.jpg?raw=true', title: 'Image 27'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic28.jpg?raw=true', title: 'Image 28'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic%2029.jpg?raw=true', title: 'Image 29'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic30.jpg?raw=true', title: 'Image 30'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic31.jpg?raw=true', title: 'Image 31'},
    {url: 'https://github.com/7-O-2-H/bestie-buddies/blob/feature/slideshow/docs/pic32.jpg?raw=true', title: 'Image 32'},
  ];

  const containerStyles = {
    width: "60%",
    height: "600px",
    margin: "0 auto",
    padding: "80px 0 0 0",
  };

  const { reviews } = useAppData();

  return (
    <div style={containerStyles}>
      <Slideshow slides={slides} parentWidth={907} />
    </div>
  )
}