interface SectionTitleProps {
  heading: string;
  subHeading: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ heading, subHeading }) => {
  return (
    <div className="space-y-2">
      <u className='text-text_light/40 tracking-[0.3rem] underline-offset-4 uppercase font-medium'>
        {heading}
      </u>
      <h2>{subHeading}</h2>
    </div>
  );
};

export default SectionTitle;
