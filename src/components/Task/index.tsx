import { useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { Checkbox } from '../Checkbox';

import { DeleteButton } from '@components/Button/Delete';


interface TaskProps {
  id: string
  name: string
  onRemove: () => void
  onCompleted: (taskId: string) => void
}

export function Task({ id, name, onRemove, onCompleted }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleChangeChecked() {
    onCompleted(id)
    setIsChecked(!isChecked)
  }

  return (
    <View style={styles.container}>
      <Checkbox
        text={name}
        checked={isChecked}
        onChecked={handleChangeChecked}
      />
      <DeleteButton
        onRemove={onRemove}
      />
    </View>
  )
}