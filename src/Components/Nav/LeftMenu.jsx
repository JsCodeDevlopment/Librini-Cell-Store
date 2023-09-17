import React from 'react'
import { LeftMenuUl, Links, A } from './LeftMenuStyle'

function LeftMenu() {
  return (
    <>
        <LeftMenuUl>
            <Links><A href="#">Collections</A></Links>
            <Links><A href="#">Men</A></Links>
            <Links><A href="#">Woman</A></Links>
            <Links><A href="#">About</A></Links>
            <Links><A href="#">Contact</A></Links>
        </LeftMenuUl>
    </>
  )
}

export default LeftMenu