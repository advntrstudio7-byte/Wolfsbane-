import fs from 'fs';
import path from 'path';

export default function AdminPage() {
  // Read the admin HTML file
  const filePath = path.join(process.cwd(), 'admin', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
