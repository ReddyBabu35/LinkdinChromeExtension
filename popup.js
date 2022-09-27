// Inject the payload.js script into the current tab after the popout has loaded

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
	  target: {tabId: tab.id},
	  files: ['payload.js']
	});
  });