const formatAuthorName = (name) => {
  if (!name) return "Folklore";
  let parts = name.split(/,|\(/).map((part) => part.trim());
  let result = [parts[1], parts[0]].join(" ");
  return result;
};

export default formatAuthorName;