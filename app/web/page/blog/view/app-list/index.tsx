import React from 'react'
import { Layout, Table } from 'antd';
import AdvancedSearchForm from './components/search-form';
const { Content } = Layout;

export default class Home extends React.Component {
  state = {
    collapsed: false,
    columns: [
      {
        title: '应用名称',
        dataIndex: 'appName',
        key: 'appName',
      },
      {
        title: 'PV',
        dataIndex: 'pv',
        key: 'pv',
      },
      {
        title: 'UV',
        dataIndex: 'uv',
        key: 'uv',
      }, {
        title: 'JS错误率',
        dataIndex: 'jsError',
        key: 'jsError',
      }, {
        title: 'API成功率',
        dataIndex: 'apiSuccess',
        key: 'apiSuccess',
      }, {
        title: '首次渲染时间',
        dataIndex: 'fps',
        key: 'fps',
      }, {
        title: '资源错误',
        dataIndex: 'sourceError',
        key: 'sourceError',
      }
    ],
    dataSource: []
  };

  componentDidMount() {

  }

  render() {
    return (
      <div className="app-list-container">
        <Layout>
          <AdvancedSearchForm/>

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </Content>
        </Layout>
      </div>
    );
  }
}