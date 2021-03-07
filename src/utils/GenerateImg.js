/*global chrome*/

function generateImg() {
  chrome.tabs.captureVisibleTab(function(screenshotUrl) { 
    const item = `var t = document.getElementsByTagName('img');
                for(var i = 0; i < t.length; i++) {
                    var img = t[i];            
                    img.src = '${screenshotUrl}';
                };`

    chrome.tabs.executeScript({code: item}); 

    
      });
}

export default generateImg;
