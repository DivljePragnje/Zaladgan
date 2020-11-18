import React from "react";
import "./about.styles.css";

class About extends React.Component {
  imageUrl = require(`../../images/about-me.jpg`);

  render() {
    console.log(this.imageUrl);
    return (
      <div className="about-wrapper">
        <h1 className="about-header">ABOUT ME</h1>
        <div
          className="about-image"
          style={{
            backgroundImage: `url(${this.imageUrl.default})`,
          }}
        ></div>

        <div className="about-text">
          <p>
            LOREM IPSUM IMAGES PLUGINS GENERATORS ENGLISH Lorem Ipsum Generator
            Generate Lorem Ipsum placeholder text. Select the number of
            characters, words, sentences or paragraphs, and hit generate!
          </p>
          <p>
            GENERATED LOREM IPSUM 5 PARAGRAPHS COPY Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Aliquam ut porttitor leo a diam
            sollicitudin. Feugiat scelerisque varius morbi enim nunc faucibus a
            pellentesque. Vitae turpis massa sed elementum tempus egestas sed
            sed. Odio tempor orci dapibus ultrices in. Facilisis volutpat est
            velit egestas dui id. Dignissim convallis aenean et tortor. Tellus
            cras adipiscing enim eu. Lorem mollis aliquam ut porttitor leo a.
          </p>
          <p>
            Dui vivamus arcu felis bibendum ut tristique et egestas. Vestibulum
            morbi blandit cursus risus at ultrices. Enim facilisis gravida neque
            convallis a cras semper auctor. Et molestie ac feugiat sed lectus
            vestibulum mattis ullamcorper. Turpis massa tincidunt dui ut ornare
            lectus sit. Eu nisl nunc mi ipsum faucibus. Amet commodo nulla
            facilisi nullam vehicula ipsum a arcu cursus. Leo vel fringilla est
            ullamcorper eget nulla facilisi etiam. Ut porttitor leo a diam.
          </p>
          <p>
            Praesent semper feugiat nibh sed. Nulla pellentesque dignissim enim
            sit amet. Lectus quam id leo in vitae turpis massa sed. Accumsan
            tortor posuere ac ut consequat semper viverra. Etiam sit amet nisl
            purus in mollis nunc sed. Proin sagittis nisl rhoncus mattis rhoncus
            urna. Arcu non odio euismod lacinia at quis. Ac tortor dignissim
            convallis aenean et tortor at risus viverra. Mi sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. Diam donec adipiscing
            tristique risus nec feugiat in fermentum posuere. Vestibulum morbi
            blandit cursus risus at. Eu scelerisque felis imperdiet proin
            fermentum leo vel orci porta. Mauris vitae ultricies leo integer
            malesuada nunc vel risus commodo.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
