export type Content = {
  text: string;
  img?: string;
  subContent?: Content[];
};

export const introTitle = "VDOM and Reconciliation";

export const introContent: Content[] = [
  {
    text: "React creates a copy of the Browser DOM tree--the virtual DOM.",
    subContent: [
      {
        text: "Each time data changes within React Elements (props, state), a new VDOM is created",
      },
      {
        text: "The new VDOM is compared to the previous through a reconciliation process",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20210622175445/diagram1-300x153.PNG",
      },
      {
        text: "A 'diffing' algorithm is used to determine which nodes have changed between the new and previous VDOMs",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20210622175455/diagram2-300x167.PNG",
        subContent: [
          {
            text: "Two Assumptions:",
            subContent: [
              {
                text: "Two elements of different types will produce different trees.",
              },
              {
                text: "The developer can hint at which child elements may be stable across different renders with a key prop.",
              },
            ],
          },
          {
            text: "Element changes such as <a> to <div>, <Content/> to <Section/>, etc will cause a full rebuild of all nodes below",
          },
          {
            text: "Attribute changes on two elements of the same type only update the attribute on the element",
          },
        ],
      },
    ],
  },
  {
    text: "Why Use the VDOM?",
    subContent: [
      {
        text: "Speed. Virtualization does not require constant DOM repaints. Everything happens in memory first.",
      },
      {
        text: "Simplicity. All DOM changes are grouped into a single DOM render/repaint.",
      },
    ],
  },
];

export const keyTitle = "Keys and Lists";

export const keyContent: Content[] = [
  {
    text: "React supports a key prop to track changes between the updated and previous VDOM",
    subContent: [
      {
        text: "In the context of diffing, a key update counts as an element change triggering an unmount and fresh mount of the element and all nodes below",
      },
    ],
  },
  {
    text: "Lists are are special case for keys in React",
    subContent: [
      {
        text: "Insertions anywhere in a list but the bottom cause React to mutate each item in the entire list",
      },
      {
        text: "To solve for this, React tracks changes to nodes in a list with a key prop ",
      },
      {
        text: "Keys must be locally unique",
        subContent: [
          {
            text: "Failure to use a non-unique key may result in unpredictable behavior (see bottom example)",
          },
        ],
      },
    ],
  },
];
