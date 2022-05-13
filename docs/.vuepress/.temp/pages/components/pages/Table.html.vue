<template><h1 id="table-表格" tabindex="-1"><a class="header-anchor" href="#table-表格" aria-hidden="true">#</a> Table 表格</h1>
<TableCommon/>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ez-table</span> 
        <span class="token attr-name">border</span> 
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myTable<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:table-json</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableJson<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span> 
        <span class="token attr-name">@selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelectionChange<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#chineseHeader</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>语文（头部插槽）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#chinese</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ scope.$index }}、{{ scope.row.chinese >= 60 ? '合格' : '不合格' }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ez-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ez-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelect<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选中第一行<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ez-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> myTable <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小红'</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">69</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">91</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小王'</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">92</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小张'</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">93</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小李'</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">87</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">94</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> tableJson <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'selection'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'分数'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'语言类'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'英语'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'english'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">align</span><span class="token operator">:</span><span class="token string">'center'</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'语文'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'chinese'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">slotName</span><span class="token operator">:</span> <span class="token string">'chinese'</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">headerSlot</span><span class="token operator">:</span> <span class="token string">'chineseHeader'</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'数学'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'math'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'地理'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">'geography'</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">handleSelectionChange</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">handleSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myTable<span class="token punctuation">.</span>value<span class="token punctuation">.</span>ezTable<span class="token punctuation">.</span><span class="token function">toggleRowSelection</span><span class="token punctuation">(</span>tableData<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><p>ezTable属性、事件、方法均可参考<a href="https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">ElementPlus<ExternalLinkIcon/></a></p>
<p>ezTable扩展属性</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableJson</td>
<td>table渲染配置</td>
<td>object</td>
<td>-</td>
<td>必填</td>
</tr>
</tbody>
</table>
<p>tableJson.columns配置</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>数据字段</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>字段名称</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>type</td>
<td>对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮</td>
<td>string</td>
<td>selection / index / expand</td>
<td>-</td>
</tr>
<tr>
<td>children</td>
<td>表格嵌套</td>
<td>array</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>slotName</td>
<td>表格内容插槽名</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>headerSlot</td>
<td>表格头部插槽名</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>show</td>
<td>表格列展示</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>其余属性</td>
<td>参考ElementPlus的<a href="https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">Table-column属性<ExternalLinkIcon/></a></td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<p>ezTable扩展插槽</p>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ezEmpty</td>
<td>当数据为空时自定义的内容</td>
</tr>
<tr>
<td>ezAppend</td>
<td>插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。</td>
</tr>
<tr>
<td>pagination</td>
<td>表格底部分页控件存放插槽</td>
</tr>
<tr>
<td>slotName或headerSlot定义的插槽</td>
<td>-</td>
</tr>
</tbody>
</table>
<p>ezTable方法</p>
<p>调用时需要通过 <code v-pre>xxx.ezTable.xx方法()</code> 的形式调用，方法名及参数请参考<a href="https://element-plus.org/zh-CN/component/table.html#table-%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">ElementPlus<ExternalLinkIcon/></a></p>
</template>
