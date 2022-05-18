let smallTimeUnit = ["seconds", "milliseconds"];
let mediumTimeUnit = ["days"];
let largeTimeUnit = [
  "today",
  "week",
  "month",
  "year",
  "last_7_days",
  "last_30_days"
];
const SCHEMA_TYPES = [
  "Select Operation",
  "TIMESTAMP",
  "IS_NOT_NULL",
  "CONVERT",
  "EXTRACT",
  "COMPARE",
  "STRING"
];
const SCHEMA = {
  TIMESTAMP: {
    type: "function",
    params: [{ name: "column_name", type: "dropdown" }]
  },
  STRING: {
    type: "string",
    params: [{ name: "value", type: "string" }]
  },
  IS_NOT_NULL: {
    type: "function",
    params: [
      {
        name: "column_name",
        type: "dropdown",
        table: "columnList",
        options: []
      }
    ]
  },
  CONVERT: {
    type: "function",
    params: [
      { name: "time", type: "dropdown", table: "", options: smallTimeUnit },
      { name: "TIMESTAMP", type: "function" }
    ]
  },
  EXTRACT: {
    type: "function",
    params: [
      { name: "time", type: "dropdown", table: "", options: mediumTimeUnit },
      { name: "TIMESTAMP", type: "function" }
    ]
  },
  COMPARE: {
    type: "function",
    params: [
      {
        name: "column_name_1",
        type: "dropdown",
        table: "columnList",
        options: []
      },
      {
        name: "column_name_2",
        type: "dropdown",
        table: "columnList",
        options: []
      },
      { name: "time", type: "dropdown", table: "", options: largeTimeUnit }
    ]
  }
};

export { SCHEMA, SCHEMA_TYPES };
