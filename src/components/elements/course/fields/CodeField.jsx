import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";

const CodeField = (props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (str) => {
    navigator.clipboard.writeText(str);
    setCopied(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <SyntaxHighlighter
        language={props.language}
        style={docco}
        customStyle={{
          backgroundColor: "#f1f5f9",
          borderRadius: 10,
          fontSize: 24,
          padding: 20,
        }}
      >
        {props.value}
      </SyntaxHighlighter>
      <div className="flex w-full justify-end">
        <button
          onClick={() => copyToClipboard(props.value)}
          className={`${
            copied ? "bg-green-300" : "bg-slate-100 hover:bg-slate-200"
          } p-2 rounded-lg btn-anim font-bold flex items-center gap-2`}
        >
          <MdContentCopy />
          {copied ? "skopiowano!" : "skopiuj kod"}
        </button>
      </div>
    </div>
  );
};

export default CodeField;
