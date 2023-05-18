import { useEffect } from "react"


const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - PixiePlay`;
    }, [title])
}

export default useSetTitle;