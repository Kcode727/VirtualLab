import React, { useState, useEffect } from 'react';
import './index.css';

const Head1 = () => {
// TopSection Component
const TopSection = () => {
    const [timeAndDate, setTimeAndDate] = useState({
        date: '',
        time: '',
    });

    useEffect(() => {
        const updateTimeAndDate = () => {
            const now = new Date();
            const optionsDate = { day: '2-digit', month: 'short', year: 'numeric' };
            const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

            setTimeAndDate({
                date: now.toLocaleDateString('en-GB', optionsDate),
                time: now.toLocaleTimeString('en-GB', optionsTime),
            });
        };

        updateTimeAndDate();
        const intervalId = setInterval(updateTimeAndDate, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const updateVisitorCount = () => {
            let count = parseInt(localStorage.getItem('visitorCount')) || 0;
            count++;
            localStorage.setItem('visitorCount', count);
            document.getElementById('visitor-count').textContent = count;
        };

        updateVisitorCount();
    }, []);

    return (
        <div className="top">
            <div className="top-head">
                <div className="time-date">
                    <span className="date">{timeAndDate.date}</span>
                    <span> | </span>
                    <span className="time">{timeAndDate.time}</span>
                </div>
                <div className="face-id">
                    Visitors <span id="visitor-count">0</span>
                </div>
            </div>
        </div>
    );
};

// Header Component
const Header = () => {
    return (
        <header>
            <div className="header-head">
                <div className="left-head">
                    <img className="vl-logo" src="/Sources/rbulogo.jpg" alt="Virtual Labs logo" />
                </div>
                <div className="right-head">
                    <form>
                        <input style={{paddingRight:"10px"}} type="search" name="search-bar" id="searching" placeholder="Search lab" />
                    </form>
                </div>
            </div>
            <nav>
    <div className="nav">
        <ul>
            <li><a className="nav-link" href="/">HOME</a></li>
            <li><a className="nav-link" href="/about">ABOUT US</a></li> 
            <li><a className="nav-link" href="/experiments">EXPERIMENTS</a></li>
            <li><a className="nav-link" href="/contact">CONTACT US</a></li>
        </ul>
    </div>
</nav>

        </header>
    );
};

    return(
        <div>
            <TopSection />
            <Header/>
        </div>
    );
}

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
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
          <a href="/">Home</a>
        </div>
        <h1>DATA STRUCTURE 1</h1>
        <a href='/contact'>Contact Us</a>
      </div>
    </div>
  );

  const Head3 = ({ toggleSidebar }) => (
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
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
          <a href="/">Home</a>
        </div>
        <h1>DATA STRUCTURE 1</h1>
        <a href="/experiments">Experiments List</a>
      </div>
    </div>
  );

export {Head1, Head2, Head3};