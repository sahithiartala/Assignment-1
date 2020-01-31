const element = React.createElement("div", {
  class: "main"
}, React.createElement("div", {
  class: "wrapper"
}, React.createElement("div", {
  class: "boxed"
}, "SAHITHI ARTALA"), React.createElement("div", {
  class: "picture"
}, React.createElement("img", {
  src: "sahithi.jpg",
  alt: "picture"
})), React.createElement("p", {
  class: "description"
}, "Hi my name is sahithi, I am a computer science student masters student at san diego state university.My hobbies are listening to music,playing badminton and painting. I love to travel and explore different countries"), React.createElement("div", {
  class: "button"
}, React.createElement("button", {
  onclick: "window.location.href = 'https://github.com/';"
}, "VIEW MY GITHUB REPO"))));
ReactDOM.render(element, document.getElementById('contents'));