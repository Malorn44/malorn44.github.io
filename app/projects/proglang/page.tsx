// app/projects/proglang/page.tsx
import { ProjectPage } from '@/components/ProjectPage'

export default function ProgLangPage() {
  return (
    <ProjectPage
      title="P2P File Sharing & Directory Service Assignment"
      technologies={[
        { name: 'Erlang', href: 'https://www.erlang.org/' },
        { name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
      ]}
      description={`
This was a programming assignment I created as a Graduate Teaching Assistant for Programming Language in Fall 2021 at Rensselaer Polytechnic Institute. The assignment was inspired by the BitTorrent protocol for peer-to-peer file sharing. It was greatly simplified as many students had limited exposure to distributed computing and because it was in a language that was new to most students (either Erlang or SALSA). I collaborated with another TA who wrote starter code and an auto-grader for SALSA, while I wrote starter code and an auto-grader for Erlang. Students could complete the assignment in either language. This project helped me learn Erlang and the actor model.

The assignment tasked students to create a directory service and file servers. The directory service keeps track of files located in file servers. Clients interact with the directory service to upload files, which are broken into chunks and distributed among connected file servers. Clients can also request files from the directory service. The connected file servers act as peers for the client and send chunks back to reconstruct the full file. Only the starter code and assignment PDF are hosted here; my full implementation is not included.
      `}
      links={[
        { href: '/projects/proglang/files/pa2.pdf', label: 'Project PDF' },
        { href: '/projects/proglang/files/provided_erlang.zip', label: 'Provided Code' },
      ]}
    />
  )
}