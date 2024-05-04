// Перероби код так, щоб усі дані збиралися
// одночасно і приходили у вигляді масиву
const getData = () =>
  new Promise(res => {
    setTimeout(() => {
      const data = 1;
      console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise(res => {
    setTimeout(() => {
      const data = 2;
      console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise(res => {
    setTimeout(() => {
      const data = 3;
      console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise(res => {
    setTimeout(() => {
      const data = 4;
      console.log(data);
      res(data);
    }, 1000);
  });

const arr = [getData(), getNewData(), getAnotherData(), getLastData()];
Promise.all(arr)
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.log(err);
  });
