import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import grandmaster from "../Assets/About/Grandmaster.png";
import Warcraft from "../Assets/About/wow.png";

const AboutScreen = (props) => {
  return (
    <Container fluid>
      <Container className="p-2 my-4">
        <h2 class="mb-3 text-center"> Graduated College </h2>
        <p class="lead">
          I recently graduated from Portland State University (August 2020)
          after attending for 5 years!
        </p>

        <p class="lead">
          The reason I decided to move more slowly through university than
          traditional four year approaches is because I was working nearly full
          time at Fred Meyer. I wanted to give the subject matter the time it
          deserved so I reduced my course load slightly to make sure I really
          learned the material. I am very happy with my approach because I was
          able to graduate from university debt free!
        </p>

        <p class="lead">
          Due to the world being put on hold because of the current COVID-19
          pandemic, and the fact I hadn’t had an actual summer vacation in
          years, I decided to take a few months off to cycle, work on a few
          passion projects, and have fun playing games like League of Legends
          and World of Warcraft.
        </p>

        <p class="lead">
          The time off was great but now I am ready to use the skills I learned
          in university and apply them to the world. I am ready to build,
          innovate, and of course, have fun!
        </p>
      </Container>

      <Container className="p-2 my-4">
        <h2 class="mb-3 text-center"> Work Experience </h2>
        <p class="lead">
          My first and only work experience to date was my job working at Fred
          Meyer. At Fred Meyer I worked as a service deli associate. When I
          first started my responsibilities were helping customers by slicing
          lunch meats, making sandwiches and pizzas, and serving hot food.
        </p>

        <p class="lead">
          After a few months I was given the opportunity to learn how to fry
          cook and I was ultimately promoted to that position. Around the same
          time I also became the closing supervisor since I was trained and well
          equipped to handle any task in my department. Now I was responsible
          for cooking all of the hot foods, maintaining the fryers, ovens, and
          cook area, dishes, delegating tasks to other associates, and handling
          any customer deli related complaints.
        </p>

        <p class="lead">
          While it may be anecdotal, this is the second time I was promoted to a
          leadership position in the past few years. During my final senior
          capstone project, (The Safe_ project in the work section of this
          portfolio) I was promoted from front-end developer to front-end team
          lead. In both the deli, and my team project, I never explicitly sought
          after a leadership position, but found myself in one in both
          scenarios. While I don’t think leadership is one of my strengths, it
          seems to be a position I am finding myself in more frequently.
        </p>

        <p class="lead">
          I left Fred Meyer in March of 2020 for a few different reasons. The
          first reason was I had earned enough money to pay for the rest of my
          education with around $6000 to spare, which would allow me to dedicate
          more time to school and graduate a term quicker. The second reason was
          due to the COVID-19 pandemic ramping up. My mom makes significantly
          more money than I was working at the deli, so it didn’t make sense for
          me to expose myself to the virus and in turn potentially infect her,
          making her unable to work. Ultimately I left Fred Meyer with good
          standing and I believe upper management was sad to see me go.
        </p>
      </Container>

      <Container className="p-2 my-4">
        <h2 class="mb-3 text-center"> Cycling </h2>
        <p class="lead">
          I enjoy cycling because it gets me out of the house and is a good form
          of exercise. During university I would make the long bike ride to
          school every day (38 miles round trip). These rides were great
          exercise and provided an excellent outlet for stress allowing me to
          think clearer and focus better during class. Additionally, staying
          healthy is more important now than ever given the current COVID-19
          pandemic, and will be for quite some time as it appears this pandemic
          won’t be going anywhere anytime soon. One day I want to cycle from
          Portland to the coast (around 120 mile ride) and maybe even cross
          country one day.
        </p>
      </Container>

      <Container className="p-2 my-4">
        <h2 class="mb-3 text-center">Gaming</h2>
        <Row className="">
          <Col>
            <p class="lead">
              When i’m not programming, cycling, or working, I enjoy playing
              video games. Who would've thought a CS graduate would play video
              games. My two favorite games are League of Legends (LoL) and World
              of Warcraft (WoW).
            </p>

            <p class="lead">
              I have been playing League for years. My all time peak rank on the
              North American server is 512 (out of 2 million+ players), and I
              have been a high rated player since then.
            </p>

            <p class="lead">
              I have been playing World of Warcraft off and on since 2008.
              Recently I have been enjoying the latest expansion to the
              franchise, Shadowlands. Like in League of Legends, I am also a
              high end player in WOW. I ended in the top 2% in both the 2v2 and
              3v3 arena ladders, and I routinely defeat the most difficult
              player vs environment (PvE) encounters blizzard develops;
              encounters that are only ever seen and defeated by a small portion
              of the playerbase.
            </p>

            <p class="lead">
              As ludicrous as it may sound, I believe that my time playing both
              League of Legends and World of Warcraft has bolstered my teamwork
              and problem solving skills, due to both WoW and League being team
              based strategy games. Additionally, while playing these games I
              have met many great people from all around North America. A few of
              whom I would consider some of my closest friends.
            </p>

            <p class="lead">
              One day I hope to eventually work for either Riot or Blizzard.
              These games shaped my childhood and it would be an honor to
              continue with these titles as both a developer and a player.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutScreen;
