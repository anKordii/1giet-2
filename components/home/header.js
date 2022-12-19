import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';

const header = function() {
    const router = useRouter();
    
    function runEnd(e){
        e.preventDefault();
        router.push("/TcxFtCBsnRP8uSb6kkHu4ejz4fgWRAbkvuvGyLwaz2BpkXfaQBuMPfx7n2KkDoRyNR7rnodtYKuMSQKsfwNfCwXakhJTTJJmdFrEdz9KVDHdfjK2pRdpyG4CC2BuR5oJ")
    }
  return (
    <>
        <div className="container-fluid position-relative pt-5">
            <div className="row justify-content-center">
                <div className="col-8 text-center">
                    <div>
                        <h1 className="p-0 m-0" style={{fontSize: "3em"}}>Best delivery.</h1>
                        <h1 className="p-0 m-0" style={{fontSize: "3em", color: "red"}}>ベストクオ<span onClick={runEnd}>リ</span>ティ</h1>
                        <h1 className="pt-0 mt-0" style={{fontSize: "3em"}}>Best sequrity.</h1>
                    </div>
                    <div className="mt-3">
                        <Link href={"/premium"}>
                            <a className="giet_button">
                                HAVE SOME FUN
                            </a>
                        </Link>
                        <Link href={"/drugs"}>
                            <a className="giet_button second">
                                CHECK WHAT PPL SAYIN
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

export default header;
