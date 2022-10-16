const newFilter = (...args) => {
    // the args will be an array
    return args.filter(el=> el % 2 === 1)
  }
  
  console.log(newFilter(1,2,3,4))