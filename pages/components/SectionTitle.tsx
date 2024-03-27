import type { NextPage } from 'next'
import React from "react";
import { Row, Col } from "reactstrap";

interface Props {
  isLeft?: boolean;
  title: string;
  desc: string;
}

const SectionTitle: NextPage<Props> = (props) => {
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs="12" className={props.isLeft ? "" : "text-center"}>
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4">
                {""}
                {props.title}{""}
              </h4>
              <p
                className={
                  props.isLeft
                    ? "text-muted para-desc mb-0"
                    : "text-muted para-desc mx-auto mb-0"
                }
              >
                Start working with{" "}
                <span className="text-primary fw-bold">Landrick</span>{" "}
                {props.desc}{" "}
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }


export default SectionTitle;
