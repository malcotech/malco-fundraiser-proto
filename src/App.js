import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";

// Components
import Donate from "./components/donate/Donor";
import Progress, { ProgressGoal } from "./components/progress/Progress";
import Navigation from "./components/navigation/Navigation";
import Supporter from "./components/supporter/Supporter";

const venue = 'The Mocha Cup'; // What is a cool name??

function App() {
  return (
    <main className="sticky">
      {/* Banner Component */}
      <section id="main-hero" className="bg-gray-800">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-12 col-lg-6 px-0 px-sm-2">
              {/* Source: https://i.picsum.photos/id/1060/5598/3732.jpg */}
              <img className="img-fluid" src="./img/1060-5598x3732.jpg" alt="Coffee Night with Friends" />
            </div>
            <div className="col-12 col-lg-6 px-0 px-sm-2">
              <div className="py-4 px-3 px-lg-4">
                {/* TODO: This content can be data driven. */}
                <h1 className="mb-4 mb-lg-4">Coffee Night with Friends!</h1>
                <div className="row">
                  <div className="col-md-5">
                    <p><span className="fw-bold">Date:</span> TBD</p>
                  </div>
                  <div className="col-md-auto">
                    <p><span className="fw-bold">Location:</span> {venue}</p>
                  </div>
                </div>
                {/* TODO: link the "form below" to Donate section */}
                <p><span className="fw-bold">Description: </span><span className="d-block mt-1">Hello friends! Well it is that time again for our annual coffee night fundraiser! Come join us at <strong>{venue}</strong>. Each beverage you purchase will go to our church fund. Can't make it? We also accept donations via form below.</span></p>
                <ProgressGoal />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Nav Component */}
      <Navigation />
      {/* Body Content */}
      <section id="main-body">
        <div className="container p-3">
          {/* About */}
          <div id="about" className="anchor-section py-3">
            <h2 className="mb-3">About</h2>
            <p>Bacon ipsum dolor amet pork belly ham hock tail filet mignon boudin ham andouille short ribs pork loin sausage flank buffalo frankfurter tongue. Pork chop beef corned beef prosciutto filet mignon. Tongue landjaeger shank, chislic pork ribeye buffalo beef ribs t-bone pancetta. Ball tip beef meatloaf pastrami capicola, cupim tail ground round brisket salami. Picanha ground round beef frankfurter capicola alcatra turkey short ribs meatloaf leberkas ham hock. Beef ribs t-bone pork belly beef flank biltong chicken buffalo pig cupim meatloaf pork chop. Ham hock beef ribs shoulder, kielbasa biltong shankle flank boudin burgdoggen prosciutto salami jerky landjaeger tail bresaola.</p>
            <p>Pork belly short ribs beef ribs boudin, fatback pork loin picanha drumstick pig biltong salami ball tip turkey. Pork pancetta prosciutto bacon, meatball drumstick chicken tongue turducken picanha bresaola. Drumstick chuck hamburger jerky. Ball tip chicken sausage, strip steak tongue cupim beef ribs frankfurter ham hock corned beef fatback pig. Fatback drumstick rump sausage cupim prosciutto burgdoggen. Pork belly ball tip chuck pastrami, fatback alcatra cow t-bone. Chicken cupim beef ribs, spare ribs fatback salami meatloaf pancetta tail frankfurter andouille pig.</p>
            <p>Capicola tri-tip chuck pork belly, ham picanha cupim flank bacon fatback beef. Ham tenderloin shoulder pastrami, shank t-bone sausage. Capicola porchetta andouille, t-bone pork belly shankle meatloaf. Chuck kevin jerky beef short loin pastrami t-bone biltong turkey pork fatback chislic swine cupim meatloaf. Meatball shank boudin shankle, pancetta brisket picanha ham corned beef swine alcatra bresaola frankfurter bacon pork loin.</p>
          </div>
        </div>
        {/* Our Supporters */}
        <div id="our-supporters" className="anchor-section bg-gray-100 p-3">
          <div className="container py-3">
            <h2 className="mb-3">Our Supporters</h2>
            <p className="mb-5">Thanks to our supporters! You're helping our event tremendously! Remember, <b>5</b> randomly picked lucky winners will win a $10 dollar gift card to <strong>Chick-fil-A</strong>! Yuummm!</p>
            <div id="our-supporters">
              <Supporter />
            </div>
          </div>
        </div>
        {/* Donate Form */}
        <div className="container p-3">
          <div id="donate" className="anchor-section py-3">
            <h2 className="mb-3">Donate</h2>
            <p className="mb-5">Thank you for your generosity, <span className="text-warning"><b>but since this page is just for demo purposes, majority of this form has been disabled intentionally.</b></span> You can test out some of the available form fields below to see your submission above.</p>
            <div className="row">
              <div className="col-lg-8">
                <Donate />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-600 mt-5 py-4 py-md-5 text-center user-select-none">
        <small><i><b>End of Page, thank you for checking out my page :-)</b></i></small>
      </footer>
    </main>
  );
}

export default hot(module)(App);
