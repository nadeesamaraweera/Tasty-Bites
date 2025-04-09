import React from "react";

interface Props {
    name: string  //id of input
    placeholder ?: string //placeholder of input ? -> optional
    label: string //label of input
    optional : boolean //optional or not
    rows : number

}

class TextArea extends React.Component<Props,any> {
    render() {
        return (
            <div>
                <label htmlFor={this.props.name} className={'block mb-1 mt-1 text-[18px]'}>{this.props.label}
                    {!this.props.optional ? <span className={'text-red-600'}>*</span> : null}
                </label>
                <textarea id={this.props.name} placeholder={this.props.placeholder} rows={this.props.rows}
                       className={'text-[18px] block border border-gray-300 outline-none focus:border-gray-400 w-full p-1 rounded-md'}/>
            </div>
        );
    }
}

export default TextArea;