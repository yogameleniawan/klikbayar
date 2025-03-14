import React, { useCallback, useEffect } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Pagination,
    Spinner,
} from "@heroui/react";
import { router, useRemember } from '@inertiajs/react';
import { debounce } from 'lodash';

export const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const PlusIcon = ({ size = 24, width, height, ...props }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            >
                <path d="M6 12h12" />
                <path d="M12 18V6" />
            </g>
        </svg>
    );
};

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                fill="currentColor"
            />
        </svg>
    );
};

export const SearchIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};

export const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...otherProps}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

export default function ServerSideTable(
    {
        initialVisibleColumns = [],
        columns = [],
        collections = [],
        columnRender = null,
        routeName = '',
        selectionMode = 'none', // single | multiple | none
        buttonAdd = true
    }
) {
    const { data, last_page: totalPages, per_page: totalRowsPerPage, current_page: currentPage, total } = collections;

    const [filterValue, setFilterValue] = React.useState(route().params.search ?? "");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(initialVisibleColumns));
    const [rowsPerPage, setRowsPerPage] = React.useState(totalRowsPerPage);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: initialVisibleColumns[0],
        direction: "ascending",
    });

    const [page, setPage] = React.useState(currentPage);
    const [isLoading, setIsLoading] = useRemember(false)

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredData = [...data];

        if (hasSearchFilter) {
            filteredData = filteredData.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return filteredData;
    }, [data, filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const renderCell = useCallback(columnRender, []);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));

        router.visit(route(`${routeName}.index`, {
            page: 1,
            length: Number(e.target.value)
        }), {
            onStart: () => setIsLoading(true),
            onFinish: () => setIsLoading(false)
        })
    }, []);

    const performSearch = useCallback((searchValue) => {
        router.visit(route(`${routeName}.index`, {
            ...route().params,
            search: searchValue || "",
            page: 1
        }), {
            preserveState: true,
            onStart: () => setIsLoading(true),
            onFinish: () => setIsLoading(false)
        });
    }, []);

    const debouncedSearch = useCallback(
        debounce((value) => {
            performSearch(value);
        }, 500),
        []
    );

    const onSearchChange = useCallback((value) => {
        setFilterValue(value);
        debouncedSearch(value);
    }, [debouncedSearch]);

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search ..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode={"multiple"}
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        {
                            buttonAdd && (
                                <Button color="primary" endContent={<PlusIcon />} onPress={() => {
                                    router.visit(route(`${routeName}.create`))
                                }}>
                                    Add New
                                </Button>
                            )
                        }
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="10" selected={rowsPerPage == 10}>10</option>
                            <option value="25" selected={rowsPerPage == 25}>25</option>
                            <option value="50" selected={rowsPerPage == 50}>50</option>
                            <option value="100" selected={rowsPerPage == 100}>100</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        visibleColumns,
        onRowsPerPageChange,
        data.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="text-default-400 text-small">Total {data.length} / {total} data</span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={totalPages}
                    onChange={(value) => {
                        router.visit(route(`${routeName}.index`, {
                            ...route().params,
                            page: value
                        }), {
                            onStart: () => setIsLoading(true),
                            onFinish: () => setIsLoading(false)
                        })
                        setPage(value)
                    }}
                />
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (
        <Table
            isHeaderSticky
            aria-label="Example table with custom cells, pagination and sorting"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
                wrapper: "max-h-[482px]",
            }}
            selectedKeys={selectedKeys}
            selectionMode={selectionMode}
            sortDescriptor={{
                column: route().params.sort_by,
                direction: route().params.sort_order
            } ?? sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={(value) => {
                setSortDescriptor(value)

                router.visit(route(`${routeName}.index`, {
                    ...route().params,
                    sort_by: value.column,
                    sort_order: value.direction
                }), {
                    onStart: () => setIsLoading(true),
                    onFinish: () => setIsLoading(false)
                });
            }}
        >
            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No Data found"} items={data} loadingContent={<Spinner />}
                isLoading={isLoading}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

