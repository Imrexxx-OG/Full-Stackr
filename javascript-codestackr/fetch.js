fetch('fetch.json')
  .then(res => {
    console.log(res)
    return res.json();
  })
  .then(json => HTMLFormControlsCollection.log(json));