

//user add note & add to local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addtxt.value
  }

  notesobj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  // localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  addTitle.value = "";
  console.log("notesobj");
  
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"  > ${element.text} </p>
            <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">Delete note</button>
      </div>
    </div>`;
  });
  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Please add notes`;
  }
 
}

//delete button
function deletenote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1)
  localStorage.setItem('notes', JSON.stringify(notesobj))
  shownotes()

}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){
    console.log('input event fired');
    let inputval = search.value.toLowerCase()
    let noteCard = document.getElementsByClassName('noteCard')
    Array.from(noteCard).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputval)){
            element.style.display= 'block'
        }
        else{
            element.style.display= 'none'
        }
    })
})

function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('lightblue') });

