/* Shared presentational component – works in both Server & Client contexts */
export default function SectionTitle({ sub, title, light }) {
  return (
    <div className="sectionTitle">
      <p className={`sectionSub ${light ? 'sectionSubLight' : ''}`}>{sub}</p>
      <h2 className={`sectionH2 ${light ? 'sectionH2Light' : ''}`}>{title}</h2>
      <div className="sectionLine" />
    </div>
  );
}
