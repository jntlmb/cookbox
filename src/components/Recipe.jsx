import ReactMarkdown from 'react-markdown';

export default function Recipe({ recipe }) {
  return (
    <section className="bg-gray-300 text-md p-4 rounded-md mb-4 ease-in transition-all">
      <h2 className="font-bold text-2xl mb-4">CookBox Recommends:</h2>
      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="text-xl font-bold mb-2" {...props} />
          ),
          p: ({ node, ...props }) => <p className="mb-2" {...props} />,
          ul: ({ node, ordered, ...props }) => (
            <ul className="list-disc list-inside mb-4" {...props} />
          ),
          ol: ({ node, ordered, ...props }) => (
            <ol className="list-decimal list-inside mb-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          strong: ({ node, ...props }) => (
            <strong className="font-semibold" {...props} />
          ),
        }}
      >
        {recipe}
      </ReactMarkdown>
    </section>
  );
}
