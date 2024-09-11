import { PageContainer } from '@ant-design/pro-components'
import Tree from 'antd/es/tree/Tree'
import { Card, Col, Grid, Popconfirm, Row } from 'antd'
import { DeleteOutlined, DownOutlined, FormOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import DeptTable from './DeptTable'
import DeptSaveForm from './DeptSaveForm'
import api from '@/api'

function Dept() {
  const { data, refresh } = useRequest(() => api.dept.tree({}) as Promise<any>)

  return (
    <PageContainer>
      <Row gutter={{ md: 16 }}>
        <Col span={6}>
          <Tree
            className="p-4"
            autoExpandParent
            showLine
            switcherIcon={<DownOutlined />}
            treeData={
              [
                {
                  name: '总公司',

                  id: 0,
                  children: data || [],
                },
              ]
            }
            fieldNames={{ title: 'name', key: 'id', children: 'children' }}
            titleRender={(nodeData: any) => {
              return (
                <div className="group flex items-center">
                  {nodeData.name}
                  <DeptSaveForm onFinish={refresh} parentId={nodeData.id} trigger={<PlusCircleOutlined className="ml-2 hidden transition-all group-hover:block" />}></DeptSaveForm>
                  {nodeData.id !== 0 && (
                    <>
                      <DeptSaveForm onFinish={refresh} id={nodeData.id} trigger={<FormOutlined className="ml-2 hidden transition-all group-hover:block" />}></DeptSaveForm>
                      <Popconfirm title="确认删除部门及子部门？" onConfirm={() => api.dept.deleteById({ id: nodeData.id }).then(refresh)}>
                        <DeleteOutlined className="ml-2 hidden text-red transition-all group-hover:block" />
                      </Popconfirm>
                    </>
                  )}
                </div>
              )
            }}
          />
        </Col>
        <Col span={18}>
          <div>123</div>
        </Col>
      </Row>
    </PageContainer>
  )
}

export default Dept
