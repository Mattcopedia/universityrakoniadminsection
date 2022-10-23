import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard'
import Login from 'components/Login'; 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    
import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import ResetPassword from 'components/ResetPassword';


import CreateRakoniAccount from 'pages/CreateRakoniAccount';
import SetUpDatabase from 'pages/SetUpDatabase';
import DatabaseEditAccount from 'pages/DatabaseEditAccount';
import SetUpDatabaseProfile from 'pages/SetUpDatabaseProfile';
import Activate from 'pages/Activate';
import ActivateProfile from 'pages/ActivateProfile';
import PasswordReset from 'pages/PasswordReset';
import NewRequestDetails from 'pages/NewRequestDetails';
import NewRequest from 'pages/NewRequest';
import RoutineCheck from 'pages/RoutineChecks';
import CreateSubdomain from 'pages/CreateASubDomain';




WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

   

    return ( 
        <>     

    
          
         <Route exact path="/login" component={Login} /> 
          <Route exact path="/createpassword" component={CreateLoginPassword} />  
          <Route exact path="/reset-password" component={ResetPassword} />   
          <Route exact path="/signup" component={SignupNow} />   
          
         
         
        <div className="md:ml-64 white "> 
        
        <Switch>
     
         <Route exact path="/" component={Dashboard} /> 

            <Route exact path="/create-rakoni-account" component={CreateRakoniAccount} />  
            <Route exact path="/setup-database" component={SetUpDatabase} />
            <Route exact path="/edit-account" component={DatabaseEditAccount} /> 
            <Route exact path="/setup-database-profile" component={SetUpDatabaseProfile} /> 
            <Route exact path="/activate-university" component={Activate} /> 
            <Route exact path="/activate-universityprofile" component={ActivateProfile} /> 
            <Route exact path="/password-reset" component={PasswordReset} />
            <Route exact path="/new-request-details" component={NewRequestDetails} /> 
            <Route exact path="/new-request" component={NewRequest} />
            <Route exact path="/routine-check" component={RoutineCheck} />
            <Route exact path="/create-sub-domain" component={CreateSubdomain} />            
        </Switch>         
        </div> 

          

        </>
   
    );
}

export default App; 

