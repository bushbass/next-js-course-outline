import React from 'react';

export default function Course() {
  return (
    <div>
      <h1>this is my next.js course outline</h1>
      <ul>
        <li>why use this? is it better than just html?</li>
        <li>
          I just like working in React. I like components. I'm comfortable in
          React. it compiles down to html anyway with ssg. ssg is used to make
          multiple pages. plus it gives option for ssr if needed. page based
          routing is simpler than react-router
        </li>
        <li>types of pages</li>
        <ul>
          <li>plain, no props at all</li>
          <li>single page w/ getStaticProps</li> <li>multiple with GSP</li>
          <li>SSR</li>
        </ul>
        <li>how to install with create next app</li>
        <li>strip homepage </li>
        <li>modify text and see changes</li>
        <li>components, header footer</li>
        <li>link tag</li>
        <li>image</li>
        <li>show css modules, maybe use styled components instead</li>
        <li>transfer components to layout, using children</li>
        <li>link tag, make a few pages and nav bar</li>
        <li>new single page with useStaticProps just a plain object </li>
        <li>convert to object in same file but outside of function</li>
        <li>move object to it's own file</li>
        <li>translate this to be an api call insted of local file</li>
        <li>make a dynamic page using [].js</li>
        <li>
          use data file similar to above but with a list of items instead of
          just properties
        </li>
        <li>
          useStaticPaths() to build routes, explain why this is needed but not
          before
        </li>
        <li>SSR</li>
      </ul>
    </div>
  );
}
