(function() {var implementors = {
"arrow":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow/ffi_stream/struct.ArrowArrayStreamReader.html\" title=\"struct arrow::ffi_stream::ArrowArrayStreamReader\">ArrowArrayStreamReader</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow/util/test_util/struct.BadIterator.html\" title=\"struct arrow::util::test_util::BadIterator\">BadIterator</a>&lt;T&gt;"]],
"arrow_array":[["impl&lt;'a, R, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_array/run_iterator/struct.RunArrayIter.html\" title=\"struct arrow_array::run_iterator::RunArrayIter\">RunArrayIter</a>&lt;'a, R, V&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a>: <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>,\n    &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a V</a> as <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>&gt;::<a class=\"associatedtype\" href=\"arrow_array/array/trait.ArrayAccessor.html#associatedtype.Item\" title=\"type arrow_array::array::ArrayAccessor::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_array/array/trait.ArrayAccessor.html\" title=\"trait arrow_array::array::ArrayAccessor\">ArrayAccessor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_array/iterator/struct.ArrayIter.html\" title=\"struct arrow_array::iterator::ArrayIter\">ArrayIter</a>&lt;T&gt;"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_array/record_batch/struct.RecordBatchIterator.html\" title=\"struct arrow_array::record_batch::RecordBatchIterator\">RecordBatchIterator</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"arrow_array/record_batch/struct.RecordBatch.html\" title=\"struct arrow_array::record_batch::RecordBatch\">RecordBatch</a>, ArrowError&gt;&gt;,</div>"]],
"arrow_buffer":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_iterator/struct.BitIndexIterator.html\" title=\"struct arrow_buffer::util::bit_iterator::BitIndexIterator\">BitIndexIterator</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_iterator/struct.BitSliceIterator.html\" title=\"struct arrow_buffer::util::bit_iterator::BitSliceIterator\">BitSliceIterator</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_iterator/struct.BitIterator.html\" title=\"struct arrow_buffer::util::bit_iterator::BitIterator\">BitIterator</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_buffer/util/bit_chunk_iterator/struct.BitChunkIterator.html\" title=\"struct arrow_buffer::util::bit_chunk_iterator::BitChunkIterator\">BitChunkIterator</a>&lt;'_&gt;"]],
"arrow_csv":[["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_csv/reader/struct.BufReader.html\" title=\"struct arrow_csv::reader::BufReader\">BufReader</a>&lt;R&gt;"]],
"arrow_ipc":[["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_ipc/reader/struct.StreamReader.html\" title=\"struct arrow_ipc::reader::StreamReader\">StreamReader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_ipc/reader/struct.FileReader.html\" title=\"struct arrow_ipc::reader::FileReader\">FileReader</a>&lt;R&gt;"]],
"arrow_json":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_json/reader/tape/struct.BufIter.html\" title=\"struct arrow_json::reader::tape::BufIter\">BufIter</a>&lt;'a&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_json/reader/struct.Reader.html\" title=\"struct arrow_json::reader::Reader\">Reader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_json/reader/schema/struct.ValueIter.html\" title=\"struct arrow_json::reader::schema::ValueIter\">ValueIter</a>&lt;R&gt;"]],
"arrow_row":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_row/struct.RowsIter.html\" title=\"struct arrow_row::RowsIter\">RowsIter</a>&lt;'a&gt;"]],
"arrow_select":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_select/filter/struct.IndexIterator.html\" title=\"struct arrow_select::filter::IndexIterator\">IndexIterator</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow_select/filter/struct.SlicesIterator.html\" title=\"struct arrow_select::filter::SlicesIterator\">SlicesIterator</a>&lt;'a&gt;"]],
"parquet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/file/reader/struct.FilePageIterator.html\" title=\"struct parquet::file::reader::FilePageIterator\">FilePageIterator</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/arrow/async_reader/struct.ColumnChunkIterator.html\" title=\"struct parquet::arrow::async_reader::ColumnChunkIterator\">ColumnChunkIterator</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/record/reader/struct.RowIter.html\" title=\"struct parquet::record::reader::RowIter\">RowIter</a>&lt;'a&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/record/reader/struct.ReaderIter.html\" title=\"struct parquet::record::reader::ReaderIter\">ReaderIter</a>"],["impl&lt;R: <a class=\"trait\" href=\"parquet/file/reader/trait.ChunkReader.html\" title=\"trait parquet::file::reader::ChunkReader\">ChunkReader</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/file/serialized_reader/struct.SerializedPageReader.html\" title=\"struct parquet::file::serialized_reader::SerializedPageReader\">SerializedPageReader</a>&lt;R&gt;"],["impl&lt;T: <a class=\"trait\" href=\"parquet/file/reader/trait.ChunkReader.html\" title=\"trait parquet::file::reader::ChunkReader\">ChunkReader</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/arrow/arrow_reader/struct.ReaderPageIterator.html\" title=\"struct parquet::arrow::arrow_reader::ReaderPageIterator\">ReaderPageIterator</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/arrow/arrow_reader/struct.ParquetRecordBatchReader.html\" title=\"struct parquet::arrow::arrow_reader::ParquetRecordBatchReader\">ParquetRecordBatchReader</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/record/api/struct.RowColumnIter.html\" title=\"struct parquet::record::api::RowColumnIter\">RowColumnIter</a>&lt;'a&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet/schema/parser/struct.Tokenizer.html\" title=\"struct parquet::schema::parser::Tokenizer\">Tokenizer</a>&lt;'a&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()