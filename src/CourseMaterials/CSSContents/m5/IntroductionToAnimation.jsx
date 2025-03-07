import React from 'react'
import CssSidebar from '../CssSidebar'
import { Link } from 'react-router-dom'

export default function IntroductionToAnimation() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1>Introduction to Animation</h1>
      <div className="course">
        <p>CSS Animations allow you to add a touch of interactivity and movement to your web pages, transforming static elements into engaging visual experiences. In this article, we'll dive into the basics of CSS animations and how to use key properties to create smooth, dynamic effects. Whether it's animating text, buttons, or entire sections of a page, you'll learn how to create engaging animations with ease.</p>
        <p>Let’s break down each property one by one and explore how you can use CSS animations with some fun and practical examples.</p>
        <h2>1. @keyframe</h2>
        <p>The @keyframes rule allows you to create animations by specifying the stages or steps through which the animation will proceed. This is done by defining the from, to, or percentage-based steps for changes over time.</p>
        <div className="code">
          <pre>
            {`<div class="box">Animate Me</div>`}
          </pre>
        </div>
        <div className="code">
          <pre>
            {`@keyframes colorChange {
  from {
    background-color: lightblue;
  }
  to {
    background-color: lightcoral;
  }
}

.box {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  animation-name: colorChange;
  animation-duration: 3s;
}
`}
          </pre>
        </div>
       <h2>2. animation-name and animation-duration</h2>
       <p>animation-name defines which @keyframes animation to apply to an element.
       animation-duration specifies how long the animation should take from start to finish.</p>
       <h4>Example</h4>
       <div className="code">
        <pre>
          {`<div class="ball"></div>`}
        </pre>
       </div>
       <div className="code">
        <pre>
          {`@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(300px);
  }
}

.ball {
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 50%;
  animation-name: moveRight;
  animation-duration: 2s;
}
`}
        </pre>
       </div>

       <h2>3. animation-timing-function: </h2>
       <p>The animation-timing-function property controls the pace of the animation, determining how the transition occurs between the keyframes. Common timing functions include:</p>
       <ul>
        <li><strong>ease:</strong>Slow start, faster middle, slow end.</li>
        <li><strong>linear:</strong>Constant speed.</li>
        <li><strong>ease-in:</strong>Slow start.</li>
        <li><strong>ease-out:</strong> Slow end.</li>
        <li><strong>ease-in-out:</strong>Slow start and end.</li>
       </ul>
       <div className="code">
        <pre>
          {`.ball {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}
`}
        </pre>
       </div>
       <h2>4. animation-delay</h2>
       <p>Sometimes, you may want an animation to start after a delay. The animation-delay property allows you to set a wait time before the animation begins.</p>
       <div className="code">
        <pre>
          {`.ball {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-delay: 1s; /* Wait 1 second before starting */
}
`}
        </pre>
       </div>
       <h2>
       5. animation-iteration-count</h2>
       <p>The animation-iteration-count property specifies how many times the animation should repeat. You can use a number (like 2 or 5), or use infinite to repeat the animation forever.</p>
      <div className="code">
        <pre>
          {`.ball {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
`}
        </pre>
      </div>
      <h2>6. animation-direction</h2>
      <p>The animation-direction property controls whether the animation should play in reverse on alternate cycles. Options include:

normal: Plays forward.
reverse: Plays backward.
alternate: Plays forward, then reverses.
alternate-reverse: Plays backward, then forward.</p>
      <div className="code">
        <pre>
          {`.ball {
  animation-name: moveRight;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; /* Moves forward, then backward */
}
`}
        </pre>
      </div>
      </div>

      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={'/courses/css/m5/shorthand'}><button>Next</button></Link>
    </div>
    </>
  )
}
