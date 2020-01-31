const element = React.createElement("div", {
  class: "wrapper"
}, React.createElement("h3", null, "SAHITHI ARTALA"), React.createElement("img", {
  src: "sahithi.jpg",
  alt: "picture"
}), React.createElement("p", null, "Hi my name is sahithi, I am a computer science  masters student at san diego state university.My hobbies are listening to music,playing badminton and painting. I love to travel and explore different countries."), React.createElement("button", null, " ", React.createElement("a", {
  href: "https://github.com/sahithiartala/Assignment-1.git"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('contents'));