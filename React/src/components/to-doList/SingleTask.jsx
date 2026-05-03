export function SingleTask({texto, colorFondo, estaCompleta, onCompletar}){
    return (
        <div
        style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#f2f2f2",
            width: "350px"
        }}
        >
            <input 
                type="checkbox"
                checked = {estaCompleta}
                onChange={onCompletar}
            />

            <span
            style={{
                backgroundColor: colorFondo,
                padding: "8px 12px",
                borderRadius: "6px",
                textDecoration: estaCompleta ? "line-throught" : "none",
                opacity: estaCompleta ? 0.6 : 1
            }}
            >
                {texto}
            </span>
        </div>
    );
}