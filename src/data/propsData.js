export const avatarData = [
  {
    id: 1,
    property: "user",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 2,
    property: "imgSrc",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 3,
    property: "alt",
    type: "string",
    default: "avatar",
    required: "no",
  },
  {
    id: 4,
    property: "color",
    type: "string",
    default: "#5d815d",
    required: "no",
  },
];

export const breadcrumbData = [
  {
    id: 1,
    property: "label",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 2,
    property: "path",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 3,
    property: "current",
    type: "boolean",
    default: "-",
    required: "no",
  },
];

export const cardData = [
  {
    id: 1,
    property: "title",
    type: "string",
    default: "-",
    required: "yes",
  },
  {
    id: 2,
    property: "imgsrc",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 3,
    property: "subtitle",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 4,
    property: "price",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 5,
    property: "ratio",
    type: "string",
    default: "100%",
    required: "no",
  },
];

export const inputData = [
  {
    id: 1,
    property: "label",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 2,
    property: "name",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 3,
    property: "value",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 4,
    property: "required",
    type: "boolean",
    default: "optional",
    required: "no",
  },
  {
    id: 5,
    property: "error",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 6,
    property: "type",
    type: "text / password",
    default: "text",
    required: "no",
  },
  {
    id: 7,
    property: "placeholder",
    type: "string",
    default: "-",
    required: "no",
  },
  {
    id: 8,
    property: "shape",
    type: "underline / rounded",
    default: "rounded",
    required: "no",
  },
  {
    id: 9,
    property: "margin",
    type: "xxs / xs/ s / m / l / xl / xxl",
    default: "-",
    required: "no",
  },
  {
    id: 10,
    property: "small",
    type: "boolean",
    default: "-",
    required: "no",
  },
];

export const buttonData = [
  {
    id: 1,
    property: "label",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 2,
    property: "color",
    type: "string",
    default: "neutral[700]",
    required: "no",
  },
  {
    id: 3,
    property: "shape",
    type: "rounded / pill",
    default: "sharp",
    required: "no",
  },
  {
    id: 4,
    property: "icon",
    type: "boolean",
    default: "-",
    required: "no",
  },
  {
    id: 5,
    property: "fullWidth",
    type: "boolean",
    default: "-",
    required: "no",
  },
  {
    id: 6,
    property: "disabled",
    type: "boolean",
    default: "-",
    required: "no",
  },
];

export const linkData = [
  {
    id: 1,
    property: "label",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 2,
    property: "href",
    type: "string",
    default: "-",
    required: "required",
  },
  {
    id: 3,
    property: "variant",
    type: "primary / secondary / tertiary",
    default: "primary",
    required: "no",
  },
  {
    id: 4,
    property: "external",
    type: "boolean",
    default: "-",
    required: "no",
  },
  {
    id: 5,
    property: "disabled",
    type: "boolean",
    default: "-",
    required: "no",
  },
];

export const paginationData = [
  {
    id: 1,
    property: "currentPage",
    type: "number",
    default: "-",
    required: "required",
  },
  {
    id: 2,
    property: "pageSize",
    type: "number",
    default: "-",
    required: "required",
  },
  {
    id: 3,
    property: "dataLength",
    type: "number",
    default: "primary",
    required: "required for numbered pagination",
  },
  {
    id: 4,
    property: "onPageChange",
    type: "function()",
    default: "-",
    required: "required for numbered pagination",
  },
  {
    id: 5,
    property: "handlePrev",
    type: "function()",
    default: "-",
    required: "required",
  },
  {
    id: 6,
    property: "handleNext",
    type: "function()",
    default: "-",
    required: "required",
  },
];
