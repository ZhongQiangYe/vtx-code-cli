import React from 'react';
import { connect } from 'dva';
import styles from './Dto.less';

import { Page, Cell} from 'rc-layout';
import { Input, Icon, Select, Button } from 'antd';
const Option = Select.Option;

import SearchParam from '../components/SearchParam';

function Report({dispatch, report}) {

	const {
		namespace, annotation, author, searchParams, typeData, distId
	} = report;

	const updateState = (obj) => {
		dispatch({
			type : 'report/updateState',
			payload : {
				...obj
			}
		})
	}	

	// 改变查询参数
	const handleChangeSearchParam = (value, id, column) => {
		const newData = _.cloneDeep(searchParams);
		const target = newData.filter(item => id === item.id)[0];
		if (target) {
      		target[column] = value;
      		updateState({
      			searchParams : newData
      		})
    	}
	}

	// 删除查询参数
	const deleteSearchParam = (id) => {
		const newData = _.cloneDeep(searchParams);
		const target = newData.filter(item => id != item.id);
		updateState({
  			searchParams : target
  		})
	}

	let searchParamRender = searchParams.map((item, index) => {
		return (
            <SearchParam 
                key={item.id} 
                {...item} 
                typeData={typeData} 
                handleChangeSearchParam={handleChangeSearchParam} 
                deleteSearchParam={deleteSearchParam}
            />
        )
	})

    return (
        <Page title="报表" space={10}>
        	<h5>namespace</h5>
    		<Cell>
    			<Cell.Item>
    				<Cell.Item.Title>
    					namespace：
    				</Cell.Item.Title>
    				<Cell.Item.Body>
    					<Input value={namespace} onChange={(e) => updateState({namespace : e.target.value})}/>
    				</Cell.Item.Body>
    			</Cell.Item>
                <Cell.Item>
                    <Cell.Item.Title>
                        注释：
                    </Cell.Item.Title>
                    <Cell.Item.Body>
                        <Input value={annotation} onChange={(e) => updateState({annotation : e.target.value})}/>
                    </Cell.Item.Body>
                </Cell.Item>
                <Cell.Item>
                    <Cell.Item.Title>
                        作者：
                    </Cell.Item.Title>
                    <Cell.Item.Body>
                        <Input value={author} onChange={(e) => updateState({author : e.target.value})}/>
                    </Cell.Item.Body>
                </Cell.Item>
			</Cell>
        	<h5>查询条件</h5>
    		<Button type="primary" icon="plus" onClick={() => dispatch({type : 'report/newSearchParam'})}>新增查询条件</Button>
    		{searchParamRender}
        	<div className={styles.space}></div>
        	<div className={styles.footer}>
        		<Button type="primary" ghost onClick={() => dispatch({type : 'report/cli'})}>生成模板</Button>
                <Button 
                    disabled={!distId}
                    onClick={() => window.open(`/code/generator/file/downLoadZip?id=${distId}`)}
                >导出模板</Button>
                <Button 
                    disabled={!distId}
                    onClick={() => window.open(`/code/generator/view?id=${distId}`)}
                >预览</Button>
        	</div>
        </Page>
    );
}

export default connect(
	({report}) => ({report})
)(Report);
