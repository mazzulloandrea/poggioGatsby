const getCookie = cName => {
  if (typeof window !== 'undefined') {
    const name = cName + '=';
    const cDecoded = decodeURIComponent(window.document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }
};

export default getCookie;
