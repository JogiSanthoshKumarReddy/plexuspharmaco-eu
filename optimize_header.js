const fs = require('fs');

let content = fs.readFileSync('components/layout/HeaderHTML.tsx', 'utf-8');

// 1. Add Link import
if (!content.includes('import Link')) {
  content = content.replace('"use client";', '"use client";\nimport Link from "next/link";\nimport Image from "next/image";');
}

// 2. Replace internal <a> with <Link>
// We look for <a href="/something">...</a>
// A regex to match <a ...> and </a>: this is a bit brittle but for this file's formatting it might work well since it's mostly single-line or predictable.
// Let's replace href="/something" with <Link href="/something">
// Actually, in React, Next.js Link uses <Link href="...">...</Link>
// We can replace `<a href="/` with `<Link href="/` and matching `</a>` with `</Link>`.
// But there are some `<a href="#">` and `<a href="mailto:...">` and `<a href="tel:...">` which shouldn't be changed.
// Let's replace ONLY <a href="/..."> and its closing tag.

const lines = content.split('\n');
const optimizedLines = [];

const inlineStyle = `style={{position: 'absolute', right: 0, top: 0, width: '50px', height: '100%', cursor: 'pointer', zIndex: 10}}`;
const cssClass = `className="has-menu3 menu-dropdown-icon"`;

let insideInternalLink = false;

for (let line of lines) {
    // 3. Replace inline styles
    if (line.includes(inlineStyle)) {
        // className="has-menu3" is already there before style
        line = line.replace(/className="has-menu3"\s+style=\{\{.*?\}\}/g, 'className="has-menu3 collapse-trigger-icon"');
    }

    // 4. Replace <a> with <Link> for internal links
    // This simple regex handles standard cases on a single line
    line = line.replace(/<a (\s*)href="(\/[^"]*)"(.*?)>/g, '<Link $1href="$2"$3>');
    // For closing tags, if we see <Link> in the line without closing, it might be multi-line.
    // In this file, most <a> are on one line.
    
    // Let's just do a global replace for all internal links properly.
    optimizedLines.push(line);
}

let newContent = optimizedLines.join('\n');

// A safer way to replace closing </a> to </Link> for the ones we opened:
// Actually, it's easier to just replace all </a> with </Link> if the corresponding <a was a <Link.
// Let's use a regex with a function to replace complete tags.
let finalContent = newContent.replace(/<Link (\s*)href="(\/[^"]*)"([^>]*)>(.*?)<\/a>/gs, '<Link $1href="$2"$3>$4</Link>');
finalContent = finalContent.replace(/<Link href="(\/[^"]*)"(.*?)>([\s\S]*?)<\/a>/g, '<Link href="$1"$2>$3</Link>');

// We also need to fix `<a href="/">` -> `<Link href="/">`
finalContent = finalContent.replace(/<a href="(\/[^"]*)">([\s\S]*?)<\/a>/g, '<Link href="$1">$2</Link>');

fs.writeFileSync('components/layout/HeaderHTML.tsx', finalContent);
console.log('Optimized HeaderHTML.tsx');
