import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfModule = require('pdf-parse');
const pdf = pdfModule.default || pdfModule;

const files = [
    'B-Care Brochure 2026 output Draft 25.02.26 1.pdf',
    'BIMA_B-Health Family_Final.pdf',
    'BIMA_B-Health Single Joint_Final.pdf',
    'BIMA_B-Life Joint_Final.pdf'
];

async function extract() {
    for (const file of files) {
        if (fs.existsSync(file)) {
            const dataBuffer = fs.readFileSync(file);
            try {
                const data = await pdf(dataBuffer);
                console.log(`\n\n--- CONTENT OF ${file} ---\n`);
                console.log(data.text);
            } catch (err) {
                console.log(`\n\n--- ERROR PARSING ${file} ---\n`, err.message);
            }
        } else {
            console.log(`\n\n--- FILE NOT FOUND: ${file} ---\n`);
        }
    }
}

extract().catch(console.error);
