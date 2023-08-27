let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn");
const deleteEl = document.getElementById("delete-btn")
const tabBtn =  document.getElementById("save-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
 
 if (leadsFromLocalStorage){
      myLeads = leadsFromLocalStorage
      render(myLeads)
 }

 const tabs = [
      {url: "https://www.linkedin.com/in/per-harald-borgen/"}
  ]
  tabBtn.addEventListener("click", ()=>{
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads)
        })
  })
function render(leads){
      let listItems = ""
for (let i = 0; i < leads.length; i++) {
      listItems += `
      <li>
      <a target='_blank' href='${leads[i]}'> ${leads[i]}</a>
      </li>
      `
      //const li = document.createElement("li")
     // li.textContent = myLeads[i]
      //ulEl.append(li)
}

ulEl.innerHTML = listItems
}

 deleteEl.addEventListener("dblclick", ()=>{
      localStorage.clear()
      myLeads = []
      render(myLeads)
 })

function saveLead() {
 myLeads.push(inputEl.value);
 inputEl.value = "";

localStorage.setItem("myLeads", JSON.stringify(myLeads));

 render(myLeads)
}
inputBtn.addEventListener("click", saveLead);



