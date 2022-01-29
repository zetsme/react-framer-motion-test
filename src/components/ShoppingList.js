import Form from './Form';
import List from './List';
import { useLocalStorage } from '../useLocalStorage';
import { motion } from 'framer-motion';

const ShoppingList = () => {
  const { items, addListItem, removeItem } = useLocalStorage('items');
  return (
    <div className='container'>
      <motion.h1
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
      >
        Shopping List
      </motion.h1>
      <Form onSubmit={addListItem} />
      <List items={items} removeItem={removeItem} />
    </div>
  );
};

export default ShoppingList;
