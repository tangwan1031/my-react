
import { Layout, Menu } from 'antd';
import IndexSider from './components/indexSider';
import IndexHeader from './components/indexHeader';
import IndexContent from './components/indexContent';
import IndexFooter from './components/indexFooter';
const Index: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左侧导航 */}
            <IndexSider />
            <Layout className="site-layout">
                {/* 头部信息 */}
                <IndexHeader />
                {/* 内容信息 */}
                <IndexContent />
                {/* 义部信息 */}
                <IndexFooter/>
            </Layout>
        </Layout>
    );
};

export default Index;