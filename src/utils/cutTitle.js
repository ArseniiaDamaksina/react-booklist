const cutTitle = (str) => {
  let symbols = /;|:|,|—|\(/;
  let splitTitle = str.split(symbols);
  return splitTitle[0];
};

export default cutTitle;