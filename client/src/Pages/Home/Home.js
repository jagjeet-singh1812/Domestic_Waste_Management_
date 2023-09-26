import React from "react";
import "./home.css";
import BlogSlider from "../../Component/BlogSlider/Blogslider";
import "./YourComponent.css"; 

const Home = () => {
  const diseases = [
    {
      name: "Dengue",
      percentage: 20,
      info: "Dengue fever is a mosquito-borne tropical disease caused by the dengue virus.",
    },
    {
      name: "Typhoid",
      percentage: 15,
      info: "Typhoid fever is a bacterial infection caused by Salmonella typhi.",
    },
    {
      name: "Malaria",
      percentage: 10,
      info: "Malaria is a mosquito-borne infectious disease caused by parasites.",
    },
  ];

  return (
    <>
    <div className="test"></div>
      <section className="page-1">
        <div className="contentx">
          <div className="info">
            <h2 style={{ color: "white" }}>
              God's Own Country <br />
              <span style={{ color: "red" }}>Save It!</span>
            </h2>
            <p style={{ color: "white", fontSize: "20px" }}>
              Improper waste management in Kerala has become a pressing issue,
              inflicting significant harm on this picturesque Indian state. The
              indiscriminate disposal of waste, including plastics and hazardous
              materials, has polluted pristine landscapes, rivers, and coastal
              areas. This not only threatens the state's natural beauty but also
              poses severe health risks to its residents, as toxic substances
              leach into the soil and water sources. To combat these issues,
              sustainable waste management practices and awareness campaigns are
              urgently needed to protect Kerala's environment and well-being.
            </p>
            <a href="#" className="info-btn">
              More Info
            </a>
          </div>
        </div>
      </section>

      <div className="custom-container">
        <div className="custom-survey">
          <div className="custom-survey-image">
            <img src="./Survey.jpg" alt="Survey Image" />
          </div>
          <div className="custom-survey-text">
            <h2 className="heading">National Health Survey</h2>
            <p>
              According to recent surveys, there has been a noticeable uptick in
              waterborne and garbage-related diseases in Kerala, emphasizing the
              critical role of effective sanitation and waste management
              practices in the region.
            </p>
            <p>
              These surveys reveal a significant surge in disease cases, with a
              20% increase in Dengue cases alone. This concerning trend
              underscores the immediate need for proactive measures and
              awareness campaigns within Kerala.
            </p>
            <p>
              To tackle this issue, it is imperative to promote responsible
              waste disposal, enhance sanitation infrastructure, and educate the
              public about the significance of maintaining clean water sources
              throughout Kerala.
            </p>
          </div>
        </div>
        <div className="custom-disease-stats">
          {[
            {
              name: "Dengue",
              percentage: 20,
              info: "Dengue fever, caused by the dengue virus transmitted by Aedes mosquitoes, is a common tropical disease. It leads to symptoms like high fever, severe headache, joint pain, and rashes. Severe cases can result in dengue hemorrhagic fever. Preventive measures like mosquito control are essential in affected areas.",
              image: "./Dengue.jpg",
            },
            {
              name: "Typhoid",
              percentage: 15,
              info: "Typhoid fever, caused by the bacterium Salmonella typhi, is a bacterial infection with systemic symptoms. It often leads to high fever, abdominal pain, and gastrointestinal distress. Proper sanitation and safe water sources are crucial for prevention.",
              image: "./Typhoid.jpg",
            },
            {
              name: "Cholera",
              percentage: 8,
              info: "Cholera is a bacterial infection that causes severe diarrhea and dehydration. It is often transmitted through contaminated water and food, making it a significant concern in areas with poor sanitation and inadequate access to clean water.",
              image: "./Cholera.jpg",
            },
          ].map((disease, index) => (
            <div className="custom-disease-card" key={index}>
              <img
                src={disease.image}
                alt={disease.name}
                className="custom-disease-image"
              />
              <h2 className="custom-disease-name">{disease.name}</h2>
              <p className="custom-disease-info">{disease.info}</p>
              <p className="custom-disease-increase">
                {disease.percentage}% More Cases
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1
        className="center-text"
        style={{
          fontSize: "50px",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Segregate Your Waste Properly
      </h1>
      <BlogSlider />
      <h1
        className="center-text"
        style={{
          fontSize: "50px",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Follow the 3R's
      </h1>

      <section className="container">
        <div className="left-content">
          <h1 className="heading">Reduce</h1>
          <p className="sub-heading">Minimize Environmental Impact</p>
          <p className="description">
            Reducing refers to the practice of minimizing the amount of waste
            generated in the first place. It involves consuming fewer resources,
            making sustainable choices, and adopting efficient processes. By
            reducing our consumption and making mindful decisions, we can
            significantly decrease the environmental impact and strain on
            natural resources, contributing to a more sustainable future.
          </p>
        </div>
        <div className="right-content">
          <img
            src="./Reducenew.jpg" // Replace with your infographic image
            alt="Infographic"
            className="infographic"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </section>
      <section className="container">
        <div className="left-content">
          <img
            src="./Reuse.jpg"
            alt="Reuse Image"
            className="image-left"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="right-content">
          <div className="text-content">
            <h1 className="heading">Reuse</h1>
            <p className="sub-heading">Extend the Lifespan</p>
            <p className="description">
              Reusing entails finding new uses for items or products instead of
              discarding them after a single use. It's about extending the
              lifespan of things by repairing, repurposing, or sharing them.
              Reuse not only conserves resources but also reduces the volume of
              waste sent to landfills. Embracing a culture of reuse encourages
              creativity and responsible resource management.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="left-content">
          <h1 className="heading">Recycle</h1>
          <p className="sub-heading">Conserve Resources</p>
          <p className="description">
            Recycling is the process of collecting, processing, and transforming
            materials that would otherwise become waste into new products. It
            plays a crucial role in reducing the demand for raw materials,
            conserving energy, and cutting down on pollution. Recycling helps
            close the loop in the life cycle of materials, promoting
            sustainability and environmental conservation.
          </p>
        </div>
        <div className="right-content">
          <img
            src="./Recycle.jpg" // Replace with your image for Recycle
            alt="Recycle Image"
            className="image-right"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
