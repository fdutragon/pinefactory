import { promises as fs } from 'fs';
import path from 'path';

const src = path.resolve('dist');
const dest = path.resolve('build');

async function copyDir(srcDir, destDir) {
  await fs.rm(destDir, { recursive: true, force: true });
  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

copyDir(src, dest)
  .then(() => {
    console.log('Copied dist -> build');
  })
  .catch((err) => {
    console.error('Error copying dist -> build:', err);
    process.exit(1);
  });
