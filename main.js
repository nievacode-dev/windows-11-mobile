const startMenu = document.getElementById("startMenu");
const startIcon = document.getElementById("startIcon");
const searchType = document.getElementById("searchType");
const trayBtn = document.getElementById("trayBtn");
const trayApp = document.getElementById("trayApp");
const widgetsIcon = document.getElementById("widgetsIcon");
const widgetsMenu = document.getElementById("widgetsMenu");
const searchIcon = document.getElementById("searchIcon");
const searchMenu = document.getElementById("searchMenu");
const searchMenuType = document.getElementById("searchMenuType");

startIcon.onclick = () => {
  if (startMenu.style.display === "none" || startMenu.style.display === "") {
    startMenu.style.display = "block";
  } else {
    document.addEventListener("click", (e) => {
      if (e.target !== startIcon && e.target !== startMenu && e.target !== searchType) {
        startMenu.style.display = "none";
        startMenu.style.animation = "slidedown 0.2s";
        setTimeout(() => {
          startMenu.style.animation = "startmenu 0.2s";
        }, 200);
      }
    });
    startMenu.style.display = "none";
    startMenu.style.animation = "slidedown 0.2s";
    setTimeout(() => {
      startMenu.style.animation = "startmenu 0.2s";
    }, 200);
  }
}

searchIcon.onclick = () => {
  if (searchMenu.style.display === "none" || searchMenu.style.display === "") {
    searchMenu.style.display = "block";
  } else {
    document.addEventListener("click", (e) => {
      if (e.target !== searchIcon && e.target !== searchMenu && e.target !== searchMenuType) {
        searchMenu.style.display = "none";
        searchMenu.style.animation = "slidedown 0.2s";
        setTimeout(() => {
          searchMenu.style.animation = "startmenu 0.2s";
        }, 200);
      }
    });
    searchMenu.style.display = "none";
    searchMenu.style.animation = "slidedown 0.2s";
    setTimeout(() => {
      searchMenu.style.animation = "startmenu 0.2s";
    }, 200);
  }
}

trayBtn.onclick = () => {
  if (trayApp.style.display === "none" || trayApp.style.display === "") {
    trayApp.style.display = "flex";
    trayBtn.style.animation = "trayclicked 0.2s";
    setTimeout(() => {
      trayBtn.style.transform = "rotate(180deg)";
      trayBtn.style.animation = "";
    }, 200);
  } else {
    trayBtn.style.backgroundColor = "";
    trayBtn.style.animation = "trayclicked 0.2s reverse";
    trayApp.style.display = "none";
    setTimeout(() => {
      trayBtn.style.animation = "";
      trayBtn.style.transform = "rotate(0deg)"
    }, 200);
  }
}

widgetsIcon.onclick = () => {
  if (widgetsMenu.style.display === "none" || widgetsMenu.style.display === "") {
    widgetsMenu.style.display = "flex";
  } else {
    widgetsMenu.style.display = "none";
    widgetsMenu.style.animation = "leftslide 0.2s";
    setTimeout(() => {
      widgetsMenu.style.animation = "widgetsmenu 0.2s";
    }, 200);
  }
}

// date and time system

// static times

// dynamic times

function dateTimes() {
  setInterval(() => {
    let getTime = new Date();
    let h = getTime.getHours();
    let m = getTime.getMinutes();
    let s = getTime.getSeconds();
    
    h = timeCheck(h);
    m = timeCheck(m);
    s = timeCheck(s);
    
    function timeCheck(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    time = h + ":" + m + ":" + s;
    
    document.getElementById("times").textContent = time;
    document.getElementById("timesWidgets").textContent = time;
    
    let dd = getTime.getDate();
    let mm = getTime.getMonth() + 1;
    let yyyy = getTime.getFullYear();
    
    dd = dd < 10 ? "0" + dd : dd;
    mm = mm < 10 ? "0" + mm : mm;
    
    var formattedDate = dd + "/" + mm + "/" + yyyy;
    
    document.getElementById("dates").textContent = formattedDate;
  }, 1000);
}

// submit test

const searchWidgets = document.getElementById("searchWidgets");

searchWidgets.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && searchWidgets.value === "Dev") {
    window.location.href = "https://github.com/";
  }
  else if (e.key === "Enter") {
    window.location.href = "https://google.com/search?q=" + searchWidgets.value;
  }
});

