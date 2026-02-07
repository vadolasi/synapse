import { TRANSFORMERS } from "@lexical/markdown"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { editorNodes } from "./nodes"
import ToolbarPlugin from "./plugins/ToolbarPlugin"
import theme from "./theme"

const placeholder = (
  <div className="pointer-events-none absolute left-4 top-3 text-muted-foreground">
    Start writing...
  </div>
)

const DjotEditor = () => {
  return (
    <div className="rounded-md border bg-background">
      <LexicalComposer
        initialConfig={{
          namespace: "DjotEditor",
          theme,
          nodes: editorNodes,
          onError(error) {
            throw error
          }
        }}
      >
        <ToolbarPlugin />
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-full w-full px-4 py-3 outline-none prose prose-stone dark:prose-invert max-w-prose" />
            }
            placeholder={placeholder}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <HistoryPlugin />
        </div>
      </LexicalComposer>
    </div>
  )
}

export default DjotEditor
