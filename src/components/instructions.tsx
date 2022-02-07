import React from "react";

export const KeyInstructions = () => {
  return (
    <ol className="instruction">
      <li>
        Observe all initial <strong>render </strong>counts as 1 (initial mount
        of tree)
      </li>
      <li>
        Select an <strong>active</strong> page button
      </li>
      <li>
        Observe colored <strong>Child</strong> container and its children all
        rerender.
        <ul className="instruction">
          <li>
            <strong>Child</strong> receives new prop causing its children to
            rerender
          </li>
        </ul>
      </li>
      <li>
        Select <strong>Update Element Attribute</strong>
      </li>
      <li>
        Observe all components rerendering
        <ul className="instruction">
          <li>
            This button updates a prop in <strong>Root</strong> and passes it to{" "}
            <strong>Child</strong>
          </li>
        </ul>
      </li>
      <li>
        Select <strong>Change Element</strong>
      </li>
      <li>
        Observe <strong>Child</strong> and <strong>Deep Child</strong>{" "}
        remounting (render count back to one)
        <ul className="instruction">
          <li>
            This button updates a counter state in <strong>Root</strong> and
            passes this to the <strong>key</strong> prop on{" "}
            <strong>Child</strong>
          </li>
          <li>
            The key prop update triggers React to rebuild the entire{" "}
            <strong>Child</strong> tree
          </li>
        </ul>
      </li>
    </ol>
  );
};

export const ListInstructions = () => {
  return (
    <ol className="instruction">
      <li>
        Select <strong>a</strong> in both columns
      </li>
      <li>
        Click <strong>Add Items</strong>
      </li>
      <li>Observe keyed element not track original selection</li>
    </ol>
  );
};
