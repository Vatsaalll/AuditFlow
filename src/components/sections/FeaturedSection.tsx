
export default function FeaturedSection() {
  const logos = [
    { 
      name: "TechCrunch", 
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgNjAiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMiAyMy4zaDIzLjN2MjMuM0gxMlYyMy4zek00MS4zIDEyaDIzLjN2MzQuOUg0MS4zVjEyem0yOS4zIDExLjNoMjMuM3YyMy4zSDcwLjZWMjMuM3ptMjkuNCAwaDIzLjN2MjMuM0gxMDBWMjMuM3ptMjkuMyAwaDIzLjN2MjMuM2gtMjMuM1YyMy4zeiIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNzAgMjMuM2gyMy4zdjIzLjNIMTcwVjIzLjN6bTI5LjMgMGgyMy4zdjIzLjNoLTIzLjNWMjMuM3pNMTcwIDEyaDE3LjV2Ny40SDE3MFYxMnoiLz48L3N2Zz4=" 
    },
    { 
      name: "Wired", 
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMzUiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0wIDBIMjUuNlY2LjRIMFpNMzAuNyAwSDU2LjlWNi40SDMwLjdaTTg4LjUgMEgxMTQuN1Y2LjRIODguNVpNMTE5LjUgMEgxNDUuM1Y2LjRIMTE5LjVaTTYxLjggMEg4My42VjYuNEg2MS44Wk0wIDEwLjVIMjUuNlYxNi44SDBaTTMwLjcgMTAuNUg1Ni45VjE2LjhIMzAuN1pNODguNSAxMC41SDExNC43VjE2Ljh6TTExOS41IDEwLjVIMTQ1LjNWMTYuOEgxMTkuNVpNNjEuOCAxMC41SDgzLjZWMTYuOEg2MS44Wk0wIDIxLjFIMjUuNlYyNy40SDBaTTMwLjcgMjEuMUg1Ni45VjI3LjRIMzAuN1pNODguNSAyMS4xSDExNC43VjI3LjR6TTExOS41IDIxLjFIMTQ1LjNWMjcuNEgxMTkuNVpNNjEuOCAyMS4xSDgzLjZWMjcuNEg2MS44WiIvPjwvc3ZnPg==" 
    },
    { 
      name: "Forbes", 
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgNDAiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0wLDhoMTUwdjI0SDBWOHogTTEwLDE0aDEwdjEySDEwVjE0eiBNMjUsMTRoOHY0aC00djRoNHY0aC04VjE0eiBNMzgsMTRoMTB2MmgtNnY2aDZ2MkgzOFYxNHogTTUzLDE0aDh2MTJoLThWMTR6IE02NywxNGg4djJoLTR2MmgzdjJoLTN2MmgzdjJoLThWMTR6IE04MCwxNGgxMHYyaC02djZoNnYySDgwVjE0eiBNOTUsMTRoOHYyaC00djJoM3YyaC0zdjJoNHYyaC04VjE0eiBNMTA4LDE0aDEwdjEyaC04di0yaC0yVjE0eiBNMTMwLDE0aDEwdjEyaC0xMFYxNHoiLz48L3N2Zz4=" 
    },
    { 
      name: "Venture Beat", 
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgNDAiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0wLDhIMTV2MjRIMFY4eiBNMTgsMTJoMTJ2NGgtNHYxMkgxOFYxMnogTTMzLDE2aDEwdjRoLTZ2NEgzM1YxNnogTTQ4LDEyaDh2MTZoLTR2LTRoLTRWMTJ6IE02MCwxMmg4djE2aC04VjEyeiBNNzIsMTJoOHY0aC00djhoNHY0aC04VjEyeiBNODQsMTJoOHYxNmgtOFYxMnogTTk2LDEyaDI0djE2aC04di00aC00djRoLTR2LTRoLTR2NEg5NlYxMnogTTEyNCwxMmg0djRoNHY0aC00djRoNHY0aC04VjEyeiBNMTM2LDEyaDEydjRoLTR2MTJoLThWMTJ6Ii8+PC9zdmc+" 
    },
    { 
      name: "The Next Web", 
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgNDAiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0wLDhIMzB2MTBIMTVWMzJIMFY4eiBNMzUsOGgzMHYxMEg1MHYxNEgzNVY4eiBNNzAsOGgzMHYyNEg4NVYyM0g3MFY4eiBNMTA1LDhoMzB2MTVoLTE1djloLTE1Vjh6Ii8+PC9zdmc+" 
    },
  ];

  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4 reveal-on-scroll">
        <p className="text-center text-sm uppercase tracking-wider text-foreground/60 mb-8">
          Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="h-8 md:h-10">
              <img 
                src={logo.logo} 
                alt={`${logo.name} Logo`} 
                className="h-full opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