// tab system

//  getelementbyid by getelementsbyclassname

let el = document.getElementsByClassName("apps-ico");
for (var i = 0; i < el.length; i++) {
  var appsId = el[i].id;
  el[i].addEventListener("click", () => {
    /* console.log(el[i].alt);
     document.getElementById("tab").style.display = "block";
     document.getElementById("tabTitle").textContent = el[i].alt;
     let tabIcon = document.createElement("img");
     tabIcon.src = el[i].src;
     document.getElementById("tabContent").appendChild(tabIcon); */
    console.log("hdhdhdj");
    let tabWindow = document.createElement("div");
    let tabHeader = document.createElement("div");
    let tabFunction = document.createElement("div");
    let tabTitle = document.createElement("div");
    let tabContent = document.createElement("div");
    let closeTab = document.createElement("span");
    let minTab = document.createElement("span");
    let maxTab = document.createElement("span");
    
    tabWindow.appendChild(tabHeader);
    tabWindow.appendChild(tabContent);
    tabHeader.appendChild(tabFunction);
    tabHeader.appendChild(tabTitle);
    tabFunction.appendChild(minTab);
    tabFunction.appendChild(maxTab);
    tabFunction.appendChild(closeTab);
    
    tabWindow.classList.add("tab");
    tabHeader.classList.add("tab-header");
    tabFunction.classList.add("tab-function");
    tabContent.classList.add("tab-content");
    tabTitle.classList.add("tab-title");
    closeTab.classList.add("close-tab");
    minTab.classList.add("min-tab");
    maxTab.classList.add("max-tab");
    
    closeTab.textContent = "&times;";
    minTab.textContent = "_";
    maxTab.textContent = "&square;";
  });
}

// context menu

const contextMenu = document.getElementById("contextMenu");

document.addEventListener("dblclick", (e) => {
  contextMenu.style.display = "block";
  
  const leftX = e.pageX;
  const topY = e.pageY;
  
  contextMenu.style.top = topY + "px";
  contextMenu.style.left = leftX + "px";
});

document.addEventListener("click", () => {
  contextMenu.style.display = "none";
});

window.onload = dateTimes;

// cursor

const cursor = document.getElementById("cursor");

document.addEventListener("click", (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;
  
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
});

document.addEventListener("touchmove", (e) => {
  const touchInput = e.touches[0];
  
  const cursorX = touchInput.clientX;
  const cursorY = touchInput.clientY;
  
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
});

// refresh

const refresh = document.getElementById("refresh");

refresh.onclick = () => {
  window.location.reload();
}

// selection rectangle

document.addEventListener("touchstart", (event) => {
  const selectionRectangle = document.createElement("div");
  selectionRectangle.classList.add("selection-rectangle")
  document.body.appendChild(selectionRectangle);
  
  selectionRectangle.style.width = 0 + "px";
  selectionRectangle.style.height = 0 + "px";
  
  const firstPosX = event.clientX;
  const firstPosY = event.clientY;
  
  selectionRectangle.style.top = firstPosY + "px";
  selectionRectangle.style.left = firstPosX + "px";
  
  document.addEventListener("touchmove", (e) => {
    const lastPosX = e.clientX;
    const lastPosY = e.clientY;
    
    if ((firstPosX - lastPosX) < 0) {
      selectionRectangle.style.width = Math.round(lastPosX - firstPosX) + "px";
    } else {
      selectionRectangle.style.width = Math.round(firstPosX - lastPosX) + "px";
      selectionRectangle.style.left = lastPosX + "px";
    }
    
    if ((firstPosY - lastPosY) < 0) {
      selectionRectangle.style.height = Math.round(lastPosY - firstPosY) + "px";
    } else {
      selectionRectangle.style.height = Math.round(firstPosY - lastPosY) + "px";
      selectionRectangle.style.top = lastPosY + "px";
    }
  });
  
  document.addEventListener("touchend", () => {
    selectionRectangle.style.width = "0px";
    selectionRectangle.style.height = "0px";
    
    selectionRectangle.remove();
  });
});