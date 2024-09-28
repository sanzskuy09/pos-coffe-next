const convertToRupiah = (number, digit) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: digit ? digit : 0,
  }).format(number);
};

export default convertToRupiah;
