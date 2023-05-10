function search_recipe() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let recipes = document.querySelectorAll('#list figure');
  
  recipes.forEach(recipe => {
      let title = recipe.querySelector('.featuredtitle').innerHTML.toLowerCase();
      if (title.includes(input)) {
          recipe.style.display = "block";
      } else {
          recipe.style.display = "none";
      }
  });
}

const viewRecipeBtns = document.querySelectorAll('.button');
const recipeCards = document.querySelectorAll('.recipe-card');

viewRecipeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const recipeId = btn.dataset.id;
    const recipeDetails = document.querySelector(`#recipe-details-${recipeId}`);
    recipeDetails.style.display = 'block';
  });
});

recipeCards.forEach(card => {
  const closeBtn = card.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    const recipeId = closeBtn.dataset.id;
    const recipeDetails = document.querySelector(`#recipe-details-${recipeId}`);
    recipeDetails.style.display = 'none';
  });
});

