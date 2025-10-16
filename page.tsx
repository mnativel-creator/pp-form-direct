const FORM_URL = "https://docs.google.com/forms/d/1GUMDi_ma89eT8EP6a9Rg-ARihHBdfK230ATGJqPu9xk/viewform";
export default function Embed() {
  return (
    <div style={{
      position:"fixed", inset:0, margin:0, padding:0, background:"#fff"
    }}>
      <iframe
        src={FORM_URL}
        title="Formulaire — Provence Promotion"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"0" }}
        allow="fullscreen"
        loading="eager"
      />
    </div>
  );
}


