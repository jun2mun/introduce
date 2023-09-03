'use client'
import styles from './page.module.css'
import { ConditionalRenderingWhenKeyevent } from './components/ConditionalRenderingWhenKeyevent'
import { IconButton } from './components/IconButton'
import { useEffect, useState } from 'react'

export default function Home() {         
  
  return (
    <main className={styles.main}>
      <ConditionalRenderingWhenKeyevent props = {false}/>
    </main>
  )
}
