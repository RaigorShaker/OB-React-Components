"use strict";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Input,Modal,BarTab,Picker,Calendar,PopUp} from "qb-ui";


setTimeout(function(){
    PopUp.show((
        <div className="dsfds">这是个pop</div>
    ),{maskClosable:true}).then(function(){

        console.log("dssddssss");
        Modal.confirm("删除","哈哈").then((data)=>{
//         console.log("返回结果wei ;" +data);
            Modal.alert("删除","哈哈").then((data)=>{
                console.log("返回结果wei ;" +data);
            });
        });
    })
},300)



// setTimeout(function(){
//     Modal.confirm("删除","哈哈").then((data)=>{
//         console.log("返回结果wei ;" +data);
//         Modal.alert("删除","哈哈").then((data)=>{
//             console.log("返回结果wei ;" +data);
//         });
//     });
// },300)




ReactDOM.render(
    <div className="main">
        <Picker/>
        <Calendar/>
        <BarTab>
            <BarTab.Item>
               额呵呵哒
            </BarTab.Item>
            <BarTab.Item>
               额呵呵哒
            </BarTab.Item>
            <BarTab.Item>
               额呵呵哒
            </BarTab.Item>
        </BarTab>
    </div>,
    document.getElementById('container-body')
);

