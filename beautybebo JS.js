function toggleReadMore() {
    const readMoreContent = document.getElementById("read-more-content");
    const button = document.getElementById("read-more-button");
  
    if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
      readMoreContent.style.display = "inline"; 
      button.textContent = "Read Less";
    } else {
      readMoreContent.style.display = "none"; 
      button.textContent = "Read More";
    }
  }
  
  
  


