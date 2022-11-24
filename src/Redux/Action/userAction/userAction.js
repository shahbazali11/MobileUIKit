const setName = text => {
  return {type: 'name', text};
};
const setEmail = text => {
  return {type: 'email', text};
};
const setPassword = text => {
  return {type: 'password', text};
};
const setUserData = text => {
  console.log('hasjf', text);
  return {type: 'UserData', text};
};
export {setName, setEmail, setPassword, setUserData};
