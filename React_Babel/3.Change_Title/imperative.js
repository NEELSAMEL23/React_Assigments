let CountUpdate = 0;
document.getElementById("changeTitle").addEventListener("click", () => {
  document.title = "Imperative Approach";
  CountUpdate++;

  document.getElementById(
    "TitleCount"
  ).textContent = `Title Get Updated ${CountUpdate}`;
});
 

