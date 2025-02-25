import React from 'react'
import CssSidebar from '../CssSidebar'

export default function StylingTextWithCSS() {
  return (
    <>
    <div className="bar">
      <CssSidebar/>
    </div>
      <h1 id='heading'>Styling text with CSS</h1>

      <div className="course">
        <p>Styling text with CSS allows you to enhance the appearance of your webpage by modifying font properties, text alignment, colors, spacing, and more. This guide covers various CSS properties to style text effectively.</p>
        <h2>1. Colors</h2>
        <p>Colors play a huge role in how your text looks and feels. Whether you want your text to be bold and bright or soft and subtle, CSS gives you several ways to add colors. The cool thing? You get to choose how you define those colors!</p>
        <h3>1.Named Colors</h3>
        <p>The easiest way to color your text is by using named colors. CSS has over 140 predefined color names that you can use without needing to remember any fancy codes.
        <strong>Example:</strong>Red,blue,green,crimson,pink,black,white,grey etc..,</p>
        <div className="code">
        <p>h1,h2,p{"{"}</p>
          <p>  color: indigo;</p>
          <p>{"}"}</p>
        </div>
        <h3>2. Hexadecimal Colors</h3>
        <p>When you want precise control over your colors, hex codes are your best friend. Think of them as codes that computers understand to make the exact color you want. Hex codes start with a # and are followed by six characters made up of numbers and letters.</p>
        <p>The first two characters represent red.</p>
        <p>The next two represent green.</p>
        <p>The last two represent blue.</p>
        <p><strong>Example:</strong>#000000-Black</p>
        <div className="code">
        <p>p{"{"}</p>
          <p>  color: #ff5764;</p>
          <p>{"}"}</p>
        </div>
        <h3>3. RGB and RGBA Colors</h3>
        <p>If hex codes feel like secret codes, don’t worry! CSS also lets you define colors using RGB (Red, Green, Blue) values. This is great because instead of thinking in code, you’re simply telling CSS how much red, green, and blue to use. The values range from 0 to 255 for each color.</p>
        <div className="code">
        <p>p{"{"}</p>
          <p>  color: rgb(60, 0, 255); </p>
          <p>{"}"}</p>
        </div>
        <p>In RGBA, The "A" stands for Alpha, which controls opacity. An alpha value of 1 means fully visible, and 0 means fully transparent.</p>
        <div className="code">
        <p>p{"{"}</p>
          <p>  color: rgba(0, 255, 47, 0.4); </p>
          <p>{"}"}</p>
        </div>
        <h3>4. HSL and HSLA Colors</h3>
        <p>The HSL model is a bit different but super cool when you get the hang of it. HSL stands for Hue, Saturation, and Lightness.</p>
        <p>Hue: The type of color (like red, blue, or green) and is a number from 0 to 360, like degrees on a color wheel. For example, 0 is red, 120 is green, and 240 is blue.</p>
        <p>Saturation: How intense or dull the color is. It ranges from 0% (completely gray) to 100% (fully vibrant).</p>
        <p>Lightness: How light or dark the color is. It ranges from 0% (black) to 100% (white).</p>
        <div className="code">
        <p>p{"{"}</p>
          <p>  color: hsl(66, 100.00%, 50.00%); </p>
          <p>{"}"}</p>
        </div>
        <p>Just like RGBA, HSLA lets you add transparency with an alpha value.</p>
        <h2>2. Font Properties</h2>
        <h3>1.Font-Family</h3>
        <p>The font-family property defines the typeface for text. It allows specifying multiple fonts, where the browser will use the first available one. Generic font families like sans-serif and serif serve as fallbacks if the specified fonts are not available.</p>
        <div className="code">
        <p>p{"{"}</p>
          <p>  font-family:"Arial","sans-serif";</p>
          <p>{"}"}</p>
        </div>
        <h3>2.font-size</h3>
        <p>The font-size property determines the size of the text. It can be specified in absolute units like px (pixels) or relative units like em and %, which adjust based on parent elements. Using rem ensures consistency across the entire page.</p>
        <div className="code">
        <p>h2{"{"}</p>
          <p>    font-size: 24px;</p>
          <p>{"}"}</p>
        </div>
        <h3>3.font-weight</h3>
        <p>This property controls the thickness of text characters. It accepts values such as normal, bold, lighter, or numerical values from 100 (thin) to 900 (extra bold). Not all fonts support every weight level.</p>
        <div className="code">
        <p>p{"{"}</p>
          <p> font-weight: bold;</p>
          <p>{"}"}</p>
        </div>
        <h3>4.font-style</h3>
        <p>Defines whether text appears in a normal, italic, or oblique style. The italic value applies a predefined slanted version of the font, while oblique artificially slants the text if no italic version is available.</p>
        <div className="code">
        <p>p{"{"}</p>
          <p> font-style: italic;</p>
          <p>{"}"}</p>
        </div>
        <h2>3.Text Alignment & Spacing</h2>
        <h3>1.text-align</h3>
        <p>Controls the alignment of text within its container. Options include left (default), center, right, and justify, which distributes text evenly across the line width. Justified text improves readability for paragraphs but may introduce spacing inconsistencies.</p>
        <div className="code">
        <p>h1{"{"}</p>
          <p>text-align:center;</p>
          <p>{"}"}</p>
        </div>
        <h3>2.letter-spacing</h3>
        <p>Adjusts the spacing between characters. Increasing the value makes text more readable in headings, while reducing it helps compact text in specific layouts. It is useful for creating distinct typography styles.</p>
        <div className="code">
        <p>h1{"{"}</p>
          <p> letter-spacing: 2px;</p>
          <p>{"}"}</p>
        </div>
        <h3>3.line-height</h3>
        <p>Defines the space between lines of text. A higher value improves readability, especially for large blocks of text, while a lower value makes text appear more compact. A recommended value is 1.5 for body text.</p>
        <div className="code">
        <p>p{"{"}</p>
          <p>  line-height: 1.5;</p>
          <p>{"}"}</p>
        </div>
        <h3>4.text-decoration</h3>
        <p>The text-decoration property allows you to add or remove text effects like underlines, overlines, or strikethroughs. This property is especially useful for styling links.</p>
        <div className="code">
        <p>h2{"{"}</p>
          <p>   text-decoration: underline;</p>
          <p>{"}"}</p>
        </div>
        <h3>5.text-transform</h3>
        <p>The text-transform property lets you change the case of your text without needing to retype it. This can be useful for headings or titles when you want them to always appear in uppercase.</p>
        <div className="code">
        <p>h2{"{"}</p>
          <p> text-transform: uppercase;</p>
          <p>{"}"}</p>
        </div>
      </div>
      <div className="buttns">
      <button>Mark As Compleated</button>
      <button>Next</button>
    </div>
    </>
  )
}
