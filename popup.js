document.getElementById('red').addEventListener('click', () => changeColor('red'));
document.getElementById('green').addEventListener('click', () => changeColor('green'));
document.getElementById('blue').addEventListener('click', () => changeColor('blue'));

function changeColor(color) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: setBackgroundColor,
      args: [color]
    });
  });
}

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}