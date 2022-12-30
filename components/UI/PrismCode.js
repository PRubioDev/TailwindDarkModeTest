import { Prism } from '@mantine/prism';
import palenight from 'prism-react-renderer/themes/palenight';

const PrismCode = ({ language, code }) => {
    return (
      <Prism
        className="mx-4 sm:mx-2 md:mx-8 lg:mx-32 xl:mx-64 2xl:mx-96"
        getPrismTheme={(_theme, colorScheme) => palenight}
        language={language}
        scrollAreaComponent="div"
      >
        {code}
      </Prism>
    );
};

export default PrismCode;
