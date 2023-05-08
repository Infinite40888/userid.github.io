const inputField = document.getElementById("input");
const totalCharacters = document.getElementById("total-characters");
const charactersWithoutSpace = document.getElementById(
  "characters-without-space"
);

inputField.addEventListener("input", () => {
  const text = inputField.value;
  const textWithoutSpace = text.replace(/\s+/g, "");
  const totalCharCount = text.length;
  const charCountWithoutSpace = textWithoutSpace.length;
  totalCharacters.textContent = totalCharCount;
  charactersWithoutSpace.textContent = charCountWithoutSpace;
});
