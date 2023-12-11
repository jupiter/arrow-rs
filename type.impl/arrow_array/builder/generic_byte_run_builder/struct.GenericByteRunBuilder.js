(function() {var type_impls = {
"arrow_array":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#88-119\">source</a><a href=\"#impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#94-103\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteRunBuilder</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#109-118\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, data_capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>GenericByteRunBuilder</code> with the provided capacity</p>\n<p><code>capacity</code>: the expected number of run-end encoded values.\n<code>data_capacity</code>: the expected number of bytes of run end encoded values</p>\n</div></details></div></details>",0,"arrow_array::builder::generic_byte_run_builder::StringRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeStringRunBuilder","arrow_array::builder::generic_byte_run_builder::BinaryRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#158-287\">source</a><a href=\"#impl-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#164-169\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>(&amp;mut self, input_value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;V::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Appends optional value to the logical array encoded by the RunArray.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#172-184\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>(&amp;mut self, input_value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;V::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Appends value to the logical array encoded by the RunArray.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#187-194\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Appends null to the logical array encoded by the RunArray.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#198-212\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Creates the RunArray and resets the builder.\nPanics if RunArray cannot be built.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#216-230\">source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;R&gt;</h4></section></summary><div class=\"docblock\"><p>Creates the RunArray and without resetting the builder.\nPanics if RunArray cannot be built.</p>\n</div></details><section id=\"method.append_run_end\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#233-253\">source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.append_run_end\" class=\"fn\">append_run_end</a>(&amp;mut self)</h4></section><section id=\"method.append_run_end_with_builders\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#257-276\">source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.append_run_end_with_builders\" class=\"fn\">append_run_end_with_builders</a>(\n    &amp;self,\n    run_ends_builder: &amp;mut <a class=\"struct\" href=\"arrow_array/builder/primitive_builder/struct.PrimitiveBuilder.html\" title=\"struct arrow_array::builder::primitive_builder::PrimitiveBuilder\">PrimitiveBuilder</a>&lt;R&gt;,\n    values_builder: &amp;mut <a class=\"struct\" href=\"arrow_array/builder/generic_bytes_builder/struct.GenericByteBuilder.html\" title=\"struct arrow_array::builder::generic_bytes_builder::GenericByteBuilder\">GenericByteBuilder</a>&lt;V&gt;\n)</h4></section><section id=\"method.run_end_index_as_native\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#278-286\">source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html#tymethod.run_end_index_as_native\" class=\"fn\">run_end_index_as_native</a>(&amp;self) -&gt; R::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html#associatedtype.Native\" title=\"type arrow_array::types::ArrowPrimitiveType::Native\">Native</a></h4></section></div></details>",0,"arrow_array::builder::generic_byte_run_builder::StringRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeStringRunBuilder","arrow_array::builder::generic_byte_run_builder::BinaryRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#64\">source</a><a href=\"#impl-Debug-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#64\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_array::builder::generic_byte_run_builder::StringRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeStringRunBuilder","arrow_array::builder::generic_byte_run_builder::BinaryRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CS%3E%3E-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#289-300\">source</a><a href=\"#impl-Extend%3COption%3CS%3E%3E-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;S&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;V::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#295-299\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;S&gt;&gt;&gt;(&amp;mut self, iter: T)</h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#376\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#384\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<S>>","arrow_array::builder::generic_byte_run_builder::StringRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeStringRunBuilder","arrow_array::builder::generic_byte_run_builder::BinaryRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#78-86\">source</a><a href=\"#impl-Default-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#83-85\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow_array::builder::generic_byte_run_builder::StringRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeStringRunBuilder","arrow_array::builder::generic_byte_run_builder::BinaryRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeBinaryRunBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#121-156\">source</a><a href=\"#impl-ArrayBuilder-for-GenericByteRunBuilder%3CR,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R, V&gt; <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow_array/builder/generic_byte_run_builder/struct.GenericByteRunBuilder.html\" title=\"struct arrow_array::builder::generic_byte_run_builder::GenericByteRunBuilder\">GenericByteRunBuilder</a>&lt;R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#127-129\">source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class=\"docblock\"><p>Returns the builder as a non-mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#132-134\">source</a><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class=\"docblock\"><p>Returns the builder as a mutable <code>Any</code> reference.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#137-139\">source</a><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;Self&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the boxed builder as a box of <code>Any</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#143-145\">source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the length of logical array encoded by\nthe eventual runs array.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#148-150\">source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class=\"docblock\"><p>Builds the array and reset this builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_byte_run_builder.rs.html#153-155\">source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class=\"docblock\"><p>Builds the array without resetting the builder.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/mod.rs.html#240-242\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow_array::builder::generic_byte_run_builder::StringRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeStringRunBuilder","arrow_array::builder::generic_byte_run_builder::BinaryRunBuilder","arrow_array::builder::generic_byte_run_builder::LargeBinaryRunBuilder"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()