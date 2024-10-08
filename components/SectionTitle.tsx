interface Props {
  title: string;
  subTitle: string;
  align?: 'center' | 'left' | 'right';
}

const SectionTitle = ({ title, subTitle, align = 'center' }: Props) => {
  return (
    <>
      <h2
        className={`mb-[10px] text-${align} text-sm md:text-lg font-semibold
          text-custom-text-color-400 uppercase`}
      >
        {title}
      </h2>
      <h3
        className={`mb-[20px] md:mb-[50px] text-${align} text-xl md:text-5xl font-bold
          text-custom-text-color-800`}
      >
        {subTitle}
      </h3>
    </>
  );
};

export default SectionTitle;
