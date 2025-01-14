import DropDownProtal from "./DropDownProtal"
import NativeForm from "./NativeForm"
import Rerender from "./Rerender"
import Section from "./Section"

function App<T>() {
  const teste: T = '';
  return (
    <>
      <Section title="Dropdown com portal">
        <DropDownProtal />
      </Section>
      <Section title="Form nativo">
        <NativeForm />
      </Section>
      <Section title="Re-renders desnecessários">
        <Rerender />
      </Section>
    </>
  )
}

export default App
