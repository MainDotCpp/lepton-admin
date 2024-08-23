import { ProConfigProvider } from '@ant-design/pro-components'
import { Outlet } from '@umijs/max'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { valueTypeMap } from '@/constants/valueType'
import { useDictStore } from '@/stores/system/dictStore'

const queryClient = new QueryClient({})
function RootLayout() {
  const fetchDicts = useDictStore(state => state.fetchDicts)
  useEffect(() => {
    fetchDicts().then()
  }, [])
  return (
    <>
      <ProConfigProvider valueTypeMap={valueTypeMap}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ProConfigProvider>
    </>
  )
}

export default RootLayout
