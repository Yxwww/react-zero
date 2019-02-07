import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const HookSimpleExample = dynamic(() => import('../components/HookSimpleExamples'), {
  loading: () => <p>loading hookdoc</p>
})

export default () => {
    return (<HookSimpleExample />)
};
