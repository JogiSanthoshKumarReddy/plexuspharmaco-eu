const fs = require('fs');

let content = fs.readFileSync('components/layout/HeaderHTML.tsx', 'utf-8');

// Undo the bad Link replacement:
// If <Link href="#"> ... </Link> -> <a href="#"> ... </a>
content = content.replace(/<Link ([^>]*href=\"#[^\"]*\".*?)>([\s\S]*?)<\/Link>/g, '<a $1>$2</a>');
// If `<a href="#"> ... </Link>`
content = content.replace(/<a ([^>]*href=\"#[^\"]*\".*?)>([\s\S]*?)<\/Link>/g, '<a $1>$2</a>');

// For any remaining `</a>` that doesn't match `<a `, or `<Link ` that doesn't match `</Link>`
// Let's just fix it fundamentally. Let's change everything back to `<a>` and `</a>`, then do it right.
content = content.replace(/<Link/g, '<a').replace(/<\/Link>/g, '</a>');

// Now, convert only internal links to <Link>. An internal link is an <a> tag where href starts with "/" and doesn't equal "/#".
// It is easier to use regex with a replacement function that balances or matches up to the closing tag if we assume no nested <a> tags.
content = content.replace(/<a([^>]*?)href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (match, before, href, after, inner) => {
    // If it's just "#", leave as <a>
    if (href === '/' || href.startsWith('/')) {
        return `<Link${before}href="${href}"${after}>${inner}</Link>`;
    }
    return match;
});

// Also remove duplicated import if we run it multiple times.
let imports = content.match(/import Link from "next\/link";/g);
if (imports && imports.length > 1) {
    content = content.replace(/import Link from "next\/link";/, '');
}

fs.writeFileSync('components/layout/HeaderHTML.tsx', content);
