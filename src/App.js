import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home'
import JobSearch from './components/Pages/JobSearch'
import Training from './components/Pages/Training'
import Sponshirship from './components/Pages/Sponshirship'
import Visa from './components/Pages/Visa'
import Abroad from './components/Pages/Abroad'
import Resume from './components/Pages/Resume'
import Forum from './components/Pages/Forum'
import Referal from './components/Pages/Referal';
import Companies from './components/Pages/Companies'
import Blog from './components/Pages/Blog'
import BlogContent from './components/Pages/BlogContent';
import JobDetails from './components/Pages/JobDetails';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Pricing from './components/Pages/Pricing';
import Home2 from './components/Pages/Home2';
import Category from './components/Category'
import Companiestwo from './components/Companies_two';
import Jobs from './components/Jobs_types';
import Course from './components/Pages/Course_details';
import Profile from './components/Profiles';
import UserProfile from './components/UserProfile';
import PostJob from './components/Pages/PostJob';

import ProfileEdit from './components/Pages/Profile_Edit';
import Sidebar from './components/Pages/dashboard/Sidebar';
import VerticalTabs from './components/Pages/dashboard/VerticalTabs';





const App = () => {
  return (<>

    <Router>
      <Navbar />

      <scrollToTop>

        <Routes>
         <Route path="/" element={<Home2 />} />
          <Route path='/Home2' element={<Home />} />
          
          <Route path='/JobSearch' element={<JobSearch />} />
          <Route path='/Training' element={<Training />} />
          <Route path='/Sponshirship' element={<Sponshirship />} />
          <Route path='/Visa' element={<Visa />} />
          <Route path='/Abroad' element={<Abroad />} />
          <Route path='/Resume_Search' element={<Resume />} />
          <Route path='/Forum' element={<Forum />} />
          <Route path='/Referal' element={<Referal />} />
          <Route path='/Companies' element={<Companies />} />
          <Route path='/Companies_two' element={<Companiestwo />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/BlogContent' element={<BlogContent />} />
          <Route path='/Job_Details' element={<JobDetails />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Jobs' element={<Jobs />} />
          <Route path='/Course' element={<Course />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/Post-Job' element={<PostJob />} />
          <Route path='/Profile-Edit' element={<ProfileEdit />} />

          <Route path='/Dashboard' element={<Sidebar />} />
          <Route path='/Tabs' element={<VerticalTabs />} />

        </Routes>
      </scrollToTop>
      <Footer />

    </Router>



  </>

  )
}

export default App