const profileDataArgs = process.argv.slice(2, process.argv.length)


const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
  });

  // Both above for each equals this as well because only one paramenter so brakcets are not needed. 
  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs)