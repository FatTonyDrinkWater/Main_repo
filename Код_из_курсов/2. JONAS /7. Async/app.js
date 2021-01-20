const second = () => {
  setTimeout(() => {
    console.log("Hey Async!");
  }, 2000);
};
const first = () => {
  console.log("Hey there!");
  second();
  console.log("The end");
};

first();

// The old way (CALLBACK HELL)

function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 454, 555];
    console.log(recipeID);
    setTimeout(
      (id) => {
        const recipe = {
          title: "Fresh tomato",
          publisher: "Eric Smith",
        };
        console.log(`${id}: ${recipe.title}`);

        setTimeout(
          (publisher) => {
            const recipe2 = {
              title: "Pizza",
              publisher: `${publisher}`,
            };
            console.log(recipe2);
          },
          1500,
          recipe.publisher
        );
      },
      1000,
      recipeID[2]
    );
  }, 1500);
}

getRecipe();

// PROMISES

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 454, 555]);
  }, 1500);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato",
          publisher: "Me",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((res, rej) => {
    setTimeout(
      (pub) => {
        const recipe3 = {
          title: "Pizza",
          publisher: "Eric Smith",
        };
        res(`${pub} : ${recipe3.title}`);
      },
      1000,
      publisher
    );
  });
};
// Consume promises
getIDs
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getRelated("Eric Smith");
  })
  .then((publisher) => {
    console.log(publisher);
  })
  .catch((error) => {
    console.log(error);
  });

// Async / Await - easy way to consume promises

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 454, 555]);
  }, 1500);
});
// Асинхронная функция. Работает на фоне
async function getRecipesAW() {
  const IDs = await getIDs; // Wait for getIDs, and assign result to id var.
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated("Eric Smith");
  console.log(related);
}
getRecipesAW();

// AJAX calls fetch APIs

fetch("https://www.metaweather.com/api/location/2487956/");
//Не работает без корса

// with fetch
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
  .then((res) => res.json())
  .then((data) => {
    const dayMeal = data.meals[0];
    console.log(dayMeal);
  });

async function getMeal() {
  const result = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"
  );
  const data = await result.json();
  console.log(data.meals[0]);
}

getMeal();
