import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Document from 'pages/Document';
import GpaTool from 'pages/GpaTool';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result';  
import CourseRegistration from 'pages/CourseRegistration';
import StudentHelpDesk from 'components/StudentHelpDesk';
import StudentUnionAffairs from 'components/StudentUnionAffairs';
import SocialMedia from 'components/SocialMedia';
import Login from 'components/Login'; 
import PrintOutForm from 'components/PrintOutComponent/PrintOutForm';

 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    

import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import CourseTimeTables from 'components/CourseTimeTable';
import Examtimetable from "components/Examtimetable"
import UniversityMaps from 'components/UniversityMaps';
import ProfileEdit from 'components/ProfileComponents/ProfileEdit';
import EditPassword from 'components/ProfileComponents/EditPassword';
import EditMedia from 'components/ProfileComponents/EditMedia';
import SearchYear from "components/ResultsComponents/SearchYear"
import YourResult from 'components/ResultsComponents/YourResult';
import OutstandingResult from 'components/ResultsComponents/OutstandingResult';
import SubmitCourseForm from 'components/CoureRegistrationFormComponent/SubmitCourseForm';
import PrintOutSelectForm from 'components/PrintOutComponent/PrintOutSelectForm';
import PrintOutFormTable from 'components/PrintOutComponent/PrintOutFormTable';
import CGPACalculator from 'components/CGPAComponent/CGPACalculator';
import CGPAForecaster from 'components/CGPAComponent/CGPAForeCaster';
import CGPAGoalSetter from 'components/CGPAComponent/CGPAGoalSetter';
import CGPACalculatorinput from 'components/CGPAComponent/CGPACalculatorInput';
import CGPAGoalSetterInput from 'components/CGPAComponent/CGPAGoalSetterInput';
import CGPAForecasterInput from 'components/CGPAComponent/CGPAForecasterInput';
import UploadDoc from 'components/DocumentComponents/UploadDoc';
import Maps from 'components/Maps';
import SignUpTest from 'auth/SignUptest';
import Logintest from 'auth/Logintest';
import LoginHomePageTest from 'auth/LoginHomePageTest';
import ResetPassword from 'components/ResetPassword';
import ResultAmendment from 'components/ResultsComponents/ResultAmendment';
import ResultAmendmentSuccessful from 'components/ResultsComponents/ResultAmendmentSuccessful';
import RegisterStudent from 'components/StudentComponent/RegisterStudent';
import ResultHistory from 'components/StudentComponent/ResultHistory';
import UploadInDoc from 'components/DocumentComponents/IndividualDoc';
import BrowseUploadedDoc from 'components/DocumentComponents/UploadedDoc';
import ViewDoc from 'components/DocumentComponents/ViewDoc';
import FilterResult from 'components/ResultsComponents/FilterResult';
import FilterYear from 'components/ResultsComponents/FilterYear';
import FilterResult2 from 'components/ResultsComponents/FilterResult2';
import Unblocking from 'components/StudentComponent/Unblocking';
import CourseRegStats from 'components/StudentComponent/CourseRegStats';
import CourseUnit from 'components/CourseUnit/CourseUnit';
import CreateCourse from 'components/CreateCourse/CreateCourse';
import Activate from 'components/StudentComponent/Activate';
import ActivateProfile from 'components/StudentComponent/ActivateProfile';
import UnblockProfile from 'components/StudentComponent/UnblockProfile';
import UnBlock from 'components/StudentComponent/UnBlock';
import Fees from "components/Fees/Fees"
import UpdateFees from 'components/Fees/UpdateFees';
import LecturerAccount from 'components/CreateAccount';
// import { PrivateRoute } from './auth/PrivateRoute';
import LecturerActivate from "components/LecturerComponent/LecturerActivate"
import LecturerActivateProfile from "components/LecturerComponent/LecturerActivateProfile"
import LecturerList from 'components/LecturerComponent/LecturerList';
import ResultUploadSummary from 'components/LecturerComponent/ResultUploadSummary';
import MasterSheet from "components/MasterSheet/MasterSheet"
import MasterSheetMode from 'components/MasterSheet/MasterSheetMode';
import ResetStudentPassword from "components/StudentComponent/ResetPassword"
import BiodataCorrections from 'components/StudentComponent/BiodataCorrections';
import BiodataCorrrectionsProfile from 'components/StudentComponent/BiodataCorrectionsProfile';
import UploadStudentDoc from 'components/StudentComponent/UploadStudentDoc';
import LecturerBiodataCorrections from 'components/LecturerComponent/LecturerBiodataCorrection';
import LecturerBiodataProfile from 'components/LecturerComponent/LecturerBiodataProfile';
import CourseAllocation from 'components/LecturerComponent/CourseAllocation';
import AmendmentApprovalList from 'components/LecturerComponent/AmendmentapprovalList';
import AmendmentApproval from 'components/LecturerComponent/AmendmentApproval';
import ResetLecturerPassword from 'components/LecturerComponent/LecturerPassword';
import CreateNewAccount from 'pages/CreateNewAccount';
import ResetUploadQuota from 'components/LecturerComponent/ResetUploadquota';
import SetCountDown from 'components/AdministrativePortal/SetCountDown';
import ShowResult from 'components/AdministrativePortal/ShowResult';
import ShowLecturer from 'components/AdministrativePortal/ShowLecturer';
import PublicService from 'components/AdministrativePortal/PublicService';
import PublicServiceEdition from 'components/AdministrativePortal/PublicServiceEdition';
import ActivateNewSemester from 'components/AdministrativePortal/ActivateNewSemester';
import BulkSmsEdition from 'components/AdministrativePortal/BulkSmsEdition';
import BulkSms from "components/AdministrativePortal/BulkSms"
import ImportNewStudent from 'components/AdministrativePortal/ImportNewStudent';
import CreateNewDepartment from 'components/AdministrativePortal/CreateNewDepartment';
import CreateNewProgram from 'components/AdministrativePortal/CreateNewProgram';
import CreateNewCourse from 'components/AdministrativePortal/CreateNewCourse';
import SettingsProfile from 'components/Settings/SettingsProfile';
import SettingsContact from 'components/Settings/SettingsContact';
import SettingsSocialMedia from 'components/Settings/SettingsSocialMedia';
import SettingsChangePassword from 'components/Settings/ChangePassword';
import DisplayPreference from 'components/Settings/DisplayPreference';




WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

   

    return ( 
        <>     

    
          
         <Route exact path="/login" component={Login} /> 
         <Route exact path="/logintest" component={Logintest} />   
         <Route exact path="/signup" component={SignupNow} />  
         <Route exact path="/signuptest" component={SignUpTest} />  
         <Route exact path="/homepagetest" component={LoginHomePageTest} />  
        

          <Route exact path="/createpassword" component={CreateLoginPassword} />  
          <Route exact path="/reset-password" component={ResetPassword} />   
         
         
        <div className="md:ml-64 white "> 
        
        <Switch>
        {/* <PrivateRoute path="/" exact>
                    <Dashboard />
                    </PrivateRoute> */} 
         <Route exact path="/" component={Dashboard} /> 
            <Route exact path="/document" component={Document} />
            <Route exact path="/gpatool" component={GpaTool} />
            <Route exact path="/printout" component={PrintOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/help" component={StudentHelpDesk} />
            <Route exact path="/coursereg" component={CourseRegistration} />  
            <Route exact path="/studentunionaffairs" component={StudentUnionAffairs} /> 
            <Route exact path="/social-media" component={SocialMedia} /> 
            <Route exact path="/coursetimetable" component={CourseTimeTables} />   
            <Route exact path="/examtimetable" component={Examtimetable} />  
            <Route exact path="/maps" component={UniversityMaps} />  
            <Route exact path="/profile-edit" component={ProfileEdit} /> 
            <Route exact path="/editpassword" component={EditPassword} /> 
            <Route exact path="/editmedia" component={EditMedia} />  
            <Route exact path="/search-year" component={SearchYear} />  
            <Route exact path="/your-result" component={YourResult} /> 
            <Route exact path="/filter-year" component={FilterYear} />  
            <Route exact path="/filter-result" component={FilterResult} />  
            <Route exact path="/filter-result2" component={FilterResult2} />   
            <Route exact path="/outstanding-result" component={OutstandingResult} />  
            <Route exact path="/submit-course-form" component={SubmitCourseForm} />   
            <Route exact path="/printoutform" component={PrintOutForm} /> 
            <Route exact path="/printoutselectform" component={PrintOutSelectForm} /> 
            <Route exact path="/printoutformtable" component={PrintOutFormTable} /> 
            <Route exact path="/cgpa-calculator" component={CGPACalculator} /> 
            <Route exact path="/cgpa-forecaster" component={CGPAForecaster} /> 
            <Route exact path="/cgpa-goalsetter" component={CGPAGoalSetter} /> 
            <Route exact path="/cgpa-cal-input" component={CGPACalculatorinput} />  
            <Route exact path="/cgpa-goalsetter-input" component={CGPAGoalSetterInput} /> 
            <Route exact path="/cgpa-forecaster-input" component={CGPAForecasterInput} /> 
            <Route exact path="/upload-doc" component={UploadDoc} />     
            <Route exact path="/upload-ind-doc" component={UploadInDoc} />  
            <Route exact path="/loadmaps" component={Maps} />  

            <Route exact path="/result-amendment" component={ResultAmendment} />
            <Route exact path="/result-amendment-sucessfully" component={ResultAmendmentSuccessful} />
            <Route exact path="/register-student" component={RegisterStudent} />
            <Route exact path="/result-history" component={ResultHistory} />
            <Route exact path="/browse-uploaded-doc" component={BrowseUploadedDoc} />
            <Route exact path="/view-doc" component={ViewDoc} />
            <Route exact path="/unblocking" component={Unblocking} /> 
            <Route exact path="/course-reg-stats" component={CourseRegStats} /> 
            <Route exact path="/course-unit" component={CourseUnit} />  
            <Route exact path="/create-course" component={CreateCourse} />  
            <Route exact path="/activate" component={Activate} /> 
            <Route exact path="/activate-profile" component={ActivateProfile} />
            <Route exact path="/unblock" component={UnBlock} /> 
            <Route exact path="/unblock-profile" component={UnblockProfile} /> 
            <Route exact path="/fees" component={Fees} /> 
            <Route exact path="/update-fees" component={UpdateFees} /> 
            <Route exact path="/create-account" component={LecturerAccount} /> 
            <Route exact path="/lecturer-activateprofile" component={LecturerActivateProfile} /> 
            <Route exact path="/lecturer-activate" component={LecturerActivate} /> 
            <Route exact path="/lecturer-list" component={LecturerList} /> 
            <Route exact path="/result-upload-summary" component={ResultUploadSummary} /> 
            <Route exact path="/master-sheet" component={MasterSheet} /> 
            <Route exact path="/master-sheetmode" component={MasterSheetMode} /> 
            <Route exact path="/reset-studentpassword" component={ResetStudentPassword} /> 
            <Route exact path="/biodata-correction" component={BiodataCorrections} /> 
            <Route exact path="/biodata-correctionprofile" component={BiodataCorrrectionsProfile} /> 
            <Route exact path="/upload-student-doc" component={UploadStudentDoc} /> 
            <Route exact path="/lecturer-biodata" component={LecturerBiodataCorrections} /> 
            <Route exact path="/lecturer-biodataprofile" component={LecturerBiodataProfile} /> 
            <Route exact path="/course-allocation" component={CourseAllocation} /> 
            <Route exact path="/amendment-approval" component={AmendmentApproval} /> 
            <Route exact path="/amendment-approval-list" component={AmendmentApprovalList} /> 
            <Route exact path="/reset-lecturer-password" component={ResetLecturerPassword} /> 
            <Route exact path="/create-new-account" component={CreateNewAccount} /> 
            <Route exact path="/reset-upload-quota" component={ResetUploadQuota} />
            <Route exact path="/setcountdown" component={SetCountDown} />
            <Route exact path="/showresult" component={ShowResult} />
            <Route exact path="/showlecturer" component={ShowLecturer} />
            <Route exact path="/public-service" component={PublicService} />
            <Route exact path="/public-service-edition" component={PublicServiceEdition} />
            <Route exact path="/activate-new-semester" component={ActivateNewSemester} />
            <Route exact path="/bulk-sms-edition" component={BulkSmsEdition} />
            <Route exact path="/bulk-sms" component={BulkSms} />
            <Route exact path="/import-new-student" component={ImportNewStudent} />  
            <Route exact path="/create-new-department" component={CreateNewDepartment} />   
            <Route exact path="/create-new-programme" component={CreateNewProgram} /> 
            <Route exact path="/create-new-course" component={CreateNewCourse} /> 
            <Route exact path="/settings-profile" component={SettingsProfile} /> 
            <Route exact path="/settings-contact" component={SettingsContact} /> 
            <Route exact path="/settings-social-media" component={SettingsSocialMedia} />  
            <Route exact path="/settings-change-password" component={SettingsChangePassword} /> 
            <Route exact path="/display-preference" component={DisplayPreference} />  
            
        </Switch>         
        </div> 

          

        </>
   
    );
}

export default App; 

