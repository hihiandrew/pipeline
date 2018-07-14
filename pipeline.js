const operations = {
  set: (input, arg) => {
    return arg * 1;
  },
  add: (input, arg) => {
    //we need to add to something
    if (typeof input === 'undefined') {
      throw 'input required';
    }
    return input + arg * 1;
  },
  mult: (input, arg) => {
    //we need to multiply by something
    if (typeof input === 'undefined') {
      throw 'input required';
    }
    return input * arg * 1;
  },
};

const pipeline = function(str) {
  let result = 0;
  if (!str) {
    return 'input required';
  }
  let arr = str.split(' | ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(' ');
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 'set' || arr[i][0] == 'add') {
      result = operations.add(result, arr[i][1]);
    }
    if (arr[i][0] == 'mult') {
      result = operations.mult(result, arr[i][1]);
    }
  }

  return result;
};

module.exports = pipeline;
