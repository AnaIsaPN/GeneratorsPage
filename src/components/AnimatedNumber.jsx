import { useEffect, useState } from "react"

const totalDuration = 350;

export function AnimatedNumber(props) {
    const [state, setState] = useState(0)

    useEffect(() => {

        const desiredStepDuration = Math.floor(totalDuration / props.value)
        console.log(desiredStepDuration)
        const iId = setInterval(() => {
            setState(ps => {
                if (ps + 1 >= props.value) {
                    clearInterval(iId);
                }
                return ps + 1
            })
        }, desiredStepDuration);
    }, [])
    return (
        <div>
            <p>{state}</p>
        </div>
    )
}