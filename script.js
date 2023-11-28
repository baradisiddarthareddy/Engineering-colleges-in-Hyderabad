function loadWebsite(url,name) {
  const splitScreens = document.getElementById('splitScreens');
  
  // Check if a split screen for this URL already exists
  const existingSplitScreens = document.querySelectorAll('.split-screen iframe[src="' + url + '"]');
  if (existingSplitScreens.length > 0) {
    // If a split screen for this URL already exists, don't create a new one
    return;
  }

  const newSplitScreen = document.createElement('div');
  newSplitScreen.classList.add('split-screen');

  const header = document.createElement('header');
  header.innerText = name;
  newSplitScreen.appendChild(header);

  const iframe = document.createElement('iframe');
  iframe.src = url;
  newSplitScreen.appendChild(iframe);

  const footer = document.createElement('footer');
  footer.innerText = name;
  newSplitScreen.appendChild(footer);

  splitScreens.appendChild(newSplitScreen);
}
