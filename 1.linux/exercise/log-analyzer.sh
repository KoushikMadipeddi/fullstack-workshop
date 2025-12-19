#!/bin/bash


LOG_FILE=${1:-"C:\Users\koush\training\Sample-log.txt"}


if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi

total_lines=$(wc -l < "$LOG_FILE")
ip_addresses=$(grep -oE '([0-9]{1,3}\.){3}[0-9]{1,3}' "$LOG_FILE" | sort | uniq)

echo "=== Log Analysis Report ==="
echo "File: $LOG_FILE"
echo "TOTAL_LINES: $total_lines"
echo "---------------------------"
# echo "INFO count: $(grep -c 'info' "$LOG_FILE" )"
echo "INFO count: $(grep -oh -i 'info' "$LOG_FILE" | wc -l )"
echo "Error count: $(grep -c -i 'error' "$LOG_FILE")"
echo "Warning count: $(grep -c -i 'warning' "$LOG_FILE")"
echo "---------------------------"

echo "Unique IP Addresses Found:"

if [ -n "$ip_addresses" ]; then
    for ip in $ip_addresses; do
        echo "  - $ip"
    done
else
    echo "  No IP addresses found"
fi

echo "============================"