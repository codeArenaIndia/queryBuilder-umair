import "./styles.css";
import { useState } from "react";
import { SCHEMA, SCHEMA_TYPES } from "./scheme";
import CustomSelect from "./components/select";

let setSchema = { type: "set", sequence: 0, relation: "or", functionValue: "" };
let groupSchema = {
  relation: "",
  sequence: 0,
  expressionSet: []
};
let primarySet = [{ name: "set_1", type: "SCHEMA_TYPES" }];
export default function App() {
  const [expression, setExpression] = useState([]);
  function addExpression() {
    let exp = [...expression];
    let sequence = exp.length;
    let obj = {
      sequence,
      group: []
    };
    obj.group[0] = { ...groupSchema };
    obj["group"][0]["expressionSet"] = [];
    obj["group"][0]["expressionSet"][0] = { ...setSchema };
    exp.push(obj);
    console.log(exp);
    setExpression(exp);
  }

  const handleSetChange = (e, sequence, groupSequence, setIndex) => {
    let val = e.target.value;
    let exp = [...expression];
    console.log(exp[sequence]["group"], groupSequence, "setIndexsetIndex");
    exp[sequence]["group"][groupSequence]["expressionSet"][setIndex][
      "functionValue"
    ] = val;
    setExpression(exp);
  };

  function handleAddGroup(seq) {
    let exp = [...expression];
    let len = exp[seq]["group"].length;
    let newScheme = { ...groupSchema };
    newScheme.sequence = len;
    newScheme["expressionSet"] = [];
    newScheme["expressionSet"][0] = { ...setSchema };
    exp[seq]["group"].push(newScheme);
    console.log(exp[0]);
    setExpression(exp);
  }

  function handleAddSet(seq, grpSeq) {
    let exp = [...expression];
    let len = exp[seq]["group"][grpSeq]["expressionSet"].length;
    let newScheme = { ...setSchema };
    newScheme.sequence = len;
    exp[seq]["group"][grpSeq]["expressionSet"].push(newScheme);
    setExpression(exp);
  }
  console.log(expression, "Sfsfsd");
  return (
    <div className="App">
      <button className="addBtn" onClick={addExpression}>
        Add Expression
      </button>
      {expression.length &&
        expression.map((item, index) => {
          return (
            <div className="queryGroup" key={`expression_${index}`}>
              {item &&
                item.group.map((grp) => {
                  return (
                    <div key={`group_${index}`}>
                      {grp.expressionSet.map((elem) => {
                        return (
                          <div key={`set_${elem.sequence}`}>
                            <ExpressionBox
                              sequence={item.sequence}
                              groupSequence={grp.sequence}
                              handleSetChange={handleSetChange}
                              functionValue={elem["functionValue"]}
                              data={elem}
                              setIndex={elem.sequence}
                            />
                          </div>
                        );
                      })}
                      <button onClick={() => handleAddSet(index, grp.sequence)}>
                        Add Set
                      </button>
                    </div>
                  );
                })}
              <button onClick={() => handleAddGroup(index)}>Add Group</button>
            </div>
          );
        })}
    </div>
  );
}

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
