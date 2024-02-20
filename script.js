
const check = () =>{
  if (document.getElementById("user-input").value === ""){
    alert("Please provide a phone number");
  } else {
    if(checkNumber(document.getElementById("user-input").value)){
      document.getElementById("results-div").innerHTML += 
      `<p>Valid US number: ${document.getElementById("user-input").value}</p>`;
    } else {
      document.getElementById("results-div").innerHTML += 
      `<p>Invalid US number: ${document.getElementById("user-input").value}</p>`;
    } 
  }
}

const clear = () => {
  document.getElementById("results-div").innerHTML = "";
}

const checkNumber = (num) => {
  const regexPatterns = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    
  ]

  return regexPatterns.some((pattern) => pattern.test(num));
}

document.getElementById("check-btn").addEventListener("click", check);
document.getElementById("clear-btn").addEventListener("click", clear);
