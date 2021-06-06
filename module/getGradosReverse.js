const getGradosReverse = (num) => {
  num = num.split("°");
  return (
    num[0].match(/[-]*/g)[0] +
    (Number(num[0].match(/\d+[.]*\d*/g)[0]) +
      Number(num[1]) / 60 +
      Number(num[2]) / 3600)
  );
};

export default getGradosReverse;
