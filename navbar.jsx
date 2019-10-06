var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title />
        <link rel="stylesheet" type="text/css" href="navbar.css" />
        <link rel="stylesheet" type="text/css" href="bootstrap.css" />
        <header id="header" className="home">
          <div className="container main-menu">
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo">
                <a href="index.html">Triton</a>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li className="menu-active"><a href="index.html">Home</a></li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="helper.html">How it Works</a></li>
                  <li className="menu-has-children"><a href="contact.html">Contact</a>
                    <ul>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">FAQ</a></li>
                    </ul>
                  </li>
                  <li className="menu-has-children"><a href>Profile</a>
                    <ul>
                      <li><a href="profile.html">Edit Profile</a></li>	
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Log Out</a>
                      </li>	
                    </ul>
                  </li>				              
                </ul>
              </nav>{/* #nav-menu-container */}		    		
            </div>
          </div>
        </header>{/* #header */}
      </div>
    );
  }
});