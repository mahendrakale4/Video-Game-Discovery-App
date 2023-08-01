import { useState } from "react";
import styles from  './ListGroup.module.css'

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}


function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List </h1>
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
