import React from 'react'
import HtmlSidebar from '../HtmlSidebar'
import { Link } from 'react-router-dom'

export default function DocumentStructureTags() {
  return (
    <>
      <div className="bar">
        <HtmlSidebar/>
      </div>
      <h1 id='heading'>Document Structure Tags</h1>
      <div className="course">
        <p>We already looked at one type of tags called Document Structure Tags. Following are those tags, with some tips that you should keep in mind.</p>
        <h3>Doctype:{" <!DOCTYPE html>"}</h3>
        <p>Always include {"<!DOCTYPE html>"} at the top of your HTML files to ensure that browsers render your page in standards-compliant mode. Forgetting the {"<!DOCTYPE html>"} declaration, which can cause your page to render in "quirks mode," leading to unpredictable behavior across browsers.</p>
        <h3>HTML Tag: {"<html>"}</h3>
        <p>Always include the lang attribute in the {"<html> "}tag to specify the language of the content (e.g., {"<html lang=(en)>"} for English). This is important for accessibility and SEO.</p>
        <h3> Head Tag:{" <head>"}</h3>
        <p> Include a <code>&lt;meta charSet="UTF-8" /&gt;</code> tag to ensure your page handles special characters correctly.
        Add <code>{'<meta name="description" content="Your description here">'}</code> to provide a brief summary of your
        page's content for search engines.</p>
        <h3> Title Tag: {"<title>"}</h3>
        <p>The {"<title>"} tag is one of the most critical elements for SEO. It should accurately reflect the content of the page and include keywords that users might search for. Provide a unique and relevant title for the page.</p>
        <h3>Body tag:{"<body>"}</h3>
        <p>The content within the {"<body>"} tag is what search engines index, so it's vital to include keywords naturally and ensure the content is high-quality and relevant to your target audience.</p>
      </div>
      
      <div className="buttns">
      <button>Mark As Compleated</button>
      <Link to={'/Courses/html/m2/Text-Formatting-Tags'}><button>Next</button></Link>
    </div>
    </>
  )
}
