Notes:

- I don't have much experience using redux-saga (use redux-thunk) so I'm sure there are way better approaches to the ones I've taken
- One test is failing sporadically due to an issue with deep equality - didn't want to spend too much time figuring out why but would definitely fix in my normal day to day
- I've opted for loading all the data at once (at runtime) and manipulating it later on without any more API calls, seemed appropriate for this task but I realise it might not be ideal in every scenario