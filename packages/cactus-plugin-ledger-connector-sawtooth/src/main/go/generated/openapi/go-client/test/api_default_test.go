/*
Hyperledger Cacti Plugin - Connector Sawtooth

Testing DefaultApiService

*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech);

package cactus-plugin-ledger-connector-sawtooth

import (
	"context"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
	openapiclient "github.com/hyperledger/cactus-plugin-ledger-connector-sawtooth/src/main/go/generated/openapi/go-client"
)

func Test_cactus-plugin-ledger-connector-sawtooth_DefaultApiService(t *testing.T) {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)

	t.Run("Test DefaultApiService GetStatusV1", func(t *testing.T) {

		t.Skip("skip test")  // remove to run test

		resp, httpRes, err := apiClient.DefaultApi.GetStatusV1(context.Background()).Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)

	})

}
