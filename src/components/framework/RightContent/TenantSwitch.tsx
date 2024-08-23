import { CheckOutlined, SendOutlined, SwapOutlined } from '@ant-design/icons'
import { Button, Divider, Empty, Form, Input } from 'antd'

import styled from 'styled-components'
import { useSetTenantId, useTenantId } from '@/stores/localstore'
import { useUserInfo } from '@/stores/global'

const InlineForm = styled(Form)`
  .ant-form-item {
    flex: 1;
  }
`
const Tenant = styled.div`
  height: 80px;
  border: 1px solid #00000010;
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  gap: 8px;

  &:hover {
    background-color: #00000005;
  }

  .content {
    flex: 1;
  }
  .name {
    font-weight: 500;
    font-size: 16px;
  }

  .avatar {
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`
function TenantSwitch() {
  const tenantId = useTenantId()
  const setTenantId = useSetTenantId()
  const userInfo = useUserInfo()
  return (
    <div>
      {userInfo?.tenants?.length === 0 && <Empty description="暂未加入任何企业" />}
      {userInfo?.tenants?.map(tenant => (
        <Tenant key={tenant.id}>
          <div className="avatar">
            <img src={tenant.logo} alt="" />
          </div>
          <div className="content">
            <div className="name">{tenant.name}</div>
          </div>
          <div className="action">
            <Button
              type="primary"
              icon={tenantId === tenant.id ? <CheckOutlined /> : <SwapOutlined />}
              disabled={tenantId === tenant.id}
              onClick={() => {
                window.location.reload()
                setTenantId(tenant.id)
              }}
            >
              {tenantId === tenant.id ? '当前企业' : '切换企业'}
            </Button>
          </div>
        </Tenant>
      ))}
      <Divider />
      <InlineForm layout="inline">
        <Form.Item>
          <Input placeholder="请输入企业识别代码" />
        </Form.Item>
        <Button type="primary" icon={<SendOutlined />}>
          加入企业
        </Button>
      </InlineForm>
    </div>
  )
}

export default TenantSwitch
