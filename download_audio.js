const fs = require('fs');
const path = require('path');

async function downloadFile(url, dest) {
    try {
        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
        });
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const buffer = Buffer.from(await response.arrayBuffer());
        if (buffer.length < 1000) throw new Error('File too small, likely an error page.');
        fs.writeFileSync(dest, buffer);
        console.log(`Downloaded ${path.basename(dest)} (${buffer.length} bytes)`);
    } catch (error) {
        console.error(`Error downloading ${dest}:`, error.message);
    }
}

const outputDir = path.join(__dirname, 'public', 'assets', 'audio');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = {
    'fan_hum.ogg': 'https://upload.wikimedia.org/wikipedia/commons/3/34/Sound_of_a_fan.ogg',
    'phone_ring.ogg': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Telephone_Ring_-_UK.ogg',
    'light_flicker.ogg': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Fluorescent_light_flicker.ogg',
    'jumpscare.ogg': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Screaming.ogg'
};

async function main() {
    await Promise.all(Object.entries(files).map(([name, url]) => downloadFile(url, path.join(outputDir, name))));
    console.log("All audio files downloaded!");
}
main();
