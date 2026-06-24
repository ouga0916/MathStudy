const issaved = localStorage.getItem("userMaking");

if (issaved) {
  userMaking = JSON.parse(saved);
} else {
  userMaking = {
    min: 0,
    max: 0,
    xMin: 0,
    xMax: 0,
    yMin: 0,
    yMax: 0
  };
}

console.log(userMaking);
//localStorage.setItem ("user_renritsu",JSON.stringify(userMaking));
