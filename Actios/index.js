export const selectUser =(user)=>{
  console.log("selected User is :",user.firstName);
  return {
     type: 'SELECTED_USER',
     payload: user
  }
};
