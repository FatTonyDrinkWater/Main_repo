const first = () => {
  setTimeout(() => {
    console.log("First ASYNC function");
  }, 2000);
};

const second = () => {
  console.log("Second START");
  first();
  console.log("The End");
};

second();

//Triangle shape calling CALLBACK HELL

function getRecipe() {
  setTimeout(() => {
    const recipeID = [1, 2, 3, 4];
    console.log(recipeID);
    setTimeout(
      (id) => {
        const recipe = {
          title: "Soup",
          time: "30 min",
        };
        console.log(`${id}: ${recipe.title}`);
        setTimeout(
          (time) => {
            const recipe2 = {
              title: "Pizza",
              time: "45 min",
            };
            console.log(recipe);
          },
          1500,
          recipe.time
        );
      },
      1500,
      recipeID[2]
    );
  }, 1500);
}
getRecipe();

// Promises

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 1000);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {
        title: "Soup",
        publisher: "Jonas",
      };
      resolve(`${ID}: ${recipe.title}`);
    }, 1500, recID);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe = {
        title: "Pizza",
        publisher: "Jonas",
      };
      resolve(`${pub}: ${recipe.title}`);
    }, 1500, publisher)
  });
}

// getIDs
//   .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2])
//   })
//   .then(recipe => {
//     console.log(recipe);
//     return getRelated('Jonas');
//   })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(error => {
//     console.log("error");
//   })

// 
async function getRecipesAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated('Jonas');
  console.log(related);

  return recipe;
}

getRecipesAW().then(result => console.log(`${result} is the best`));


// FETCH

fetch('https://www.metaweather.com/api/location/2487956/');
