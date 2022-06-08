chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set(
      {color: '#333'}, 
      function() {
        console.log('The color is green.');
      }
    );

    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
    
    chrome.contextMenus.create({

      id: 'MarkDownLink',
      title: 'MarkDownのリンク形式で取得',
      contexts: ["all"],
       //選択しているときのみメニューに表示される
        //onclick:function() 
      //   { //クリックされた際のアクション
      //     let color = '#333';
      //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      //       chrome.tabs.executeScript(
      //         tabs[0].id,
      //         {code: 'document.getElementById(\'main\').style.backgroundColor = "#333";'},
      //         );
      //         chrome.tabs.executeScript(
      //           tabs[0].id,
      //           {code: 'document.getElementById(\'main\').style.color = "#FFFFFF";'},
      //           );
      //     });
      // }
    });
  
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if(info.menuItemId=="MarkDownLink"){
    
      let color = '#333';
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
              tabs[0].id,
              {code: 'document.getElementById(\'main\').style.backgroundColor = "#333";'},
              );
              chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.getElementById(\'main\').style.color = "#4aa34a";'},
                );
                
          });
    
  };
});
