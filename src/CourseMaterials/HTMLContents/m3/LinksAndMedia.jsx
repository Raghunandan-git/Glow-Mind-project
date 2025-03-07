import React from 'react'
import HtmlSidebar from '../HtmlSidebar'
import { Link } from 'react-router-dom'

export default function LinksAndMedia() {
  return (
    <>
    <div className="bar">
            <HtmlSidebar/>
          </div>
      <h1>Links and Media</h1>
      <div className="course">
        <p>In web development, linking and embedding media are essential components for creating interactive and engaging content. HTML provides various tags to handle links and media, allowing you to connect different parts of your website and incorporate images, videos, and other multimedia elements.</p>
        <h2>1.{" <a> "}Tag (Anchor Tag)</h2>
        <p>The {"<a>"} tag is used to create hyperlinks, which connect one page to another or link to external resources. It is one of the most fundamental tags in HTML.</p>
        <p><strong>Example</strong></p>
        <div className="code">
        <p>{"<a href=https://www.example.com>Visit Example</a>"}</p>
        </div>
        <h4>Attributes</h4>
        <ul>
          <li><strong>href:</strong> Specifies the URL of the page the link goes to.</li>
          <li><strong>target: </strong>Specifies where to open the linked document </li>
          <li><strong>title</strong>: Provides additional information about the link (displayed as a tooltip).</li>
        </ul>
        <h2>2.{" <img> "}Tag (Image Tag)</h2>
        <p>The {"<img>"} tag is used to embed images into a webpage. It is an inline element that requires specific attributes to function correctly.</p>
        <h4>Example</h4>
        <div className="code">
          <p>{"<img src=https://picsum.photos/600/400 alt=Beautiful scenery width=600 height=400>"}
          </p>
        </div>
        <h4>Attributes:</h4>
        <ul>
          <li>src: Specifies the path to the image file.</li>
          <li>alt: Provides alternative text for the image (important for accessibility and SEO).</li>
          <li>width and height: Define the dimensions of the image.</li>
        </ul>
        <h2>3.Video tag</h2>
        <p>The {"<video>"} tag is used to embed videos directly into a webpage. It supports various formats, such as MP4, WebM, and Ogg.
        </p>
        <h4>Example:</h4>
        <div className="code">
          <p>{"<video controls>"}</p>
          <p>{"<source src=video.mp4 type=video/mp4>"}</p>
          <p>{"</video>"}</p>
        </div>
        <h4>Attributes</h4>
        <ul>
          <li>controls: Adds playback controls like play, pause, and volume.</li>
          <li>autoplay: Starts playing the video automatically (not recommended due to user experience concerns).</li>
          <li>loop: Replays the video in a loop.</li>
        </ul>
        <h2>4.Audio tag</h2>
        <p>The {"<audio>"} tag is used to embed sound content into a webpage. Like the {"<video>"} tag, it supports multiple formats such as MP3, WAV, and Ogg.</p>
        <h4>Syntax:</h4>
        <div className="code">
        <p>{"<audio controls>"}</p>
          <p>{"<source src=audio.mp3 type=audio/mpeg>"}</p>
          <p>{"</audio>"}</p>
        </div>
        <h4>Attributes</h4>
        <ul>
          <li>controls: Adds playback controls like play, pause, and volume.</li>
          <li>autoplay: Starts playing the audio automatically </li>
          <li>loop: Replays the audio in a loop.</li>
        </ul>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={'/Courses/html/m3/HTML-Forms'}><button>Next</button></Link>
    </div>
    </>
  )
}
