interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return <h2 className=''>{title}</h2>;
};

export default SectionTitle;
