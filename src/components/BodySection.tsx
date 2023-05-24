import React from "react"

import EmailBody from "./bodySection/Emails/EmailBody"
import ProsBody from "./bodySection/Prospects/ProsBody"
import TechBody from "./bodySection/Technologies/TechBody"

export default function BodySection({ selectedKeyword, domain, token }) {
  return (
    <div>
      {selectedKeyword == "technologies" && (
        <TechBody domain={domain} token={token} />
      )}
      {selectedKeyword == "prospects" && (
        <ProsBody domain={domain} token={token} />
      )}
      {selectedKeyword == "emails" && (
        <EmailBody domain={domain} token={token} />
      )}
    </div>
  )
}