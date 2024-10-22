import Footer from "../Footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './experiments.css';

const Head2 = ({ toggleSidebar }) => (
  <div>
    <div className="header-head">
      <div className="left-head">
        <img className="vl-logo" src="/Sources/rbulogo.jpg" alt="Virtual Labs logo" />
      </div>
      <div className="right-head">
        <form>
          <input type="search" name="search-bar" id="searching" placeholder="Search lab" />
        </form>
      </div>
    </div>
    <div className="top-bar">
      <div className="left-section">
        <button className="hamburger" onClick={toggleSidebar}>&#9776;</button>
        <Link to="/">Home</Link>
      </div>
      <h1>DATA STRUCTURE 1</h1>
      <Link to="/contact">Contact Us</Link>
    </div>
  </div>
);

const Sidebar = ({ handleOptionClick }) => (
  <div className="toggle-section">
    <ul>
      <li onClick={() => handleOptionClick('Introduction')}>Introduction</li>
      <li onClick={() => handleOptionClick('Objective')}>Objective</li>
      <li onClick={() => handleOptionClick('List of Experiments')}>List of Experiments</li>
      <li onClick={() => handleOptionClick('Course Outcome')}>Course Outcome</li>
      <li onClick={() => handleOptionClick('Feedback')}>Feedback</li>
    </ul>
  </div>
);

const MainContent = ({ activeContent, sidebarOpen }) => {
  const renderContent = () => {
    switch (activeContent) {
      case 'Introduction':
        return (
          <div className='intro'>
            <h1 className='heading'> Data Structures Lab </h1>
            <p className="para"> Welcome to the Data Structures Lab developed at RCOEM. 
                Data Structures (also called Data Structures and Algorithms 
                in some places) is a core course in all computer science 
                undergraduate curriculum. The course is the basis for understanding 
                several data structures and also algorithms that operate on them. 
                The associated lab in university curricula focuses on implementation 
                of algorithms operating on the data structures, i.e., coding programs 
                on the data structures and algorithms. As a result students are often 
                unable to understand or show the execution of an algorithm on a given 
                data structure and write code effectively. Students an opportunity for 
                learning and better understanding of using algorithms.</p>
          </div>
        );
      case 'Objective':
        return (
          <div className='intro'>
            <h1 className='heading'> Data Structures Lab </h1>
            <p className="para">The Virtual Lab for Data Structures will focus on creating an 
                environment where the student interactively explores data structures. 
                The role of this Virtual Labs is to complement the lectures and reading 
                material and the programming lab in three ways :
                </p>
                <ul className="list">
                    <li>1. Present visual animations of data structures</li>
                    <li>2. Allow students to interactively execute algorithms in these data structures.</li>
                    <li>3. Allow students to interactively compute the cost of using these data structures with different algorithms.</li>
                </ul> 
          </div>
        );
      case 'List of Experiments':
        return (
            <div className="list-exp-container">
            <div className="experiment">
              <div className="experiment-title">
                <h3>Sorting</h3>
                <p>Experience the elegance of Merge Sort, where arrays are split and conquered for efficient sorting!</p>
              </div>
              <div className="experiment-links">
                <ol>
                  <li><Link to="/list/merge">Merge Sort</Link></li>
                </ol>
              </div>
            </div>
          
            <div className="experiment">
              <div className="experiment-title">
                <h3>Linked List</h3>
                <p>Step into the world of Linked Lists, where nodes link together dynamically!</p>
              </div>
              <div className="experiment-links">
                <ol>
                  <li><Link to="/list/linkedlist">Linked List Basics</Link></li>
                </ol>
              </div>
            </div>
          
            <div className="experiment">
              <div className="experiment-title">
                <h3>Stack</h3>
                <p>Enter the realm of Stacks, where the last item in is the first one out!</p>
              </div>
              <div className="experiment-links">
                <ol>
                  <li><Link to="/list/stack">Implement Stack</Link></li>
                </ol>
              </div>
            </div>
          
            <div className="experiment">
              <div className="experiment-title">
                <h3>Hashing</h3>
                <p>Unlock the power of Quadratic Probing to tackle collisions in hashing!</p>
              </div>
              <div className="experiment-links">
                <ol>
                  <li><Link to="/list/probing">Quadratic Probing</Link></li>
                </ol>
              </div>
            </div>
          </div>
          
        );
      case 'Course Outcome':
        return (
          <div className='intro'>
            <h1 className='heading'> Data Structures Lab </h1>
            <p className="para">  Upon successful completion of the Data Structures Lab, 
                students will have a comprehensive understanding of various 
                data structures and their applications. They will be able to 
                effectively implement and analyze algorithms for sorting, searching, 
                and manipulating data. Students will gain hands-on experience in designing 
                efficient data structures such as arrays, linked lists, stacks, queues, trees, 
                and graphs, enabling them to optimize problem-solving approaches. Additionally, 
                they will develop critical skills in evaluating the time and space complexity 
                of algorithms, equipping them with the necessary tools to tackle real-world 
                programming challenges and enhance their computational thinking abilities.</p>
          </div>
        );
      case 'Feedback':
        return (
          <div className='intro'>
            <h1 className='heading'> Data Structures Lab </h1>
            <p className="para">Dear User,<br></br>
            Thanks for using Virtual Labs. Your opinion is valuable to us. To help us improve, 
            we'd like to ask you a few questions about your experience. It will only take 3 
            minutes and your answers will help us make Virtual Labs better for you and other users.</p>
            <div className='feed'>
              <Link to='/feedback/feedback-form'>
                <input className='but-feedback' type='button' value="Share your Feedback" />
              </Link>
            </div>
          </div>
        );
      default:
        return <p>Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="main-content" style={{ transform: sidebarOpen ? 'translateX(200px)' : 'translateX(0)', transition: 'transform 0.3s ease' }}>
      {renderContent()}
    </div>
  );
};

const Experiments = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar open by default
    const [activeContent, setActiveContent] = useState('Introduction');
  
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const handleOptionClick = (content) => {
      setActiveContent(content);
      setSidebarOpen(false); // Close the sidebar on option click (if needed)
    };
  
    return (
      <>
        <Head2 toggleSidebar={toggleSidebar} />
        <div className="content">
          {sidebarOpen && <Sidebar handleOptionClick={handleOptionClick} />}
          <MainContent activeContent={activeContent} />
        </div>
        <Footer />
      </>
    );
  };
  

export default Experiments;
