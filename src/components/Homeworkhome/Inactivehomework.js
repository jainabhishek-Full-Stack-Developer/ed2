"use client";
import { useMemo } from "react";
import styles from "../../app/page.module.css";
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { getSafeValue } from "@/utils/utils";
import { dataSubmitedHomework } from '@/constant/dataHomework';
import Datanotfoundhome from '../Datanotfoundhome/Datanotfoundhome';

const Inactivehomework = () => {
    // Define table columns with appropriate headers and cells
    const columns = useMemo(
        () => [
            { accessorKey: "assignment_id", header: "#" },
            { accessorKey: "title", header: "Title" },
            { accessorKey: "submission_date", header: "Submit Date" },
            { accessorKey: "status", header: "Status" },
            { accessorKey: "grade_remarks", header: "grade_remarks" },

        ],
        []
    );

    // Initialize React Table with data and columns
    const table = useReactTable({
        data: dataSubmitedHomework,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            {
                // Display data if available, else show a "No Data" message
                dataSubmitedHomework.length > 0 ? (
                    <section>
                        {/* Search Box */}
                        <div className={styles.searchBoxContainer}>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="search here..."
                                onChange={(e) => table.setGlobalFilter(getSafeValue(e.target.value))}
                            />
                        </div>

                        {/* Table with Sorting and Pagination */}
                        <table className={styles.tableContainer}>
                            <thead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <th key={header.id} onClick={header.column.getToggleSortingHandler()} style={{ cursor: "pointer" }}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}

                                                {/* Sorting Arrow Indicators */}
                                                {header.column.getIsSorted() === "desc" ? (
                                                    <TiArrowSortedDown style={{ color: "blue" }} />
                                                ) : header.column.getIsSorted() === "asc" ? (
                                                    <TiArrowSortedUp style={{ color: "blue" }} />
                                                ) : (
                                                    <TiArrowSortedDown style={{ opacity: 0.5 }} />
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

                        {/* Pagination Controls */}
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
                    // Show "No Data" component when no data is found
                    <Datanotfoundhome title="No Active Category Found" desc="No active categories are currently available." />
                )
            }
        </div>
    )
}

export default Inactivehomework;
