const textSelector = (textObject) => {
  let textString = "";

  for (const [key, value] of Object.entries(textObject)) {
    const formattedKey = key.replace(/_/g, ' ');
    textString += `${formattedKey}\n${value}\n`;
  }
  return textString;
};

export default textSelector;