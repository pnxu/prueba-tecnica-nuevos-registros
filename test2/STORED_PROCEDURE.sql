CREATE PROCEDURE SP_test2
AS
BEGIN
    SELECT TOP 3
        ma.Nombre AS Marca,
        COUNT(s.Id) AS CantidadSolicitudes
    FROM
        dbo.Solicitudes s
        INNER JOIN
        dbo.ModeloAuto mo ON s.IdModelo = mo.Id
        INNER JOIN
        dbo.MarcaAuto ma ON mo.IdMarca = ma.Id
    GROUP BY
        ma.Nombre
    ORDER BY
        CantidadSolicitudes DESC;



    SELECT
        COUNT(s.Id) AS CantidadSolicitudes
    FROM
        dbo.Solicitudes s
    WHERE
            MONTH(s.Fecha) = MONTH(GETDATE())
    GROUP BY
            MONTH(s.Fecha)
    ORDER BY
            CantidadSolicitudes DESC;



    SELECT TOP 1
        v.Nombre AS Vendedor,
        COUNT(s.Id) AS CantidadSolicitudes
    FROM
        dbo.Solicitudes s
        INNER JOIN
        dbo.Vendedor v ON s.IdVendedor = v.Id
    WHERE
            MONTH(s.Fecha) = MONTH(GETDATE())
    GROUP BY
        v.Nombre
    ORDER BY
        CantidadSolicitudes ASC;



    SELECT
        mo.Nombre AS Modelo
    FROM
        dbo.ModeloAuto mo
    WHERE
        mo.Id NOT IN (SELECT IdModelo
    FROM dbo.Solicitudes)
    GROUP BY
        mo.Nombre;



    SELECT TOP 3
        MONTH(s.Fecha) AS Mes,
        SUM(s.Precio) AS Dinero
    FROM
        dbo.Solicitudes s
    GROUP BY
        MONTH(s.Fecha)
    ORDER BY
        Dinero DESC;



END;

EXECUTE SP_test2
