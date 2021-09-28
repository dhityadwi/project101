import logo from "./asset/logo.png";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]);
  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ]);
  const [year, setYear] = useState([
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
  ]);

  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddres] = useState();
  const [Email, setEmail] = useState();

  const url = "https://restcountries.eu/rest/v2/all ";

  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="App">
      <div className="head">
        <img src={logo} alt="img" />
      </div>

      <div className="create">
        <p>You don't have an account yet, please craete a new account</p>
      </div>

      <form className="form">
        <h4>Create new account</h4>
        <div className="id">
          <p>Tittle</p>
          <div className="radio-buttons">
            <input id="mrs" value="mrs" name="platform" type="radio" />
            Mrs
            <input id="ms" value="ms" name="platform" type="radio" />
            Ms
            <input id="mdm" value="mdm" name="platform" type="radio" />
            Mdm
            <input id="mr" value="mr" name="platform" type="radio" />
            Mr
            <input id="dr" value="dr" name="platform" type="radio" />
            Dr
          </div>

          <div className="name">
            <div className="lastName">
              <p>
                Last name<span>*</span>
              </p>
              <input type="text" placeholder="Last name" />
            </div>

            <div className="firstName">
              <p>
                Fisrt name<span>*</span>
              </p>
              <input type="text" placeholder="First name" />
            </div>
          </div>

          <div className="phone">
            <div className="mobilePhone">
              <p>
                Mobile phone number<span>*</span>
              </p>
              <select id="country" name="countries" className="country">
                {countries.map((country) => {
                  <option>{country}</option>;
                })}
              </select>

              <input
                type="text"
                placeholder="Mobile phone number"
                className="number"
              />
            </div>
          </div>
        </div>

        <div className="address">
          <p>Address</p>
          <div className="add">
            <p>Address</p>
            <input type="text" placeholder="Address" />
          </div>

          <div className="countries">
            <div className="location">
              <p>
                Country/Location<span>*</span>
              </p>
              <select type="text" placeholder=" Country/Location">
                Country/Location
              </select>
            </div>

            <div className="province">
              <p>
                Province/District<span>*</span>
              </p>
              <select type="text" placeholder="Province/District">
                Province/District
              </select>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="email">
            <p>
              Email Address<span>*</span>
            </p>
            <input type="text" placeholder=" Email Address" />
          </div>

          <div className="birth">
            <p className="title">
              Date of birth<span>*</span>
            </p>
            <select type="text" placeholder="DD">
              {date.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </div>

          <div className="month">
            <p className="title">
              Month<span>*</span>
            </p>
            <select type="text" placeholder="MM">
              {month.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </div>

          <div className="year">
            <p className="title">Year</p>
            <select type="text" placeholder="YYYY">
              {" "}
              {year.map((type) => (
                <option>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="note">
          <h2>Standard Privacy Note</h2>
          <p>
            I warrant that the above information is true and correct. I
            understand that failure to answer all questions listed in this
            application form may prevent L'OCCITANE from processing my
            application; and L 'OCCITANE may refuse to accept this application
            in the right of my individual circumstance.
          </p>

          <p>
            I understand that the information collected will be used and
            retained by L'OCCITANE for the purpose of (i) my application of
            membership program of L 'OCCITANE (ii) providing member-exclusive
            services; and (iii) the daily management operation and maintenance
            of membership account at L'OCCITANE.
          </p>

          <p>
            I understand that it is necessary for me to provide L'OCCITANE with
            data in connection with the privilege. Failure to provide such data
            may result in L 'OCCITANE stores or official website.
          </p>

          <p>
            L'OCCITANE reserves the right to change any of the terms and
            conditions without prior notice. Changes will be posted on signage
            placed at L'OCCITANE stores or official website.
          </p>

          <p>
            I understand that L'OCCITANE may use my personal information for the
            purpose of providing or promoting servicesI products made available
            by L'OCCITANE. To choose whether to receive any promotional
            information sent by L'OCCITANE, please tick the box below
          </p>

          <p>
            I want to receive information or communication from L'OCCITANE.{" "}
          </p>
          <div className="checkbox-buttons">
            <div>
              <label>SMS & Mobile Call</label>
              <input id="sms" value="sms" name="platform" type="checkbox" />
            </div>
            <div>
              <label>Emailing</label>
              <input id="email" value="email" name="platform" type="checkbox" />
            </div>
            <div>
              <label>Mailing</label>
              <input id="mail" value="mail" name="platform" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="term">
          <div>
            <input id="term" value="term" name="platform" type="checkbox" />
          </div>
          <label>
            I have read and understood the above terms and conditions and hereby
            agree that I will be bounded by these conditions and policies once I
            have submitted this application form.
          </label>
        </div>
        <div className="button">
          <button>Create Custumer</button>
        </div>
      </form>
    </div>
  );
}

export default App;
