"use client";
import { useMemo } from "react";
import styles from "../../app/page.module.css";
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { getSafeValue } from "@/utils/utils";
import Datanotfoundhome from '../Datanotfoundhome/Datanotfoundhome';
import { dataRecording } from "@/constant/dataRecording";




const Allrecordings = () => {
    
    const handleViewHomeWork = (e) => {
        

    }

    

    const columns = useMemo(
        () => [
            { accessorKey: "class_id", header: "class_id" },
            { accessorKey: "class_name", header: "class_name" },
            { accessorKey: "student_name", header: "student_name" },
            { accessorKey: "date_time", header: "date_time" },
            {
                accessorKey: "status",
                header: "Status",
                cell: ({ row }) => (
                    <div className={styles.actionButtons}>
                        <button type="button" className={styles.activateButton} style={{ color: "var(--main-color)" }} onClick={() => handleViewHomeWork(row.original.assignment_id)}>View</button>                       
                    </div>
                ),
            },
        ],
        [handleViewHomeWork]
    );

    
    const table = useReactTable({
        data: dataRecording,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });


    return (
        <div>
             {
                dataRecording.length > 0 ? (
                    <section>
                        <div className={styles.searchBoxContainer}>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="search here..."
                                onChange={(e) => table.setGlobalFilter(getSafeValue(e.target.value))}
                            />
                        </div>
                        <table className={styles.tableContainer}>
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th key={header.id} onClick={header.column.getToggleSortingHandler()} style={{ cursor: "pointer" }}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}

                                                {/* Always show icons but highlight when sorted */}
                                                {header.column.getIsSorted() === "desc" ? (
                                                    <TiArrowSortedDown style={{ color: "blue" }} />
                                                ) : header.column.getIsSorted() === "asc" ? (
                                                    <TiArrowSortedUp style={{ color: "blue" }} />
                                                ) : (
                                                    <TiArrowSortedDown style={{ opacity: 0.5 }} /> // Default icon with lower opacity
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={styles.paginationContainer}>
                            <div>
                                <span className={styles.pageIndicator}>
                                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                                </span>
                            </div>
                            <div>
                                <button
                                    className={styles.paginationButton}
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    Previous
                                </button>

                                <button
                                    className={styles.paginationButton}
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </section>
                ) : (
                    <Datanotfoundhome title="No Active Category Found" desc="No active categories are currently available." />
                )
            }
        </div>
    )
}

export default Allrecordings;
