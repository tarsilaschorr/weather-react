import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Container">
      <div className="Card App">
        <div className="card-body">
          <h1> Weather App </h1>
          <form id="form">
            <input
              className="type"
              type="text"
              id="search-city"
              placeholder="Type City"
              data-netlify="true"
              autofocus
              autocomplete="off"
            />
            <input type="hidden" name="form-name" value="name_of_my_form" />
            <input
              className="button shadow-sm"
              id="search-button"
              type="submit"
              value="search"
            />
            <input
              className="button shadow-sm"
              id="current-button"
              type="submit"
              value="current"
            />
          </form>
          <h2 id="date">Tuesday, July 27th</h2>

          <div className="card">
            <div className="city">
              <div className="row">
                <div className="col-3 main-icon">
                  <img
                    src="https://openweathermap.org/img/wn/01d@2x.png"
                    class="icon"
                    alt="icon"
                  />
                </div>
                <div class="col-9">
                  <div class="card">
                    <div class="card-body temperature">
                      <p>
                        <span id="typed-city">Porto Alegre, BR</span>
                        <div class="description" id="description">
                          {" "}
                          Clear{" "}
                        </div>
                        <div class="row">
                          <div class="col-5">
                            <span id="temperature">12ºC</span>
                            <br />
                            <div class="degrees">
                              <a href="#" id="celcius-link" className="active">
                                {" "}
                                ºC{" "}
                              </a>{" "}
                              |{" "}
                              <a
                                href="#"
                                id="fahrenheit-link"
                                className="inactive"
                              >
                                {" "}
                                ºF{" "}
                              </a>
                            </div>
                          </div>
                          <div class="col-7 percentage">
                            <ul>
                              <li id="wind">Wind 1km/h</li>
                              <li id="humidity">Humidity 56%</li>
                            </ul>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
