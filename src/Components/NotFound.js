import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div>
            <div className="  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Looks like you're lost</h3>

                <p>The page you are looking for is not available!</p>

                <Link classNameName="link_404" to="/">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
