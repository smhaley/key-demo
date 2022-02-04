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
            text: "Element changes cause React to tear down that node and all nodes below",
            subContent: [
              {
                text: "All child elements are unmounted and remounted on the next render (internal state refresh)",
              },
            ],
          },
          {
            text: "Attribute changes on two elements of the same type only update the attribute on the element (props, styles, etc)",
          },
        ],
      },
    ],
  },
  {
    text: "Why Use the VDOM?",
    subContent: [
      {
        text: "Speed. Virtualization does not require constant DOM repaints",
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
        text: "In the context of 'diffing,' a key update counts as an element change triggering an unmount and fresh mount of the element and all nodes below",
      },
    ],
  },
  {
    text: "Lists are are special case for keys in React",
    subContent: [
      {
        text: "Insertions anywhere in a list but the bottom cause React mutate each item in the entire list",
      },
      {
        text: "To solve for this, React tracks changes to nodes in a list with a key prop ",
      },
      {
        text: "Key must be locally unique",
        subContent: [
          {
            text: "Failure to use a non-unique key may result in unpredictable behavior",
          },
        ],
      },
    ],
  },
];
