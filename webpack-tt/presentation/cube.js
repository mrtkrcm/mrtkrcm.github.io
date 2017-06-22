import React from "react";
require("../assets/cube.css");

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.deg = 90;
    this.f31 = "1px 6px 6px 1px";
    this.f32 = "1px 1px 6px 6px";
    this.f33 = "6px 1px 1px 6px";
    this.f34 = "6px 6px 1px 1px";

    this.f1 = "1px 6px 6px 1px";
    this.f4 = "1px 1px 6px 6px";
    this.f = "1px";

    this.i = 0;

    this.rotate = this.rotate.bind(this);
    this.timerID = setInterval(() => this.rotate(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    this.rotate();
  }

  rotate() {
    this.i += 1;

    this.refs.cubeOuter.setAttribute("style", `transform: translateX(-50%) scale3d(1, 1, 1) rotateX(0deg) rotateY(${this.deg * this.i}deg) rotateZ(0deg)`);
    this.refs.cubeInner.setAttribute("style", `transform: translateX(-50%) scale3d(0.5, 0.5, 0.5) rotateY(${-this.deg * this.i}deg) rotateX(0deg) rotateZ(0deg)`);

    if (this.i % 4 === 1) {
      this.refs.face0.style.borderWidth = `${this.f}`;
      this.refs.face4.style.borderWidth = `${this.f}`;
      this.refs.face3.style.borderWidth = `${this.f1}`;
      this.refs.face5.style.borderWidth = `${this.f4}`;

      this.refs.face2.style.borderWidth = `${this.f31}`;
    } else if (this.i % 4 === 2) {
      this.refs.face0.style.borderWidth = `${this.f}`;
      this.refs.face3.style.borderWidth = `${this.f}`;
      this.refs.face4.style.borderWidth = `${this.f4}`;
      this.refs.face5.style.borderWidth = `${this.f1}`;

      this.refs.face2.style.borderWidth = `${this.f32}`;
    } else if (this.i % 4 === 3) {
      this.refs.face5.style.borderWidth = `${this.f}`;
      this.refs.face3.style.borderWidth = `${this.f}`;
      this.refs.face0.style.borderWidth = `${this.f4}`;
      this.refs.face4.style.borderWidth = `${this.f1}`;

      this.refs.face2.style.borderWidth = `${this.f33}`;
    } else if (this.i % 4 === 0) {
      this.refs.face4.style.borderWidth = `${this.f}`;
      this.refs.face5.style.borderWidth = `${this.f}`;
      this.refs.face0.style.borderWidth = `${this.f1}`;
      this.refs.face3.style.borderWidth = `${this.f4}`;

      this.refs.face2.style.borderWidth = `${this.f34}`;
    }
  }

  render() {
    return (
      <span className="cube">
        <figure className="cube_outer" ref="cubeOuter">
          <section className="cube_face_outer" ref="face0" />
          <section className="cube_face_outer" ref="face1" />
          <section className="cube_face_outer" ref="face2" />
          <section className="cube_face_outer" ref="face3" />
          <section className="cube_face_outer" ref="face4" />
          <section className="cube_face_outer" ref="face5" />
        </figure>
        <figure className="cube_inner" ref="cubeInner">
          <section className="cube_face_inner" />
          <section className="cube_face_inner" />
          <section className="cube_face_inner" />
          <section className="cube_face_inner" />
          <section className="cube_face_inner" />
          <section className="cube_face_inner" />
        </figure>
      </span>
    );
  }
}
