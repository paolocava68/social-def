import React from "react";
import { Link } from "react-router-dom";
import {MDBCol, MDBIcon, MDBRow} from "mdb-react-ui-kit";

function Posts() {
  return (
      <MDBRow>
        <MDBCol lg="6" md="12">
         <div style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1.5rem"
          }}>

            <div className="z-depth-1-half mb-4 overlay rounded">
              <Link to={`${process.env.PUBLIC_URL}/blog/articolo1`}>
                 <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/82.webp"
                  alt=""
              />
            </Link>
                <div overlay="white-slight" className="waves-light" />
                </div>
            <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="fitness" className="pr-2" />
                  Fitness
                </h6>
              <p className="font-weight-bold dark-grey-text">
                <MDBIcon far icon="" className="pr-2" />
                20/08/2018
              </p>
            </div>

            <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
              <Link to={`${process.env.PUBLIC_URL}/blog/articolo1`}>
              Titolo
              </Link>
            </h3>
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor
              repellendus.
            </p>

          </div>


          <div style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1.5rem"
          }}>
            <MDBRow>
              <MDBCol md="3">

                <div className="z-depth-1-half mb-4 overlay rounded">
                  <Link to={`${process.env.PUBLIC_URL}/blog/articolo1`}>
                  <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/photo8.webp"
                      alt=""
                  />
                  </Link>
                    <div overlay="white-slight" className="mask waves-light" />
                </div>

              </MDBCol>
              <MDBCol md="9">
                <p className="font-weight-bold dark-grey-text">
                  19/08/2018
                </p>
                <div className="d-flex justify-content-between">
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <Link to={`${process.env.PUBLIC_URL}/blog/articolo2`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit
                    </Link>
                  </MDBCol>
                    <MDBIcon icon="angle-double-right" />
                </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1.5rem"
          }}>
            <MDBRow>
              <MDBCol md="3">
                <div className="z-depth-1-half mb-4 rounded overlay">
                  <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/54.webp"
                      alt=""
                  />
                  <Link to={`${process.env.PUBLIC_URL}/blog/articolo3`}>
                    <div overlay="white-slight" className="mask waves-light" />
                  </Link>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <p className="font-weight-bold dark-grey-text">
                  18/08/2018
                </p>
                <div className="d-flex justify-content-between">
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <Link to={`${process.env.PUBLIC_URL}/blog/articolo3`}>
                      Soluta nobis est eligendi optio cumque nihil impedit
                      quo minus
                    </Link>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="mb-4">
            <MDBRow>
              <MDBCol md="3">
                <div className="z-depth-1-half mb-4 rounded overlay">
                  <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/49.webp"
                      alt=""
                  />
                                     <div overlay="white-slight" className="mask waves-light" />

                </div>
              </MDBCol>
              <MDBCol md="9">
                <p className="font-weight-bold dark-grey-text">
                  17/08/2018
                </p>
                <div className="d-flex justify-content-between">
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="dark-grey-text">
                      Voluptatem accusantium doloremque
                    </a>
                  </MDBCol>
                    <MDBIcon icon="angle-double-right" />
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>

        <MDBCol lg="6" md="12">
          <div style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1.5rem"
          }}>
            <div className="z-depth-1-half mb-4 rounded overlay">
              <Link to={`${process.env.PUBLIC_URL}/blog/articolo2`}>
              <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/86.webp"
                  alt=""
              />
              </Link>
                <div overlay="white-slight" className="mask waves-light" />
            </div>
            <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">
                  <MDBIcon icon="" className="pr-2" />
                  Yoga
                </h6>
              <p className="font-weight-bold dark-grey-text">
                <MDBIcon far icon="clock" className="pr-2" />
                24/08/2018
              </p>
            </div>
            <Link to={`${process.env.PUBLIC_URL}/blog/articolo2`}>
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
              <a href="#!">Titolo</a>
            </h3>
            <p className="dark-grey-text">
              Sed ut perspiciatis unde voluptatem omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae.
            </p>
            </Link>
          </div>

          <div style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1.5rem"
          }}>
            <MDBRow>
              <MDBCol md="3">
                <div className="z-depth-1-half mb-4 rounded overlay">
                  <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/86.webp"
                      alt=""
                  />
                  <a href="#!">
                    <div overlay="white-slight" className="mask waves-light" />
                  </a>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <p className="font-weight-bold dark-grey-text">
                  23/08/2018
                </p>
                <div className="d-flex justify-content-between">
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="dark-grey-text">
                      Itaque earum rerum hic tenetur a sapiente delectus
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div style={{
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "1.5rem"
          }}>
            <MDBRow>
              <MDBCol md="3">
                <div className="z-depth-1-half mb-4 overlay rounded">
                  <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/48.webp"
                      alt=""
                  />
                  <a href="#!">
                    <div overlay="white-slight" className="mask waves-light" />
                  </a>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <p className="font-weight-bold dark-grey-text">
                  22/08/2018
                </p>
                <div className="d-flex justify-content-between">
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="dark-grey-text">
                      Soluta nobis est eligendi optio cumque nihil impedit
                      quo minus
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </div>

          <div className="mb-4">
            <MDBRow>
              <MDBCol md="3">
                <div className="z-depth-1-half mb-4 rounded overlay">
                  <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).webp"
                      alt=""
                  />
                  <a href="#!">
                    <div overlay="white-slight" className="mask waves-light" />
                  </a>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <p className="font-weight-bold dark-grey-text">
                  21/08/2018
                </p>
                <div className="d-flex justify-content-between">
                  <MDBCol size="11" className="text-truncate pl-0 mb-3">
                    <a href="#!" className="dark-grey-text">
                      Maiores alias consequatur aut perferendis
                    </a>
                  </MDBCol>
                  <a href="#!">
                    <MDBIcon icon="angle-double-right" />
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
  );
}

export default Posts;
