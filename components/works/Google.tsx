import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Google = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
>
    <h3 className="flex gap-1 font-medium text-xl font-titlefont">
        Engineer <span className="text-textGreen tracking-wide">@Google</span></h3>
    <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Present</p>
    <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex text-textDark gap-2 ">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Write modern, performance, maintainable code for a diverse array of
            client and internal projects
        </li>
        <li className="text-base flex text-textDark gap-2 ">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Work with a variety of different languages, platforms, frameworks, and
            content management systems such as JavaScript, TypeScript, Gatsby,
            React, Craft, Wordpress and Netlify.
        </li>
        <li className="text-base flex text-textDark gap-2 ">
            <span className="text-textGreen mt-1">
                <TiArrowForward />
            </span>
            Communicate with multi-disciplinary terms of engineers, designers,
            producers, and clients on a daily basis
        </li>
    </ul>
</motion.div>
  )
}

export default Google