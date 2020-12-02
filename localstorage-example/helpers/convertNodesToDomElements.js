function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function dashToCamelCase(dashedWord) {
  const dashedWordArray = dashedWord.split('-');
  const result = [];

  if (dashedWordArray.length) {
    dashedWordArray.map((item, index) => {
      if (index > 0) dashedWordArray[index] = capitalizeFirstLetter(item);
    });
  }
  result.push(dashedWordArray.join(''));
  return String(result);
}

function convertNodesToDomElements(querySelectorAllDataId) {
  const nodes = document.querySelectorAll('['+ querySelectorAllDataId +']');
  const domElements = {};
  
  if (!nodes.length) return {};
  
  nodes.forEach((item) => {
    const keyName = dashToCamelCase(item.dataset.id);
    Object.assign(domElements, { [keyName]: document.querySelector('['+ querySelectorAllDataId +'="'+ item.dataset.id +'"]')});
  });
  return domElements;
}
