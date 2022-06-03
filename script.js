
const connectionStatus = async () => {
  try{
    const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jean_Froissart%2C_Chroniques%2C_154v%2C_12148_btv1b8438605hf336%2C_crop.jpg/300px-Jean_Froissart%2C_Chroniques%2C_154v%2C_12148_btv1b8438605hf336%2C_crop.jpg")
    return fetchResult.status >= 200 &&  fetchResult.status < 300;
  }catch (err){
    return false;   
  }
};

setInterval(async () => {
  const result = await connectionStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = result ? "Online" : "Offline"
},3000)

