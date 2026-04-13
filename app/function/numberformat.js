const formatnumber = (value) => {
        const number = Number(value.toString().replace(/\./g, ""));
  if (!value) return "";
  return new Intl.NumberFormat("id-ID").format(number);
};

function parseIDR(value) {
  return Number(value.replace(/\./g, ""));
}

export{formatnumber,parseIDR}
