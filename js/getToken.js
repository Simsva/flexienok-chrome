chrome.runtime.sendMessage(document.currentScript.getAttribute("flexienokId"), {
  auth: localStorage["default_auth_token"],
});
