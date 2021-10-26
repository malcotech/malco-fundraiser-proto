
import React from "react";
import "./Home.scss";

// Components
import Hero from 'Components/banner/Hero';
import FeaturedCampaigns from 'Components/campaigns/FeaturedCampaigns';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 pb-3">
            <h2 className="mb-3">Bacon ipsum dolor amet shank chicken flank</h2>
            <p>corned beef picanha salami biltong tri-tip pork ham hock venison pancetta t-bone drumstick. Sirloin picanha landjaeger chuck.</p>
          </div>
          <div className="col-md">
            <p className="h3">
               First Title
            </p>
            <p>
              Chicken rump pork, ham sausage ham hock jerky tail fatback. Cupim doner meatloaf turducken ribeye chislic. Meatloaf porchetta bresaola ham chislic jowl pancetta chuck bacon short loin prosciutto spare ribs alcatra turducken..
            </p>
          </div>
          <div className="col-md">
            <p className="h3">
              Second Title
            </p>
            <p>
              Chicken rump pork, ham sausage ham hock jerky tail fatback. Cupim doner meatloaf turducken ribeye chislic. Meatloaf porchetta bresaola ham chislic jowl pancetta chuck bacon short loin prosciutto spare ribs alcatra turducken..
            </p>
          </div>
          <div className="col-md">
            <p className="h3">
              Third Title
            </p>
            <p>
              Chicken rump pork, ham sausage ham hock jerky tail fatback. Cupim doner meatloaf turducken ribeye chislic. Meatloaf porchetta bresaola ham chislic jowl pancetta chuck bacon short loin prosciutto spare ribs alcatra turducken..
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">Featured Campaigns</h2>
            </div>
          </div>
          <FeaturedCampaigns />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h2 className="mb-3">Chicken rump pork, ham sausage ham hock jerky tail fatback</h2>
              <p>Jerky pig beef ribs shoulder venison ground round pork loin chuck turducken short loin meatloaf. Ground round filet mignon kevin, landjaeger jowl doner shoulder ham hock short ribs porchetta sausage chicken. Beef kielbasa sausage burgdoggen meatball doner ham hock ball tip buffalo. Porchetta pig spare ribs beef andouille sirloin. Sirloin rump meatball strip steak meatloaf alcatra. Ground round meatball turducken, jowl venison cow spare ribs rump chislic shoulder tenderloin. Hamburger pork loin alcatra t-bone strip steak.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <hr />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-8 text-left">
              <h2 className="mb-4">Campaign Information</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Campaign</th>
                    <th scope="col">Goal</th>
                    <th scope="col">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Coffee Night With Friends</td>
                    <td>$5,000</td>
                    <td>$##.###</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Coffee Night With Friends</td>
                    <td>$5,000</td>
                    <td>$##.###</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Coffee Night With Friends</td>
                    <td>$5,000</td>
                    <td>$##.###</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <hr />
        </div>
      </div>
      <footer>

      </footer>
    </main>
  )
}
