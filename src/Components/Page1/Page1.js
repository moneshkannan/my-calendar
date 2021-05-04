import React from 'react';
import './page.css';
import calendar1 from "../../Assets/calendar1.jpeg";
import calendar2 from "../../Assets/calendar2.jpg";
import calendar3 from "../../Assets/calendar3.webp";

const Page1 = () => {
    return (
        <div>
            <div className="home_img" />
            <div className="home_content">
                <h1>Appointy helps you schedule meetings without the back-and-forth emails</h1>
                <a href="/#">Schedule</a>
            </div>

            <div className="home_middle">

                <div className="home_middle_content">
                    <div>
                        <h3 className="home_h3">you will now goin yo laern more</h3>
                        <p className="home_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                        corporis sunt qui incidunt praesentium dolorem quos officiis minus
                        nihil totam tempora cor Lorem ipsum dolor sit amet consectetur
              adipisicing elit</p>
                    </div>
                    <div style={{ marginTop: "25px", marginBottom: "40px" }}>
                        <h3 className="home_h3">you will now goin yo laern more</h3>
                        <p className="home_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                        corporis sunt qui incidunt praesentium dolorem quos officiis minus
                        nihil totam tempora cor Lorem ipsum dolor sit amet consectetur
              adipisicing elit</p>
                    </div>
                    <a className="home_learn_more" href="/#"> Learn More  </a>
                </div>
                <div className="home_middle_images">
                    <div className="home_middle_image">
                        <img alt="home_middle_images" className="home_middle_img photo-1" src={calendar1} />
                        <img alt="home_middle_images" className="home_middle_img photo-2" src={calendar2} />
                        <img alt="home_middle_images" className="home_middle_img photo-3" src={calendar3} />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Page1;