const fs = require('fs');
const path = require('path');

// Create app-example directory if it doesn't exist
if (!fs.existsSync('app-example')) {
  fs.mkdirSync('app-example');
}

// Copy current app content to app-example
if (fs.existsSync('app')) {
  const files = fs.readdirSync('app');
  
  files.forEach(file => {
    const srcPath = path.join('app', file);
    const destPath = path.join('app-example', file);
    
    // Copy the file
    const content = fs.readFileSync(srcPath);
    fs.writeFileSync(destPath, content);
  });
  
  // Remove all files from app directory
  files.forEach(file => {
    const filePath = path.join('app', file);
    fs.unlinkSync(filePath);
  });
  
  // Create a blank index.tsx in app directory
  const blankContent = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>My fresh app. Start building!</Text>
    </View>
  );
}`;

  fs.writeFileSync(path.join('app', 'index.tsx'), blankContent);
  
  // Create a basic _layout.tsx
  const layoutContent = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}`;
  
  fs.writeFileSync(path.join('app', '_layout.tsx'), layoutContent);
}

console.log('Project reset complete!');
console.log('Your old files have been moved to app-example/');
console.log('You now have a fresh app/ directory to start development.');