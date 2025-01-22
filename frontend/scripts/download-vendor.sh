#!/usr/bin/env bash
##
## Usage:
## bash scripts/download-vendor.sh

set -euxo pipefail

tempdir=temp
mkdir -p $tempdir

curl_unzip() {
  local url="$1"
  local zipfile="$2"
  local dir="$3"  ## Extract to directory

  if [[ ! -a "$tempdir/$zipfile" ]]; then
    echo "Download NOW"

    curl -L "$url" > "$tempdir/$zipfile"
  fi

  mkdir -p "$dir"

  ## Unzip
  ## -o for overwtire, -q for quiet
  unzip -oq "$tempdir/$zipfile" -d "$dir"
}


main() {
  local vendor_dir='assets/vendor'

  local url dir


  ########################################
  ## Bootstrap CSS
  ########################################
  url='https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip'

  dir="${vendor_dir}/bootstrap"

  curl_unzip "$url" "${url##*/}" "$dir"


  ########################################
  ## Bootstrap Icon
  ########################################
  url='https://github.com/twbs/icons/releases/download/v1.11.3/bootstrap-icons-1.11.3.zip'

  dir="$vendor_dir/bootstrap"

  curl_unzip "$url" "${url##*/}" "$dir"


  echo 'DONE'
}

main "$@"
