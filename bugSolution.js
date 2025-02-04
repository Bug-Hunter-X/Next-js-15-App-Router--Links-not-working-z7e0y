```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;

// Ensure that you have the necessary pages created in the 'app' directory,
// such as app/page.js and app/about/page.js to correspond to the links.
```