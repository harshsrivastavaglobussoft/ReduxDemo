export default function(state=null,action){

   switch (action.type) {

     case "SELECTED_USER":
          console.log('payload of selected user : +++++++++++++' + action.payload.firstName);
          return action.payload;
          break;
   }
   return state;
}
