import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import swal from 'sweetalert';





const ListenLogout = () => {

    const config = require('../.././config/default.json');
    const history = useHistory()

let token = sessionStorage.getItem('token');
  let decodedToken = jwt_decode(token);
  console.log("Decoded Token", decodedToken);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    console.log("Token expired.");
   
    sessionStorage.removeItem('token');
  

swal({
    title: "Session Expired",
    text: "Your session has expired, please login again to re-authenticate!",
    type: "info"
}).then(function() {
    axios.get(`${config.baseUrl}/logout`
    )
    .then(res => {
    const loggingOut = res.data
    console.log(loggingOut)
    })
    .catch(err => {
      console.log(err)
      history.push("/page-not-found")
    })

    window.location.href = '/login';
});
    
  } else {
    console.log("Valid token");   
    
  }
  return <div></div>;

}

export default withRouter(ListenLogout);