import React from "react"
import "./style.css"
import skills from "../../images/skills.png"
import team_1 from "../../images/team/team-1.jpg"
import team_2 from "../../images/team/team-2.jpg"
import team_3 from "../../images/team/team-3.jpg"
import team_4 from "../../images/team/team-4.jpg"
const EndTeam = () => {
  return (

	<div>

<main id="main">



<section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src={team_1} className="img-fluid" alt=""></img></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src={team_2} className="img-fluid" alt=""></img></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div className="pic"><img src={team_3} className="img-fluid" alt=""></img></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div className="pic"><img src={team_4} className="img-fluid" alt=""></img></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

</main>


</div>
)
}

export default EndTeam