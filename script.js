const sec = document.querySelector(".secs");
const hours = document.querySelector(".hours");
const min = document.querySelector(".min");

function tikTak() {
  let second = new Date().getSeconds(); //yerel saatini alıyorsun
  let minute = new Date().getMinutes(); //yerel saatini alıyorsun
  let hour = new Date().getHours(); //yerel saatini alıyorsun
  //console.log({ second, minute, hour });

  sec.style.transform = `rotate(${180 + second * 6}deg)`;
  min.style.transform = `rotate(${180 + minute * 6}deg)`;
  hours.style.transform = `rotate(${180 + hour * 30}deg)`;
}

setInterval(tikTak, 1000); //ssatimizi her 1000ms de bir oynatacağız
