import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ListForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: new Date(),
      text: input,
    });
    setInput('');
    inputRef.current.focus();
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='list-form'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Add an item'
        value={input}
        name='text'
        className='list-input'
        onChange={handleChange}
        ref={inputRef}
      />
      <button type='submit' className='list-button'>
        Add
      </button>
    </motion.form>
  );
};

export default ListForm;
