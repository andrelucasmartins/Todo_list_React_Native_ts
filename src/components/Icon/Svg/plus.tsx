import * as React from "react"
import { SvgXml, SvgProps } from "react-native-svg"

export const PlusIcon = (props: SvgProps) => {
  return (
    <SvgXml
      width={16}
      height={16}
      xml={require('@assets/plus.svg')}
      {...props}
    />
  )

}

