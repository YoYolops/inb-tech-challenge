interface Props {
    label: string,
    value: number,
    // maxValue: Valor de referência para cálculo de porcentagem. Se o maxValue
    // é 100 e value é 22, sabemos que essa linha deve ter uma width de 22% do tamanho
    // da linha que representa o maxValue
    maxValue: number, 
}

function calculateWidthBasedOnStatsValue(value: number, maxValue: number): number {
    return (100/maxValue)*value
}

export default function GraphicLine({label, value, maxValue}: Props): JSX.Element {
    return (
        <section className="graph_line_container">
            <div className="label_line_container">
                <p className="graph_line_label">{label}</p>

                <div className="graph_line" style={{
                    width: `calc(${calculateWidthBasedOnStatsValue(value, maxValue)}% - 100px)`
                }}></div>
            </div>

            <p className="graph_line_value">{value}</p>
        </section>
    )
}