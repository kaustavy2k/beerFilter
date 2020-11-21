const wrapper = () => {
  const getallbeerandimgs = async () => {
    const detailsbeer = await fetch(
      " https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
    );
    const detailsimg = await fetch(
      " https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
    );

    const jsondetailsbeer = await detailsbeer.json();
    const jsondetailsimg = await detailsimg.json();
    div_create(jsondetailsbeer, jsondetailsimg);
  };
  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  const filterFunction = () => {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByClassName("inputoptions");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  };
  const div_create = (details, img) => {
    let d = document.getElementById("myDropdown");
    for (let i = 0; i < details.length; i++) {
      let node = document.createElement("DIV");
      node.className = "inputoptions";
      let imgnode = document.createElement("IMG");
      let infonode = document.createElement("DIV");
      let definode1 = document.createElement("DIV");
      let definode2 = document.createElement("DIV");
      let definode3 = document.createElement("DIV");
      let definode4 = document.createElement("DIV");
      definode1.textContent = details[i].name;
      definode2.textContent = `Style: ${details[i].style}`;
      definode3.textContent = `Ounces: ${details[i].ounces}`;
      definode4.textContent = `id: ${details[i].id} abv: ${details[i].abv} ibu: ${details[i].ibu}`;
      imgnode.setAttribute("src", img[i % 5].image);
      imgnode.setAttribute("height", "80px");
      imgnode.setAttribute("width", "80px");
      infonode.className = "options";
      infonode.appendChild(definode1);
      infonode.appendChild(definode2);
      infonode.appendChild(definode3);
      infonode.appendChild(definode4);
      node.appendChild(imgnode);
      node.appendChild(infonode);
      d.appendChild(node);
    }
  };
  getallbeerandimgs();
  document.querySelector(".dropbtn").addEventListener("click", () => {
    myFunction();
  });
  document.getElementById("myInput").addEventListener("keyup", () => {
    filterFunction();
  });
};
wrapper();
