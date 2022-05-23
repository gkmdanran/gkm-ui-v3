import{_ as o,r as e,o as c,a as r,b as a,d as n,F as u,e as s,c as p}from"./app.89067f19.js";const i={},k=n("h1",{id:"table-\u8868\u683C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#table-\u8868\u683C","aria-hidden":"true"},"#"),s(" Table \u8868\u683C")],-1),b=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ez-table</span> 
        <span class="token attr-name">border</span> 
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myTable<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:table-json</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableJson<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> 
        <span class="token attr-name">@selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelectionChange<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#chineseHeader</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>\u8BED\u6587\uFF08\u5934\u90E8\u63D2\u69FD\uFF09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#chinese</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ scope.$index }}\u3001{{ scope.row.chinese &gt;= 60 ? &#39;\u5408\u683C&#39; : &#39;\u4E0D\u5408\u683C&#39; }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ez-table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ez-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9009\u4E2D\u7B2C\u4E00\u884C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ez-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> myTable <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> tableData <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">69</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">91</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u738B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">92</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u5F20&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">58</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">93</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u674E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">english</span><span class="token operator">:</span> <span class="token number">87</span><span class="token punctuation">,</span> <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token literal-property property">chinese</span><span class="token operator">:</span> <span class="token number">89</span><span class="token punctuation">,</span> <span class="token literal-property property">geography</span><span class="token operator">:</span> <span class="token number">94</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> tableJson <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;selection&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5206\u6570&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8BED\u8A00\u7C7B&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u82F1\u8BED&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;english&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">align</span><span class="token operator">:</span><span class="token string">&#39;center&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span>
                            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u8BED\u6587&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;chinese&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">slotName</span><span class="token operator">:</span> <span class="token string">&#39;chinese&#39;</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">headerSlot</span><span class="token operator">:</span> <span class="token string">&#39;chineseHeader&#39;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u6570\u5B66&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;math&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\u5730\u7406&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;geography&#39;</span><span class="token punctuation">,</span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div>`,1),m=s("ezTable\u5C5E\u6027\u3001\u4E8B\u4EF6\u3001\u65B9\u6CD5\u5747\u53EF\u53C2\u8003"),d={href:"https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},h=s("ElementPlus"),g=p("<p>ezTable\u6269\u5C55\u5C5E\u6027</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>tableJson</td><td>table\u6E32\u67D3\u914D\u7F6E</td><td>object</td><td>-</td><td>\u5FC5\u586B</td></tr></tbody></table><p>tableJson.columns\u914D\u7F6E</p>",3),y=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u53EF\u9009\u503C"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),_=n("tr",null,[n("td",null,"prop"),n("td",null,"\u6570\u636E\u5B57\u6BB5"),n("td",null,"string"),n("td",null,"-"),n("td",null,"-")],-1),q=n("tr",null,[n("td",null,"label"),n("td",null,"\u5B57\u6BB5\u540D\u79F0"),n("td",null,"string"),n("td",null,"-"),n("td",null,"-")],-1),f=n("tr",null,[n("td",null,"type"),n("td",null,"\u5BF9\u5E94\u5217\u7684\u7C7B\u578B\u3002 \u5982\u679C\u8BBE\u7F6E\u4E86selection\u5219\u663E\u793A\u591A\u9009\u6846\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E86 index \u5219\u663E\u793A\u8BE5\u884C\u7684\u7D22\u5F15\uFF08\u4ECE 1 \u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E86 expand \u5219\u663E\u793A\u4E3A\u4E00\u4E2A\u53EF\u5C55\u5F00\u7684\u6309\u94AE"),n("td",null,"string"),n("td",null,"selection / index / expand"),n("td",null,"-")],-1),v=n("tr",null,[n("td",null,"children"),n("td",null,"\u8868\u683C\u5D4C\u5957"),n("td",null,"array"),n("td",null,"-"),n("td",null,"-")],-1),x=n("tr",null,[n("td",null,"slotName"),n("td",null,"\u8868\u683C\u5185\u5BB9\u63D2\u69FD\u540D"),n("td",null,"string"),n("td",null,"-"),n("td",null,"-")],-1),T=n("tr",null,[n("td",null,"headerSlot"),n("td",null,"\u8868\u683C\u5934\u90E8\u63D2\u69FD\u540D"),n("td",null,"string"),n("td",null,"-"),n("td",null,"-")],-1),z=n("tr",null,[n("td",null,"show"),n("td",null,"\u8868\u683C\u5217\u662F\u5426\u5C55\u793A"),n("td",null,"boolean"),n("td",null,"-"),n("td",null,"true")],-1),E=n("td",null,"\u5176\u4F59\u5C5E\u6027",-1),w=s("\u53C2\u8003ElementPlus\u7684"),N={href:"https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},S=s("Table-column\u5C5E\u6027"),C=n("td",null,"-",-1),B=n("td",null,"-",-1),J=n("td",null,"-",-1),V=p("<p>ezTable\u6269\u5C55\u63D2\u69FD</p><table><thead><tr><th>name</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ezEmpty</td><td>\u5F53\u6570\u636E\u4E3A\u7A7A\u65F6\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</td></tr><tr><td>ezAppend</td><td>\u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C \u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002 \u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002</td></tr><tr><td>pagination</td><td>\u8868\u683C\u5E95\u90E8\u5206\u9875\u63A7\u4EF6\u5B58\u653E\u63D2\u69FD</td></tr><tr><td>slotName\u6216headerSlot\u5B9A\u4E49\u7684\u63D2\u69FD</td><td>-</td></tr></tbody></table><p>ezTable\u65B9\u6CD5</p>",3),j=s("\u8C03\u7528\u65F6\u9700\u8981\u901A\u8FC7 "),A=n("code",null,"xxx.ezTable.xx\u65B9\u6CD5()",-1),D=s(" \u7684\u5F62\u5F0F\u8C03\u7528\uFF0C\u65B9\u6CD5\u540D\u53CA\u53C2\u6570\u8BF7\u53C2\u8003"),P={href:"https://element-plus.org/zh-CN/component/table.html#table-%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},F=s("ElementPlus");function H(I,L){const l=e("TableCommon"),t=e("ExternalLinkIcon");return c(),r(u,null,[k,a(l),b,n("p",null,[m,n("a",d,[h,a(t)])]),g,n("table",null,[y,n("tbody",null,[_,q,f,v,x,T,z,n("tr",null,[E,n("td",null,[w,n("a",N,[S,a(t)])]),C,B,J])])]),V,n("p",null,[j,A,D,n("a",P,[F,a(t)])])],64)}var $=o(i,[["render",H],["__file","Table.html.vue"]]);export{$ as default};