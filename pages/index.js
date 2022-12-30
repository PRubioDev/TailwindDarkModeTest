import styles from './index.module.css';
import ThemeChanger from '../components/UI/ThemeChanger';

import PrismCode from '../components/UI/PrismCode';

const Index = () => {
  const pTagClassName = `
  <p
  className="text-lg sm:text-2xl text-gray-800 dark:text-gray-200 text-center">
    Some text
  </p>`;
  const cssGlobalDarkCode = `
  .p1 {
    @apply text-xl sm:text-2xl text-center;
    @apply text-gray-800;
  }
  
  :global(.dark) .p1 {
    @apply text-gray-200
  }`;

  const cssInlineDarkCode = `
  .p2 {
    @apply text-xl sm:text-2xl text-center;
    @apply text-gray-800 dark:text-gray-200;
  }`;

  return (
    <div className="space-y-12">
      <section className="container mx-auto flex justify-center">
        <ThemeChanger />
      </section>
      <section className="container mx-auto space-y-6 flex flex-col pb-8">
        <p
        className="text-lg sm:text-2xl text-gray-800 dark:text-gray-200 text-center">
          &gt;&gt; Text with styles in p tag with className, this just works.
        </p>
        <PrismCode language="html" code={pTagClassName} />
        <p className={styles.p1}>
          &gt;&gt; Text with styles in index.module.css with global selector,
          this works too.
        </p>
        <PrismCode language="css" code={cssGlobalDarkCode} />
        <p className={styles.p2}>
          &gt;&gt; Text with styles in index.module.css without global selector,
          this does not work.
        </p>
        <PrismCode language="css" code={cssInlineDarkCode} />
      </section>
    </div>
  );
};

export default Index;
