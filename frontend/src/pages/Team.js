import React from 'react';
import daddynefs from '../images/nefs- frontend.PNG';
import onazi from '../images/onazi- ui.PNG';
import veronica from '../images/Veronica-backend.PNG';
import tomisin from '../images/tomisin.png';
import john from '../images/john- frontend.PNG';
import akere from '../images/akere- backend.PNG';
import agwu from '../images/agwu- backend.PNG';
import biodun from '../images/Biodun- ui.PNG';
import bisiade from '../images/bisiade- frontend.PNG';
import gold from '../images/gold- frontend.PNG';
import sifon from '../images/sifon- frontend.PNG';
import nedu from '../images/nedu- backend.PNG';
import oje from '../images/oje- backend.PNG';
import ose from '../images/ose- frontend.PNG';
import { Link } from 'react-router-dom';
import '../styles/team.css';

function Team() {

  return(
    <div className="">
      <h1>Meet The Team.</h1>
      <hr />
      <h2>We are a mix of everything you are scared of, but most importantly, we are the right team for the job that matters.</h2>

      <div className="container-fluid root">

        <div className="row">
          <div className="col-md-4">
            <img src= {daddynefs} alt="daddynefs- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="daddynefs!" />
            <h4>Emadamerho Nefe.</h4>
            <p>Front-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {onazi} alt="onazi- ui" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="ONAZI!" />
            <h4>Victor Onazi.</h4>
            <p>UI/UX Designer.</p>
          </div>
          <div className="col-md-4">
            <img src= {veronica} alt="veronica- backend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="VeronicaT!" />
            <h4>Veronica Emiola</h4>
            <p>Back-end Developer.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src= {tomisin} alt="tomisinAjayi- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="tomisinAjayi!" />
            <h4>Tomisin Ajayi.</h4>
            <p>Front-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {john} alt="john- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="EKUNOLA JOHN!" />
            <h4>Ekunola John.</h4>
            <p>Front-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {akere} alt="akere- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="Akere Mukhtar!" />
            <h4>Akere Mukhtar.</h4>
            <p>Back-end Developer.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src= {agwu} alt="akere- backend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="Notapreneur!" />
            <h4>Nnaemeka Agwu.</h4>
            <p>Back-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {biodun} alt="Biodun- ui" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="AbbeyGee!" />
            <h4>Biodun Amure.</h4>
            <p>UI/UX Designer.</p>
          </div>
          <div className="col-md-4">
            <img src= {bisiade} alt="bisiade- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="bisiade!" />
            <h4>Bisola Abimbola.</h4>
            <p>Front-end Developer.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src= {gold} alt="gold- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="Queenzie!" />
            <h4>Gold Queenzie</h4>
            <p>Front-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {sifon} alt="sifon- ui" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="Syfon!" />
            <h4>Sifon Isaac.</h4>
            <p>Front-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {nedu} alt="nedu- backtend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="NeduR!" />
            <h4>Nedu Robert.</h4>
            <p>Front-end Developer.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src= {oje} alt="oje- backend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="ojeifoissy!" />
            <h4>Ojeifo Oziegbe</h4>
            <p>Back-end Developer.</p>
          </div>
          <div className="col-md-4">
            <img src= {ose} alt="ose- frontend" className="img-responsive teammate" data-toggle="tooltip" data-placement="bottom" title="ose_smart!" />
            <h4>Ayegbusi Oseyemi.</h4>
            <p>Front-end Developer.</p>
          </div>
          <div className="col-md-4">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Team

//<script>
//$(document).ready(function(){
//$('[data-toggle="tooltip"]').tooltip();
//});
//</script>
