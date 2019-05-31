import React, { Component } from 'react';
import axios from 'axios';
import img from '../assets/img/ironman.png';

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = { personagens: [] };
  }

  componentDidMount() {
    this.getPersonagens();
  }

  getPersonagens = () => {
    axios
      .get('https://kitsu.io/api/edge/anime')
      .then(response => {
        console.log('asdasd', response.data);
        this.setState({ personagens: response.data.data });
      })
      .catch(function(error) {
        console.log('Problemas ao buscar lista');
        console.log(error);
      });
  };

  render() {
    const { personagens } = this.state;
    return (
      <div class="container-list">
        <div className="header-list">
          <span>Personagem</span>
          <span>Descrição</span>
        </div>

        {!personagens && <>carregando</>}
        <ul className="list-content">
          <li>
            <span className="middle-v-align image">
              <img src={img} alt="" />
            </span>

            <h3 className="name">Iron man</h3>

            <div className="desc">
              Faye Valentine
              <br />
              Birthday: August 14, 1994
              <br />
              <br />
              One of the members of the bounty hunting crew in the anime series
              Cowboy Bebop. Often seen with a cigarette and in a revealing
              outfit complete with bright yellow hot pants and a matching,
              revealing top, black suspenders, white boots, and a long-sleeved
              red shirt worn normally through the sleeves, not to mention her
              signature headband, she is unusually attractive, sporting a bob of
              violet hair, green eyes, fair skin, and a voluptuous body.
              Although appearing to be no more than her 23 years alive suggests,
              Faye is actually upwards of 74-years-old, having been put into
              cryogenic freeze after a space shuttle accident. During the course
              of the series (set in 2071), Faye manages to cross paths with
              Spike and Jet twice before she finally makes herself at home
              aboard their ship the second time, much to the consternation and
              disapproval of the two men, both of whom have their own
              reservations about women in general. Faye herself is brash,
              egotistical, and quite lazy, despite taking plenty of time to
              pamper and care for her own appearance. Faye has also been placed
              under arrest several times in the series and spends much time in
              handcuffs on the ship. She, at times, expects the boys to take
              care of bounties for her, while she sits by idly to reap the
              benefits and eat all their food, another source of conflict.
              <br />
              <br />
              Seemingly little more than a thorn in her partnersâ€™ sides, Faye
              is actually a well-rounded member of the team. She can handle
              herself exceptionally well for a woman of her slight appearance,
              displaying at least once in the series (in "Cowboy Funk") that she
              packs quite a mean punch. Adept at flying, Faye has stood her
              ground just as well as Spike has in an aerial dogfight in her ship
              Red Tail, at times even against Spike in an aerial dogfight. She
              also excels with guns, and is first seen in the series completely
              disabling a ship with a Heckler &amp; Koch MP5, though she is
              immediately apprehended afterward. In the movie, she is seen with
              the same gun, in addition to her normal companion: a Glock 30.
              Where Faye really shines, however, is with her mouth. She has an
              almost unstoppable attitude, and even her sometimes innocent smile
              can be seen as dangerous. Sarcastic and presumptuous, she rarely
              appears weak or in need of support. She brags and takes care of
              herself, never trusting others, cheating and lying her way from
              one day to the next.
              <br />
              <br />
              She is a woman who is skilled at getting what she wants; however,
              her indomitable exterior hides a more delicate interior. Upon
              awakening from her 54-year cryogenic sleep, not only was she
              saddled with a massive amount of debt that she had no means to
              pay, but she was also diagnosed with total amnesia, a stranger in
              a mysterious world that she was not a part of and did not
              understand, surrounded by people who claimed to be helping her but
              were only there to take advantage of her naivetÃ©. The surname
              "Valentine" was merely a name given to her by the doctor who woke
              her; the circumstances of her accident, her previous life, and
              even her real name all remain a mystery, and are only gradually
              revealed as the series progresses. It has been hinted that she
              came from Singapore on Earth, and was the daughter of a very
              wealthy family, as the city's famous Merlion Statue features
              prominently in scenes of her childhood, and that memories and a
              film from her childhood showed her living in a large mansion. In
              an early episode, she states that she is descended from Roma
              people, but she may well have been lying. Utterly betrayed by
              someone she thought she could trust after waking, Faye found
              herself burdened with even more money to pay, and the situation
              resulted in the hardening of her personality to an extreme degree.
              She even says in Session 11: â€œwe deceive or we are deceivedâ€�,
              and that â€œnothing good ever happened to me when I trusted
              others.â€�
              <br />
              <br />
              Throughout the series, though she retains her sarcastic demeanor
              and unpleasant nature up until the very end, it is easy to see her
              grow as a character. She learns to value her comrades, coming back
              to the Bebop when she realizes that it is the only home that she
              has left, naming it as the â€œonly place I could return toâ€�. She
              grows to understand the disadvantages of being a loner, and that
              even though her "family" is somewhat dysfunctional it is still a
              place where she will always belong.
              <br />
              <br />
              https://kitsu.io/api/edge/characters/3/media-characters
            </div>
          </li>

          <li>
            <span className="middle-v-align image">
              <img src={img} alt="" />
            </span>

            <h3 className="name">Iron man</h3>

            <div className="desc">
              Faye Valentine
              <br />
              Birthday: August 14, 1994
              <br />
              <br />
              One of the members of the bounty hunting crew in the anime series
              Cowboy Bebop. Often seen with a cigarette and in a revealing
              outfit complete with bright yellow hot pants and a matching,
              revealing top, black suspenders, white boots, and a long-sleeved
              red shirt worn normally through the sleeves, not to mention her
              signature headband, she is unusually attractive, sporting a bob of
              violet hair, green eyes, fair skin, and a voluptuous body.
              Although appearing to be no more than her 23 years alive suggests,
              Faye is actually upwards of 74-years-old, having been put into
              cryogenic freeze after a space shuttle accident. During the course
              of the series (set in 2071), Faye manages to cross paths with
              Spike and Jet twice before she finally makes herself at home
              aboard their ship the second time, much to the consternation and
              disapproval of the two men, both of whom have their own
              reservations about women in general. Faye herself is brash,
              egotistical, and quite lazy, despite taking plenty of time to
              pamper and care for her own appearance. Faye has also been placed
              under arrest several times in the series and spends much time in
              handcuffs on the ship. She, at times, expects the boys to take
              care of bounties for her, while she sits by idly to reap the
              benefits and eat all their food, another source of conflict.
              <br />
              <br />
              Seemingly little more than a thorn in her partnersâ€™ sides, Faye
              is actually a well-rounded member of the team. She can handle
              herself exceptionally well for a woman of her slight appearance,
              displaying at least once in the series (in "Cowboy Funk") that she
              packs quite a mean punch. Adept at flying, Faye has stood her
              ground just as well as Spike has in an aerial dogfight in her ship
              Red Tail, at times even against Spike in an aerial dogfight. She
              also excels with guns, and is first seen in the series completely
              disabling a ship with a Heckler &amp; Koch MP5, though she is
              immediately apprehended afterward. In the movie, she is seen with
              the same gun, in addition to her normal companion: a Glock 30.
              Where Faye really shines, however, is with her mouth. She has an
              almost unstoppable attitude, and even her sometimes innocent smile
              can be seen as dangerous. Sarcastic and presumptuous, she rarely
              appears weak or in need of support. She brags and takes care of
              herself, never trusting others, cheating and lying her way from
              one day to the next.
              <br />
              <br />
              She is a woman who is skilled at getting what she wants; however,
              her indomitable exterior hides a more delicate interior. Upon
              awakening from her 54-year cryogenic sleep, not only was she
              saddled with a massive amount of debt that she had no means to
              pay, but she was also diagnosed with total amnesia, a stranger in
              a mysterious world that she was not a part of and did not
              understand, surrounded by people who claimed to be helping her but
              were only there to take advantage of her naivetÃ©. The surname
              "Valentine" was merely a name given to her by the doctor who woke
              her; the circumstances of her accident, her previous life, and
              even her real name all remain a mystery, and are only gradually
              revealed as the series progresses. It has been hinted that she
              came from Singapore on Earth, and was the daughter of a very
              wealthy family, as the city's famous Merlion Statue features
              prominently in scenes of her childhood, and that memories and a
              film from her childhood showed her living in a large mansion. In
              an early episode, she states that she is descended from Roma
              people, but she may well have been lying. Utterly betrayed by
              someone she thought she could trust after waking, Faye found
              herself burdened with even more money to pay, and the situation
              resulted in the hardening of her personality to an extreme degree.
              She even says in Session 11: â€œwe deceive or we are deceivedâ€�,
              and that â€œnothing good ever happened to me when I trusted
              others.â€�
              <br />
              <br />
              Throughout the series, though she retains her sarcastic demeanor
              and unpleasant nature up until the very end, it is easy to see her
              grow as a character. She learns to value her comrades, coming back
              to the Bebop when she realizes that it is the only home that she
              has left, naming it as the â€œonly place I could return toâ€�. She
              grows to understand the disadvantages of being a loner, and that
              even though her "family" is somewhat dysfunctional it is still a
              place where she will always belong.
              <br />
              <br />
              https://kitsu.io/api/edge/characters/3/media-characters
            </div>
          </li>

          <li>
            <span className="middle-v-align image">
              <img src={img} alt="" />
            </span>

            <h3 className="name">Iron man</h3>

            <div className="desc">
              Faye Valentine
              <br />
              Birthday: August 14, 1994
              <br />
              <br />
              One of the members of the bounty hunting crew in the anime series
              Cowboy Bebop. Often seen with a cigarette and in a revealing
              outfit complete with bright yellow hot pants and a matching,
              revealing top, black suspenders, white boots, and a long-sleeved
              red shirt worn normally through the sleeves, not to mention her
              signature headband, she is unusually attractive, sporting a bob of
              violet hair, green eyes, fair skin, and a voluptuous body.
              Although appearing to be no more than her 23 years alive suggests,
              Faye is actually upwards of 74-years-old, having been put into
              cryogenic freeze after a space shuttle accident. During the course
              of the series (set in 2071), Faye manages to cross paths with
              Spike and Jet twice before she finally makes herself at home
              aboard their ship the second time, much to the consternation and
              disapproval of the two men, both of whom have their own
              reservations about women in general. Faye herself is brash,
              egotistical, and quite lazy, despite taking plenty of time to
              pamper and care for her own appearance. Faye has also been placed
              under arrest several times in the series and spends much time in
              handcuffs on the ship. She, at times, expects the boys to take
              care of bounties for her, while she sits by idly to reap the
              benefits and eat all their food, another source of conflict.
              <br />
              <br />
              Seemingly little more than a thorn in her partnersâ€™ sides, Faye
              is actually a well-rounded member of the team. She can handle
              herself exceptionally well for a woman of her slight appearance,
              displaying at least once in the series (in "Cowboy Funk") that she
              packs quite a mean punch. Adept at flying, Faye has stood her
              ground just as well as Spike has in an aerial dogfight in her ship
              Red Tail, at times even against Spike in an aerial dogfight. She
              also excels with guns, and is first seen in the series completely
              disabling a ship with a Heckler &amp; Koch MP5, though she is
              immediately apprehended afterward. In the movie, she is seen with
              the same gun, in addition to her normal companion: a Glock 30.
              Where Faye really shines, however, is with her mouth. She has an
              almost unstoppable attitude, and even her sometimes innocent smile
              can be seen as dangerous. Sarcastic and presumptuous, she rarely
              appears weak or in need of support. She brags and takes care of
              herself, never trusting others, cheating and lying her way from
              one day to the next.
              <br />
              <br />
              She is a woman who is skilled at getting what she wants; however,
              her indomitable exterior hides a more delicate interior. Upon
              awakening from her 54-year cryogenic sleep, not only was she
              saddled with a massive amount of debt that she had no means to
              pay, but she was also diagnosed with total amnesia, a stranger in
              a mysterious world that she was not a part of and did not
              understand, surrounded by people who claimed to be helping her but
              were only there to take advantage of her naivetÃ©. The surname
              "Valentine" was merely a name given to her by the doctor who woke
              her; the circumstances of her accident, her previous life, and
              even her real name all remain a mystery, and are only gradually
              revealed as the series progresses. It has been hinted that she
              came from Singapore on Earth, and was the daughter of a very
              wealthy family, as the city's famous Merlion Statue features
              prominently in scenes of her childhood, and that memories and a
              film from her childhood showed her living in a large mansion. In
              an early episode, she states that she is descended from Roma
              people, but she may well have been lying. Utterly betrayed by
              someone she thought she could trust after waking, Faye found
              herself burdened with even more money to pay, and the situation
              resulted in the hardening of her personality to an extreme degree.
              She even says in Session 11: â€œwe deceive or we are deceivedâ€�,
              and that â€œnothing good ever happened to me when I trusted
              others.â€�
              <br />
              <br />
              Throughout the series, though she retains her sarcastic demeanor
              and unpleasant nature up until the very end, it is easy to see her
              grow as a character. She learns to value her comrades, coming back
              to the Bebop when she realizes that it is the only home that she
              has left, naming it as the â€œonly place I could return toâ€�. She
              grows to understand the disadvantages of being a loner, and that
              even though her "family" is somewhat dysfunctional it is still a
              place where she will always belong.
              <br />
              <br />
              https://kitsu.io/api/edge/characters/3/media-characters
            </div>
          </li>

          <li>
            <span className="middle-v-align image">
              <img src={img} alt="" />
            </span>

            <h3 className="name">Iron man</h3>

            <div className="desc">
              Faye Valentine
              <br />
              Birthday: August 14, 1994
              <br />
              <br />
              One of the members of the bounty hunting crew in the anime series
              Cowboy Bebop. Often seen with a cigarette and in a revealing
              outfit complete with bright yellow hot pants and a matching,
              revealing top, black suspenders, white boots, and a long-sleeved
              red shirt worn normally through the sleeves, not to mention her
              signature headband, she is unusually attractive, sporting a bob of
              violet hair, green eyes, fair skin, and a voluptuous body.
              Although appearing to be no more than her 23 years alive suggests,
              Faye is actually upwards of 74-years-old, having been put into
              cryogenic freeze after a space shuttle accident. During the course
              of the series (set in 2071), Faye manages to cross paths with
              Spike and Jet twice before she finally makes herself at home
              aboard their ship the second time, much to the consternation and
              disapproval of the two men, both of whom have their own
              reservations about women in general. Faye herself is brash,
              egotistical, and quite lazy, despite taking plenty of time to
              pamper and care for her own appearance. Faye has also been placed
              under arrest several times in the series and spends much time in
              handcuffs on the ship. She, at times, expects the boys to take
              care of bounties for her, while she sits by idly to reap the
              benefits and eat all their food, another source of conflict.
              <br />
              <br />
              Seemingly little more than a thorn in her partnersâ€™ sides, Faye
              is actually a well-rounded member of the team. She can handle
              herself exceptionally well for a woman of her slight appearance,
              displaying at least once in the series (in "Cowboy Funk") that she
              packs quite a mean punch. Adept at flying, Faye has stood her
              ground just as well as Spike has in an aerial dogfight in her ship
              Red Tail, at times even against Spike in an aerial dogfight. She
              also excels with guns, and is first seen in the series completely
              disabling a ship with a Heckler &amp; Koch MP5, though she is
              immediately apprehended afterward. In the movie, she is seen with
              the same gun, in addition to her normal companion: a Glock 30.
              Where Faye really shines, however, is with her mouth. She has an
              almost unstoppable attitude, and even her sometimes innocent smile
              can be seen as dangerous. Sarcastic and presumptuous, she rarely
              appears weak or in need of support. She brags and takes care of
              herself, never trusting others, cheating and lying her way from
              one day to the next.
              <br />
              <br />
              She is a woman who is skilled at getting what she wants; however,
              her indomitable exterior hides a more delicate interior. Upon
              awakening from her 54-year cryogenic sleep, not only was she
              saddled with a massive amount of debt that she had no means to
              pay, but she was also diagnosed with total amnesia, a stranger in
              a mysterious world that she was not a part of and did not
              understand, surrounded by people who claimed to be helping her but
              were only there to take advantage of her naivetÃ©. The surname
              "Valentine" was merely a name given to her by the doctor who woke
              her; the circumstances of her accident, her previous life, and
              even her real name all remain a mystery, and are only gradually
              revealed as the series progresses. It has been hinted that she
              came from Singapore on Earth, and was the daughter of a very
              wealthy family, as the city's famous Merlion Statue features
              prominently in scenes of her childhood, and that memories and a
              film from her childhood showed her living in a large mansion. In
              an early episode, she states that she is descended from Roma
              people, but she may well have been lying. Utterly betrayed by
              someone she thought she could trust after waking, Faye found
              herself burdened with even more money to pay, and the situation
              resulted in the hardening of her personality to an extreme degree.
              She even says in Session 11: â€œwe deceive or we are deceivedâ€�,
              and that â€œnothing good ever happened to me when I trusted
              others.â€�
              <br />
              <br />
              Throughout the series, though she retains her sarcastic demeanor
              and unpleasant nature up until the very end, it is easy to see her
              grow as a character. She learns to value her comrades, coming back
              to the Bebop when she realizes that it is the only home that she
              has left, naming it as the â€œonly place I could return toâ€�. She
              grows to understand the disadvantages of being a loner, and that
              even though her "family" is somewhat dysfunctional it is still a
              place where she will always belong.
              <br />
              <br />
              https://kitsu.io/api/edge/characters/3/media-characters
            </div>
          </li>

          <li>
            <span className="middle-v-align image">
              <img src={img} alt="" />
            </span>

            <h3 className="name">Iron man</h3>

            <div className="desc">
              Faye Valentine
              <br />
              Birthday: August 14, 1994
              <br />
              <br />
              One of the members of the bounty hunting crew in the anime series
              Cowboy Bebop. Often seen with a cigarette and in a revealing
              outfit complete with bright yellow hot pants and a matching,
              revealing top, black suspenders, white boots, and a long-sleeved
              red shirt worn normally through the sleeves, not to mention her
              signature headband, she is unusually attractive, sporting a bob of
              violet hair, green eyes, fair skin, and a voluptuous body.
              Although appearing to be no more than her 23 years alive suggests,
              Faye is actually upwards of 74-years-old, having been put into
              cryogenic freeze after a space shuttle accident. During the course
              of the series (set in 2071), Faye manages to cross paths with
              Spike and Jet twice before she finally makes herself at home
              aboard their ship the second time, much to the consternation and
              disapproval of the two men, both of whom have their own
              reservations about women in general. Faye herself is brash,
              egotistical, and quite lazy, despite taking plenty of time to
              pamper and care for her own appearance. Faye has also been placed
              under arrest several times in the series and spends much time in
              handcuffs on the ship. She, at times, expects the boys to take
              care of bounties for her, while she sits by idly to reap the
              benefits and eat all their food, another source of conflict.
              <br />
              <br />
              Seemingly little more than a thorn in her partnersâ€™ sides, Faye
              is actually a well-rounded member of the team. She can handle
              herself exceptionally well for a woman of her slight appearance,
              displaying at least once in the series (in "Cowboy Funk") that she
              packs quite a mean punch. Adept at flying, Faye has stood her
              ground just as well as Spike has in an aerial dogfight in her ship
              Red Tail, at times even against Spike in an aerial dogfight. She
              also excels with guns, and is first seen in the series completely
              disabling a ship with a Heckler &amp; Koch MP5, though she is
              immediately apprehended afterward. In the movie, she is seen with
              the same gun, in addition to her normal companion: a Glock 30.
              Where Faye really shines, however, is with her mouth. She has an
              almost unstoppable attitude, and even her sometimes innocent smile
              can be seen as dangerous. Sarcastic and presumptuous, she rarely
              appears weak or in need of support. She brags and takes care of
              herself, never trusting others, cheating and lying her way from
              one day to the next.
              <br />
              <br />
              She is a woman who is skilled at getting what she wants; however,
              her indomitable exterior hides a more delicate interior. Upon
              awakening from her 54-year cryogenic sleep, not only was she
              saddled with a massive amount of debt that she had no means to
              pay, but she was also diagnosed with total amnesia, a stranger in
              a mysterious world that she was not a part of and did not
              understand, surrounded by people who claimed to be helping her but
              were only there to take advantage of her naivetÃ©. The surname
              "Valentine" was merely a name given to her by the doctor who woke
              her; the circumstances of her accident, her previous life, and
              even her real name all remain a mystery, and are only gradually
              revealed as the series progresses. It has been hinted that she
              came from Singapore on Earth, and was the daughter of a very
              wealthy family, as the city's famous Merlion Statue features
              prominently in scenes of her childhood, and that memories and a
              film from her childhood showed her living in a large mansion. In
              an early episode, she states that she is descended from Roma
              people, but she may well have been lying. Utterly betrayed by
              someone she thought she could trust after waking, Faye found
              herself burdened with even more money to pay, and the situation
              resulted in the hardening of her personality to an extreme degree.
              She even says in Session 11: â€œwe deceive or we are deceivedâ€�,
              and that â€œnothing good ever happened to me when I trusted
              others.â€�
              <br />
              <br />
              Throughout the series, though she retains her sarcastic demeanor
              and unpleasant nature up until the very end, it is easy to see her
              grow as a character. She learns to value her comrades, coming back
              to the Bebop when she realizes that it is the only home that she
              has left, naming it as the â€œonly place I could return toâ€�. She
              grows to understand the disadvantages of being a loner, and that
              even though her "family" is somewhat dysfunctional it is still a
              place where she will always belong.
              <br />
              <br />
              https://kitsu.io/api/edge/characters/3/media-characters
            </div>
          </li>
        </ul>

        <div id="paginate">
          <a className="prev" href="#">
            &#9664;
          </a>
          <a className="link-page" href="#">
            1
          </a>
          <a className="link-page" href="#">
            2
          </a>
          <a className="link-page" href="#">
            3
          </a>
          <a className="link-page" href="#">
            4
          </a>
          <a className="link-page" href="#">
            5
          </a>
          <a className="next" href="#">
            &#9654;
          </a>
        </div>
      </div>
    );
  }
}

export default list;
