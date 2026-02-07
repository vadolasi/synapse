import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical"
import { Bold, Italic } from "lucide-react"
import { useEffect, useState } from "react"
import { Toggle } from "@/components/ui/toggle"

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext()
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
          setIsBold(selection.hasFormat("bold"))
          setIsItalic(selection.hasFormat("italic"))
        } else {
          setIsBold(false)
          setIsItalic(false)
        }
      })
    })
  }, [editor])

  return (
    <div className="flex items-center gap-1 border-b bg-background px-2 py-1">
      <Toggle
        aria-label="Bold"
        pressed={isBold}
        onPressedChange={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")
        }
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        aria-label="Italic"
        pressed={isItalic}
        onPressedChange={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")
        }
      >
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  )
}

export default ToolbarPlugin
