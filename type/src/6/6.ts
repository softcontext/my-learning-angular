interface Food {
  name: string;
  calories: number;
}

function speak(food: Food): void {
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
  name: "ice cream",
  calories: 200
}

speak(ice_cream);



