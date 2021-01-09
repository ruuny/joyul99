import React, { useState } from 'react';

import _ from "lodash";
// import logo from './logo.svg';
import './App.css';


const joyulImages =
{
  cute: "https://thumbs.gfycat.com/NaiveAmbitiousIsabellinewheatear-size_restricted.gif",
  lovely: "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDlfMjgw/MDAxNTYyNjQxNjQ2MTkw.icnuG0Mx_U5lNDX53BdKOiQ1rsxiUi3GMNQ9SPvh4HAg.xiemERNj5j2xWRUtVQNCirDGfqreiwdMtVuhzdaXe_Eg.GIF.izonestrm/joyuri-20190709-113947-005.gif?type=w800",
  hot: "https://thumbs.gfycat.com/DeliriousImpassionedEelelephant-max-1mb.gif"
};

function Joyul(props: { type: "cute" | "lovely" | "hot" }) {
  return <Portrait url={joyulImages[props.type]} />
}

function Portrait(props: { url: string }) {
  return <img style={{ margin: 5, width: 120, height: 100 }} src={props.url} alt='joyul'></img>;
}

function JoyulRow(props: { count: number }) {
  return <div>{_.times(props.count, (i) => <Joyul key={i} type="cute" />)}</div>;
}

function JoyulGrid(props: { row: number, column: number }) {
  return <div>{_.times(props.row, (i) => <JoyulRow key={i} count={props.column} />)}</div>;
}


function App() {
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  return (
    <div>
      <span>{left}</span> * <span>{right}</span> = <span>{left * right}</span>
      <br />
      <button onClick={() => setLeft(left + 1)}>+</button>
      <button onClick={() => setLeft(left - 1)}>-</button>
      <button onClick={() => setRight(right + 1)}>+</button>
      <button onClick={() => setRight(right - 1)}>-</button>
      <br />
      <JoyulGrid row={left} column={right} />
    </div>
  );
}

export default App;
