import { CirclesWithBar } from "react-loader-spinner"

export default function CirclesWithBarSpinner(){
    return(
        <CirclesWithBar
            height="200"
            width="200"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperClass="centered-container"
            visible={true}
            />
    )
}