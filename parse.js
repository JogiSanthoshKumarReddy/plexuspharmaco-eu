const fs = require('fs');

function extractMain(fileIn, fileOut) {
    const html = fs.readFileSync(fileIn, 'utf-8');
    const start = html.indexOf('<section class="breadcrumb-style1">');
    const end = html.indexOf('<footer class="footer-style1">');
    if (start !== -1 && end !== -1) {
        let mainHtml = html.substring(start, end);
        // Basic JSX conversions
        mainHtml = mainHtml.replace(/class=/g, 'className=')
                           .replace(/for=/g, 'htmlFor=')
                           .replace(/<img(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'))
                           .replace(/<br>/g, '<br />')
                           .replace(/<input(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'))
                           .replace(/<!--[\s\S]*?-->/g, '')
                           .replace(/style="display:none;"/g, 'style={{display: "none"}}')
                           .replace(/\srequired=""/g, ' required')
                           .replace(/\sselected=""/g, ' defaultValue');
                           
        const component = `
export default function Page() {
    return (
        <main>
            ${mainHtml}
        </main>
    );
}
`;
        fs.writeFileSync(fileOut, component);
        console.log("Wrote " + fileOut);
    } else {
        console.log("Could not find start/end in " + fileIn);
    }
}

extractMain('/Users/Guest_Account/.gemini/antigravity-ide/brain/d301ffa1-aed5-46b5-acc6-b5e3434a43e9/.system_generated/steps/45/content.md', 'app/sub/biogenix/page.tsx');
extractMain('/Users/Guest_Account/.gemini/antigravity-ide/brain/d301ffa1-aed5-46b5-acc6-b5e3434a43e9/.system_generated/steps/57/content.md', 'app/sub/biocare/page.tsx');
