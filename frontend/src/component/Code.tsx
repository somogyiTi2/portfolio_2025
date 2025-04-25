import { useEffect, useState } from 'react';
import { CodeBlock , tomorrowNightEighties, paraisoLight } from "react-code-blocks";
import { useTheme } from '../store/theme';
import { useTranslation } from 'react-i18next';
import '../i18n';

const Code = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const codeTheme = theme === 'dark' ? tomorrowNightEighties : paraisoLight;
    const [codeText, setCodeText] = useState<string>("")
    const [counter, setCounter] = useState(1);
    const fullText = t('portfolioCode'); 

    useEffect(() => {
        if (counter <= fullText.length) {
          const timeout = setTimeout(() => {
            setCodeText(fullText.slice(0, counter));
            setCounter((prev) => prev + 1);
          }, 15);
          return () => clearTimeout(timeout);
        }
      }, [counter, fullText]);

    return (
        <CodeBlock text={codeText} language="typescript" theme={codeTheme} />
    )
}

export default Code