/**
 * 新增
 */
const vtxUtil = require('../../util/vtxUtil.js');
const indent = vtxUtil.indent;

class DataGird {

	constructor() { 
		// 类型
		this.type = '';
		// 标题
		this.title = '';
		// Param
		this.param = '';
		// Param1
		this.param1 = '';
		// Param数据源
		this.paramData = '';
	}

	get getType() {
		return this.type;
	}
	set setType(type) {
		this.type = type;
	}
	get getTitle() {
		return this.title;
	}
	set setTitle(title) {
		this.title = title;
	}
	get getParam() {
		return this.param;
	}
	set setParam(param) {
		this.param = param;
	}
	get getParam1() {
		return this.param1;
	}
	set setParam1(required) {
		this.param1 = param1;
	}
	get getParamData() {
		return this.paramData;
	}
	set setParamData(paramData) {
		this.paramData = paramData;
	}

	// 文本
	input(indentNum1, indentNum2) {
		const _t = this;
		let fragment = [], // 文本代码片段
			propsFragment = []; // props

		propsFragment = [
			`${_t.param}Props : {`
			`	value : ${_t.param},`
			`	onChange(e) {`
			`		updateState({`
			`            ${_t.param} : e.target.value`
			`        })`
			`	},`
			`    onPressEnter() {`
			`        getList();`
			`    },`
			`	placeholder : '请输入${_t.title}',`
			`	maxLength : 32`
			`},`
		];

		// 文本代码片段
		fragment = [
			`<Input {...vtxGridParams.${_t.param}Props}/>`
		];

		return {
			props : propsFragment.map(item => `${indent(indentNum1)}${item}`),
			render : fragment.map(item => `${indent(indentNum2)}${item}`)
		}
	}

	// 下拉选
	select(indentNum1, indentNum2) {
		const _t = this;
		let fragment = [], // 文本代码片段
			propsFragment = []; // props

		propsFragment = [
			`${_t.param}Props : {`,
			`	value : ${_t.param},`,
		    `    placeholder : "请选择${_t.title}",`,
		    `    onChange(value) {`,
		    `        updateSearchParams({`,
		    `            ${_t.param} : value`,
		    `        }),`,
		    `        getList();`,
		    `    },`,
		    `    allowClear : true,`,
		    `    style : {`,
		    `        width : '100%'`,
		    `    }`,
			`},`
		];

		// 文本代码片段
		fragment = [
			`<Select {...vtxGridParams.${_t.param}Props}>`,
			`	{${_t.paramData}.map(item => {`,
			`		return <Option key={item.id}>{item.name}</Option>`,
			`	})}`,
			`</Select>`
		];

		return {
			props : propsFragment.map(item => `${indent(indentNum1)}${item}`),
			render : fragment.map(item => `${indent(indentNum2)}${item}`)
		}
	}

	// 日刷选
	date(indentNum1, indentNum2) {
		const _t = this;
		let fragment = [], // 文本代码片段
			propsFragment = []; // props

		propsFragment = [
			`${_t.param}Props : {`,
			`	value : ${_t.param},`,
	        `    onChange(date, dateString) {`,
	        `        updateSearchParams({`,
	        `            ${_t.param} : dateString`,
	        `        })`,
	        `        getList();`,
	        `    },`,
	        `    showTime : true,`,
	        `    style : {`,
	        `        width : '100%'`,
	        `    },`,
	        `    disabledDate(current) {`,
	        `        return VtxTimeUtil.isAfterDate(current);`,
	        `    }`,
			`},`
		];

		// 文本代码片段
		fragment = [
			`<VtxDatePicker {...vtxGridParams.${_t.param}Props}/>`
		];

		return {
			props : propsFragment.map(item => `${indent(indentNum1)}${item}`),
			render : fragment.map(item => `${indent(indentNum2)}${item}`)
		}
	}

	// 月刷选
	month(indentNum1, indentNum2) {
		const _t = this;
		let fragment = [], // 文本代码片段
			propsFragment = []; // props

		propsFragment = [
			`${_t.param}Props : {`,
			`	value : ${_t.param},`,
	        `    onChange(date, dateString) {`,
	        `        updateSearchParams({`,
	        `            ${_t.param} : dateString`,
	        `        })`,
	        `        getList();`,
	        `    },`,
	        `    style : {`,
	        `        width : '100%'`,
	        `    },`,
	        `    disabledDate(current) {`,
	        `        return VtxTimeUtil.isAfterDate(current);`,
	        `    }`,
			`},`
		];

		// 文本代码片段
		fragment = [
			`<VtxMonthPicker {...vtxGridParams.${_t.param}Props}/>`
		];

		return {
			props : propsFragment.map(item => `${indent(indentNum1)}${item}`),
			render : fragment.map(item => `${indent(indentNum2)}${item}`)
		}
	}

	// 年刷选
	year(indentNum1, indentNum2) {
		const _t = this;
		let fragment = [], // 文本代码片段
			propsFragment = []; // props

		propsFragment = [
			`${_t.param}Props : {`,
			`	value : ${_t.param},`,
	        `    onChange(date, dateString) {`,
	        `        updateSearchParams({`,
	        `            ${_t.param} : dateString`,
	        `        })`,
	        `        getList();`,
	        `    },`,
	        `    style : {`,
	        `        width : '100%'`,
	        `    },`,
	        `    disabledDate(current) {`,
	        `        return VtxTimeUtil.isAfterDate(current);`,
	        `    }`,
			`},`
		];

		// 文本代码片段
		fragment = [
			`<VtxYearPicker {...vtxGridParams.${_t.param}Props}/>`
		];

		return {
			props : propsFragment.map(item => `${indent(indentNum1)}${item}`),
			render : fragment.map(item => `${indent(indentNum2)}${item}`)
		}
	}

	// 时间段
	range(indentNum1, indentNum2) {
		const _t = this;
		let fragment = [], // 文本代码片段
			propsFragment = []; // props

		propsFragment = [
			`${_t.param}Props : {`,
			`	value : [${_t.param}, ${_t.param1}],`,
	        `    onChange(date, dateString) {`,
	        `        updateSearchParams({`,
	        `            ${_t.param} : dateString[0],`,
	        `            ${_t.param1} : dateString[1]`,
	        `        })`,
	        `        getList();`,
	        `    },`,
	        `    showTime : true,`,
	        `    style : {`,
	        `        width : '100%'`,
	        `    },`,
	        `    disabledDate(current) {`,
	        `        return current && VtxTimeUtil.isAfterDate(current);`,
	        `    }`,
			`},`
		];

		// 文本代码片段
		fragment = [
			`<VtxRangePicker {...vtxGridParams.${_t.param}Props}/>`
		];

		return {
			props : propsFragment.map(item => `${indent(indentNum1)}${item}`),
			render : fragment.map(item => `${indent(indentNum2)}${item}`)
		}
	}
}

const dg = new DataGird();
module.exports = dg;