import { useEffect, useState } from "react";
import ChartJs from "./ChartJsExample";
import D3Chart from "./D3Example";

export default function LibraryBlock({data, library}) {

  const [description, setDescription] = useState()

  useEffect(() => {
    library === 'D3.js' ?
    setDescription("D3.js is a popular JavaScript library used for creating data visualizations on the web. It provides a powerful set of tools for working with data, including the ability to create dynamic and interactive charts, graphs, and other visualizations using HTML, SVG, and CSS. With D3.js, developers have complete control over the look and feel of their visualizations, as well as the ability to manipulate and animate data in real-time. Its flexibility and extensibility make it a valuable tool for data-driven web applications.")
    :
    library === 'Chart.js' ?
    setDescription("Chart.js is a simple, flexible, and easy-to-use JavaScript library for creating different types of charts and graphs, such as bar charts, line charts, pie charts, and more. It uses HTML5 canvas and provides a wide range of customization options for the appearance of the charts, including colors, fonts, and labels. Chart.js also supports animations, interactivity, and responsiveness, making it a popular choice for data visualization on the web.")
    :
    setDescription('Default description')
  },[])
  return (
    <div className="grid grid-cols-2 gap-20 p-[40px] bg-[#9BA4B5] rounded-xl">
      <div className="p-4 bg-white rounded-xl shadow-md">
        {
          library === 'D3.js' ?
          <D3Chart data={data} />
          :
          library === 'Chart.js' ?
          <ChartJs data={data}/>
          :
          <></>
        }
        
      </div>
      <div className="p-4 grid gap-8 grid-rows-[1fr,5fr] bg-white rounded-xl shadow-md">
        <h2 className="text-lg font-medium text-4xl text-[#212A3E]">{library}</h2>
        <p className="font-normal font-medium text-base leading-26 text-[#394867]">
          {description}
        </p>
      </div>
    </div>
  );
}
