window.BENCHMARK_DATA = {
  "lastUpdate": 1717616097879,
  "repoUrl": "https://github.com/PsychoPunkSage/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "fazzatti@gmail.com",
            "name": "Fabricius Zatti",
            "username": "fazzatti"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e1d86c3e3f07dcf7f09d0957a75678c6cccc2819",
          "message": "build(connector-stellar): add a deploy contract endpoint\n\n- Add a Stellar Connector plugin following the same pattern as the **Besu Connector plugin**.\n- Add a deploy contract endpoint to the Stellar Connector plugin.\n\n**Initialization remarks:**\nSupports a network configuration object to define all integration services that seamlessly\nintegrate with the Stellar test ledger within the Cacti test tooling.\n\n**Deploy remarks:**\nThe deploy process supports both the compiled smart contract WASM as well as the on-chain WASM\nhash as inputs. This follows the smart contract deployment design on Soroban\n(Stellar's smart contract platform). Refer to the Stellar documentation at:\nhttps://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/contracts\nfor further detail on this process.\n\nMore details can be found in the `README.md` file under the connector root directory.\n\nSigned-off-by: Fabricius Zatti <fazzatti@gmail.com>",
          "timestamp": "2024-06-03T09:24:08-07:00",
          "tree_id": "69b33b9ddae240a8170b8d277f42ff0b643206eb",
          "url": "https://github.com/PsychoPunkSage/cacti/commit/e1d86c3e3f07dcf7f09d0957a75678c6cccc2819"
        },
        "date": 1717615577017,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 577,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 357,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "fazzatti@gmail.com",
            "name": "Fabricius Zatti",
            "username": "fazzatti"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e1d86c3e3f07dcf7f09d0957a75678c6cccc2819",
          "message": "build(connector-stellar): add a deploy contract endpoint\n\n- Add a Stellar Connector plugin following the same pattern as the **Besu Connector plugin**.\n- Add a deploy contract endpoint to the Stellar Connector plugin.\n\n**Initialization remarks:**\nSupports a network configuration object to define all integration services that seamlessly\nintegrate with the Stellar test ledger within the Cacti test tooling.\n\n**Deploy remarks:**\nThe deploy process supports both the compiled smart contract WASM as well as the on-chain WASM\nhash as inputs. This follows the smart contract deployment design on Soroban\n(Stellar's smart contract platform). Refer to the Stellar documentation at:\nhttps://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/contracts\nfor further detail on this process.\n\nMore details can be found in the `README.md` file under the connector root directory.\n\nSigned-off-by: Fabricius Zatti <fazzatti@gmail.com>",
          "timestamp": "2024-06-03T09:24:08-07:00",
          "tree_id": "69b33b9ddae240a8170b8d277f42ff0b643206eb",
          "url": "https://github.com/PsychoPunkSage/cacti/commit/e1d86c3e3f07dcf7f09d0957a75678c6cccc2819"
        },
        "date": 1717616095576,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 664,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "176 samples"
          }
        ]
      }
    ]
  }
}