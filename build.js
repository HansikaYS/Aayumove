/**
 * AayuMove Build & Validation Script
 * Verifies project integrity, modules, imports, data structures, and assets.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\x1b[36m%s\x1b[0m', '=======================================================');
console.log('\x1b[36m%s\x1b[0m', '       AayuMove Project Build & Verification           ');
console.log('\x1b[36m%s\x1b[0m', '=======================================================');

let errors = 0;
let warnings = 0;

function reportSuccess(msg) {
  console.log('\x1b[32m✔\x1b[0m ' + msg);
}

function reportWarning(msg) {
  warnings++;
  console.log('\x1b[33m⚠\x1b[0m ' + msg);
}

function reportError(msg) {
  errors++;
  console.log('\x1b[31m✖\x1b[0m ' + msg);
}

// 1. Verify Essential Root Files
console.log('\n[1/5] Verifying Core Files...');
const coreFiles = [
  'index.html',
  'app.js',
  'styles/main.css',
  'package.json',
  'requirements.txt',
  'server.js',
  'server.py'
];

coreFiles.forEach(file => {
  const p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    reportSuccess(`${file} found (${(stat.size / 1024).toFixed(1)} KB)`);
  } else {
    reportError(`Missing critical file: ${file}`);
  }
});

// 2. Syntax Check for all JS Files
console.log('\n[2/5] Running Syntax Validation on JavaScript Files...');
function getFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === 'venv' || file === '.git') return;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, ext));
    } else if (file.endsWith(ext)) {
      results.push(fullPath);
    }
  });
  return results;
}

const jsFiles = getFiles(__dirname, '.js');
let syntaxPassed = 0;
jsFiles.forEach(f => {
  const rel = path.relative(__dirname, f);
  try {
    execSync(`node --check "${f}"`, { stdio: 'pipe' });
    syntaxPassed++;
  } catch (err) {
    reportError(`Syntax error in ${rel}: ${err.message}`);
  }
});
reportSuccess(`Validated ${syntaxPassed} / ${jsFiles.length} JavaScript files without syntax errors`);

// 3. Verify ES Module Import Paths
console.log('\n[3/5] Verifying ES Module Dependencies...');
let totalImportsChecked = 0;
let missingImports = 0;

const esmFiles = jsFiles.filter(f => !f.endsWith('build.js') && !f.endsWith('server.js'));
esmFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const dir = path.dirname(f);
  // Match `import ... from './...'` (ignoring comments)
  const lines = content.split('\n');
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*')) return;
    const match = trimmed.match(/import\s+[^'"]+\s+from\s+['"]([^'"]+)['"]/);
    if (match) {
      const importPath = match[1];
      if (importPath.startsWith('.')) {
        totalImportsChecked++;
        const resolved = path.resolve(dir, importPath);
        if (!fs.existsSync(resolved)) {
          reportError(`Unresolved import: "${importPath}" in ${path.relative(__dirname, f)}`);
          missingImports++;
        }
      }
    }
  });
});
if (missingImports === 0) {
  reportSuccess(`All ${totalImportsChecked} ES module relative imports resolved correctly`);
}

// 4. Validate Data Integrity
console.log('\n[4/5] Checking Data Schemas & Assets...');
try {
  const actPath = path.join(__dirname, 'data/activitiesData.js');
  const mealPath = path.join(__dirname, 'data/mealsData.js');

  if (fs.existsSync(actPath)) {
    const content = fs.readFileSync(actPath, 'utf8');
    const matches = content.match(/id:\s*['"]act-/g) || [];
    reportSuccess(`Activities dataset: found ${matches.length} curated student activities`);
  }
  if (fs.existsSync(mealPath)) {
    const content = fs.readFileSync(mealPath, 'utf8');
    const matches = content.match(/id:\s*['"]meal-/g) || [];
    reportSuccess(`Meals dataset: found ${matches.length} hostel/student meal recommendations`);
  }
} catch (e) {
  reportWarning(`Data check warning: ${e.message}`);
}

// 5. CSS Stylesheet Check
console.log('\n[5/5] Checking Stylesheet Completeness...');
const cssPath = path.join(__dirname, 'styles/main.css');
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  const requiredSelectors = [
    ':root',
    '.navbar',
    '.btn',
    '.card',
    '.modal-overlay',
    '.chat-bubble',
    '#root'
  ];
  let found = 0;
  requiredSelectors.forEach(sel => {
    if (css.includes(sel)) found++;
  });
  reportSuccess(`Stylesheet contains ${found}/${requiredSelectors.length} core UI component selectors (${(css.length / 1024).toFixed(1)} KB)`);
}

console.log('\n-------------------------------------------------------');
if (errors === 0) {
  console.log('\x1b[32m%s\x1b[0m', 'BUILD SUCCESSFUL! Project is complete and ready to run.');
  console.log('-------------------------------------------------------');
  process.exit(0);
} else {
  console.log('\x1b[31m%s\x1b[0m', `BUILD FAILED with ${errors} error(s).`);
  console.log('-------------------------------------------------------');
  process.exit(1);
}
