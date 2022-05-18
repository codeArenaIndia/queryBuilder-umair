import CustomSelect from "./select";
import { SCHEMA_TYPES } from "../scheme";
function ExpressionBox({
  sequence,
  handleSetChange,
  functionValue,
  data,
  setIndex,
  groupSequence
}) {
  return (
    <div>
      <CustomSelect
        options={SCHEMA_TYPES}
        handleChange={handleSetChange}
        value={functionValue}
        name="select_function"
        title="Select function"
        sequence={sequence}
        setIndex={setIndex}
        groupSequence={groupSequence}
      />
    </div>
  );
}
export default ExpressionBox;
