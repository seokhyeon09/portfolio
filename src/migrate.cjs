const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.scss')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const newContent = content.replace(/@import\s+(['"])(.*?)\1\s*;/g, "@use $1$2$1 as *;");
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}
processDir(__dirname);
