import { useEffect, useState } from 'react';
import './CodeBackground.css';
import { useTheme } from '../store/theme';

const terms: string[] = [
  "console.log()", "hello world!", "Math.floor()",
  "for (let i = 0; i < 6; i++) {", "Math.random()", " useEffect(...",
  "default", "/^[0-9A-Za-z-]+$/", "left.shift()", "var", "let", "useState()", "function",
  "const", "return", "if", "else", "while", "for", "switch", "case", "break", "continue",
  "try", "catch", "finally", "throw", "new", "delete", "typeof", "instanceof", "in", "var",
  "let", "Date()", "//TODO", "document.", "+=", ".sort()", "find()", ".toFixed(4)", "git", "commit -m",
  "cd ..", "npm i", "npm run dev", ".filter()", "(e)=>e+2", " float: right;", " opacity: 0.5;", "@media", "<h1>code</h1>", "#855f8d",
  "<a href='#me'>", "<hr/>", "<p/>", "Array.prototype.map()", "Array.prototype.reduce()", "setTimeout()", "setInterval()", "async/await",
  "Promise", "JSON.parse()", "JSON.stringify()", "null", "undefined", "useRef()", "useCallback()", "useMemo()", "props", "React.Fragment", "<div>",
  "<img src=\"...\" alt=\"...\">", "<button>", "display: flex;", "position: absolute;", "fetch()", "addEventListener()", "localStorage", "sessionStorage",
  "class", "import", "export", "git push", "git pull", "npm start", "box-sizing: border-box;", "margin: 0 auto;", "<span>", "<ul>", "<li>", "@keyframes",
  "transition: all 0.3s;", ":hover", "background-color: #fff;", "Array.prototype.forEach()", "Object.keys()", "Object.values()", "git branch", "npm install",
  "<form>", "<input type=\"text\">", "border-radius: 8px;", "z-index: 10;", "console.error()", "debugger"
];

interface Term {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}

const CodeBackground = () => {
  const { theme } = useTheme();
  const [termData, setTermData] = useState<Term[]>([]);

  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const createTerm = (): void => {
      const newTerm: Term = {
        id: Math.random(),
        text: terms[Math.floor(Math.random() * terms.length)],
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 50),
        color: getRandomColor(),
      };
      setTermData((prev) => [...prev, newTerm]);
    };
    const interval = setInterval(createTerm, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`code-background ${theme}`}>
      {termData.map((term) => (
        <div
          key={term.id}
          className="term"
          style={{
            left: `${term.x}px`,
            top: `${term.y}px`,
            color: term.color,
          }}
        >
          {term.text}
        </div>
      ))}
    </div>
  );
};

export default CodeBackground;