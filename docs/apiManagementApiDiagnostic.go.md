# `azurerm_api_management_api_diagnostic`

Refer to the Terraform Registory for docs: [`azurerm_api_management_api_diagnostic`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic).

# `apiManagementApiDiagnostic` Submodule <a name="`apiManagementApiDiagnostic` Submodule" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiDiagnostic <a name="ApiManagementApiDiagnostic" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic azurerm_api_management_api_diagnostic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnostic(scope Construct, id *string, config ApiManagementApiDiagnosticConfig) ApiManagementApiDiagnostic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig">ApiManagementApiDiagnosticConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig">ApiManagementApiDiagnosticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest">PutBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse">PutBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest">PutFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse">PutFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetAlwaysLogErrors">ResetAlwaysLogErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendRequest">ResetBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendResponse">ResetBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendRequest">ResetFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendResponse">ResetFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetHttpCorrelationProtocol">ResetHttpCorrelationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetLogClientIp">ResetLogClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOperationNameFormat">ResetOperationNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetSamplingPercentage">ResetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetVerbosity">ResetVerbosity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBackendRequest` <a name="PutBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest"></a>

```go
func PutBackendRequest(value ApiManagementApiDiagnosticBackendRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---

##### `PutBackendResponse` <a name="PutBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse"></a>

```go
func PutBackendResponse(value ApiManagementApiDiagnosticBackendResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putBackendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---

##### `PutFrontendRequest` <a name="PutFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest"></a>

```go
func PutFrontendRequest(value ApiManagementApiDiagnosticFrontendRequest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---

##### `PutFrontendResponse` <a name="PutFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse"></a>

```go
func PutFrontendResponse(value ApiManagementApiDiagnosticFrontendResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putFrontendResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementApiDiagnosticTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

---

##### `ResetAlwaysLogErrors` <a name="ResetAlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetAlwaysLogErrors"></a>

```go
func ResetAlwaysLogErrors()
```

##### `ResetBackendRequest` <a name="ResetBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendRequest"></a>

```go
func ResetBackendRequest()
```

##### `ResetBackendResponse` <a name="ResetBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetBackendResponse"></a>

```go
func ResetBackendResponse()
```

##### `ResetFrontendRequest` <a name="ResetFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendRequest"></a>

```go
func ResetFrontendRequest()
```

##### `ResetFrontendResponse` <a name="ResetFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetFrontendResponse"></a>

```go
func ResetFrontendResponse()
```

##### `ResetHttpCorrelationProtocol` <a name="ResetHttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetHttpCorrelationProtocol"></a>

```go
func ResetHttpCorrelationProtocol()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetId"></a>

```go
func ResetId()
```

##### `ResetLogClientIp` <a name="ResetLogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetLogClientIp"></a>

```go
func ResetLogClientIp()
```

##### `ResetOperationNameFormat` <a name="ResetOperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetOperationNameFormat"></a>

```go
func ResetOperationNameFormat()
```

##### `ResetSamplingPercentage` <a name="ResetSamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetSamplingPercentage"></a>

```go
func ResetSamplingPercentage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVerbosity` <a name="ResetVerbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.resetVerbosity"></a>

```go
func ResetVerbosity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.ApiManagementApiDiagnostic_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.ApiManagementApiDiagnostic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.ApiManagementApiDiagnostic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequest">BackendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference">ApiManagementApiDiagnosticBackendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponse">BackendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference">ApiManagementApiDiagnosticBackendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequest">FrontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference">ApiManagementApiDiagnosticFrontendRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponse">FrontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference">ApiManagementApiDiagnosticFrontendResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference">ApiManagementApiDiagnosticTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrorsInput">AlwaysLogErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerIdInput">ApiManagementLoggerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiNameInput">ApiNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequestInput">BackendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponseInput">BackendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequestInput">FrontendRequestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponseInput">FrontendResponseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocolInput">HttpCorrelationProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIpInput">LogClientIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormatInput">OperationNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosityInput">VerbosityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrors">AlwaysLogErrors</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerId">ApiManagementLoggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiName">ApiName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocol">HttpCorrelationProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIp">LogClientIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormat">OperationNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosity">Verbosity</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackendRequest`<sup>Required</sup> <a name="BackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequest"></a>

```go
func BackendRequest() ApiManagementApiDiagnosticBackendRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference">ApiManagementApiDiagnosticBackendRequestOutputReference</a>

---

##### `BackendResponse`<sup>Required</sup> <a name="BackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponse"></a>

```go
func BackendResponse() ApiManagementApiDiagnosticBackendResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference">ApiManagementApiDiagnosticBackendResponseOutputReference</a>

---

##### `FrontendRequest`<sup>Required</sup> <a name="FrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequest"></a>

```go
func FrontendRequest() ApiManagementApiDiagnosticFrontendRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference">ApiManagementApiDiagnosticFrontendRequestOutputReference</a>

---

##### `FrontendResponse`<sup>Required</sup> <a name="FrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponse"></a>

```go
func FrontendResponse() ApiManagementApiDiagnosticFrontendResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference">ApiManagementApiDiagnosticFrontendResponseOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeouts"></a>

```go
func Timeouts() ApiManagementApiDiagnosticTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference">ApiManagementApiDiagnosticTimeoutsOutputReference</a>

---

##### `AlwaysLogErrorsInput`<sup>Optional</sup> <a name="AlwaysLogErrorsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrorsInput"></a>

```go
func AlwaysLogErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementLoggerIdInput`<sup>Optional</sup> <a name="ApiManagementLoggerIdInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerIdInput"></a>

```go
func ApiManagementLoggerIdInput() *string
```

- *Type:* *string

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `ApiNameInput`<sup>Optional</sup> <a name="ApiNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiNameInput"></a>

```go
func ApiNameInput() *string
```

- *Type:* *string

---

##### `BackendRequestInput`<sup>Optional</sup> <a name="BackendRequestInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendRequestInput"></a>

```go
func BackendRequestInput() ApiManagementApiDiagnosticBackendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---

##### `BackendResponseInput`<sup>Optional</sup> <a name="BackendResponseInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.backendResponseInput"></a>

```go
func BackendResponseInput() ApiManagementApiDiagnosticBackendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---

##### `FrontendRequestInput`<sup>Optional</sup> <a name="FrontendRequestInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendRequestInput"></a>

```go
func FrontendRequestInput() ApiManagementApiDiagnosticFrontendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---

##### `FrontendResponseInput`<sup>Optional</sup> <a name="FrontendResponseInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.frontendResponseInput"></a>

```go
func FrontendResponseInput() ApiManagementApiDiagnosticFrontendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---

##### `HttpCorrelationProtocolInput`<sup>Optional</sup> <a name="HttpCorrelationProtocolInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocolInput"></a>

```go
func HttpCorrelationProtocolInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogClientIpInput`<sup>Optional</sup> <a name="LogClientIpInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIpInput"></a>

```go
func LogClientIpInput() interface{}
```

- *Type:* interface{}

---

##### `OperationNameFormatInput`<sup>Optional</sup> <a name="OperationNameFormatInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormatInput"></a>

```go
func OperationNameFormatInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentageInput"></a>

```go
func SamplingPercentageInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VerbosityInput`<sup>Optional</sup> <a name="VerbosityInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosityInput"></a>

```go
func VerbosityInput() *string
```

- *Type:* *string

---

##### `AlwaysLogErrors`<sup>Required</sup> <a name="AlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.alwaysLogErrors"></a>

```go
func AlwaysLogErrors() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementLoggerId`<sup>Required</sup> <a name="ApiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementLoggerId"></a>

```go
func ApiManagementLoggerId() *string
```

- *Type:* *string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.apiName"></a>

```go
func ApiName() *string
```

- *Type:* *string

---

##### `HttpCorrelationProtocol`<sup>Required</sup> <a name="HttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.httpCorrelationProtocol"></a>

```go
func HttpCorrelationProtocol() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `LogClientIp`<sup>Required</sup> <a name="LogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.logClientIp"></a>

```go
func LogClientIp() interface{}
```

- *Type:* interface{}

---

##### `OperationNameFormat`<sup>Required</sup> <a name="OperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.operationNameFormat"></a>

```go
func OperationNameFormat() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.samplingPercentage"></a>

```go
func SamplingPercentage() *f64
```

- *Type:* *f64

---

##### `Verbosity`<sup>Required</sup> <a name="Verbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.verbosity"></a>

```go
func Verbosity() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnostic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiDiagnosticBackendRequest <a name="ApiManagementApiDiagnosticBackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendRequest {
	BodyBytes: *f64,
	DataMasking: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking,
	HeadersToLog: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.bodyBytes"></a>

```go
BodyBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.dataMasking"></a>

```go
DataMasking ApiManagementApiDiagnosticBackendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest.property.headersToLog"></a>

```go
HeadersToLog *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticBackendRequestDataMasking <a name="ApiManagementApiDiagnosticBackendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking {
	Headers: interface{},
	QueryParams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.queryParams">QueryParams</a></code> | <code>interface{}</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking.property.queryParams"></a>

```go
QueryParams interface{}
```

- *Type:* interface{}

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendResponse <a name="ApiManagementApiDiagnosticBackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendResponse {
	BodyBytes: *f64,
	DataMasking: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking,
	HeadersToLog: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.bodyBytes"></a>

```go
BodyBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.dataMasking"></a>

```go
DataMasking ApiManagementApiDiagnosticBackendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse.property.headersToLog"></a>

```go
HeadersToLog *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticBackendResponseDataMasking <a name="ApiManagementApiDiagnosticBackendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking {
	Headers: interface{},
	QueryParams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.queryParams">QueryParams</a></code> | <code>interface{}</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking.property.queryParams"></a>

```go
QueryParams interface{}
```

- *Type:* interface{}

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticConfig <a name="ApiManagementApiDiagnosticConfig" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementLoggerId: *string,
	ApiManagementName: *string,
	ApiName: *string,
	Identifier: *string,
	ResourceGroupName: *string,
	AlwaysLogErrors: interface{},
	BackendRequest: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest,
	BackendResponse: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse,
	FrontendRequest: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest,
	FrontendResponse: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse,
	HttpCorrelationProtocol: *string,
	Id: *string,
	LogClientIp: interface{},
	OperationNameFormat: *string,
	SamplingPercentage: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts,
	Verbosity: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementLoggerId">ApiManagementLoggerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiName">ApiName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.alwaysLogErrors">AlwaysLogErrors</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendRequest">BackendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | backend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendResponse">BackendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | backend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendRequest">FrontendRequest</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | frontend_request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendResponse">FrontendResponse</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | frontend_response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.httpCorrelationProtocol">HttpCorrelationProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.logClientIp">LogClientIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.operationNameFormat">OperationNameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.verbosity">Verbosity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementLoggerId`<sup>Required</sup> <a name="ApiManagementLoggerId" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementLoggerId"></a>

```go
ApiManagementLoggerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#api_management_logger_id ApiManagementApiDiagnostic#api_management_logger_id}.

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#api_management_name ApiManagementApiDiagnostic#api_management_name}.

---

##### `ApiName`<sup>Required</sup> <a name="ApiName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.apiName"></a>

```go
ApiName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#api_name ApiManagementApiDiagnostic#api_name}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#identifier ApiManagementApiDiagnostic#identifier}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#resource_group_name ApiManagementApiDiagnostic#resource_group_name}.

---

##### `AlwaysLogErrors`<sup>Optional</sup> <a name="AlwaysLogErrors" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.alwaysLogErrors"></a>

```go
AlwaysLogErrors interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#always_log_errors ApiManagementApiDiagnostic#always_log_errors}.

---

##### `BackendRequest`<sup>Optional</sup> <a name="BackendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendRequest"></a>

```go
BackendRequest ApiManagementApiDiagnosticBackendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

backend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#backend_request ApiManagementApiDiagnostic#backend_request}

---

##### `BackendResponse`<sup>Optional</sup> <a name="BackendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.backendResponse"></a>

```go
BackendResponse ApiManagementApiDiagnosticBackendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

backend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#backend_response ApiManagementApiDiagnostic#backend_response}

---

##### `FrontendRequest`<sup>Optional</sup> <a name="FrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendRequest"></a>

```go
FrontendRequest ApiManagementApiDiagnosticFrontendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

frontend_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#frontend_request ApiManagementApiDiagnostic#frontend_request}

---

##### `FrontendResponse`<sup>Optional</sup> <a name="FrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.frontendResponse"></a>

```go
FrontendResponse ApiManagementApiDiagnosticFrontendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

frontend_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#frontend_response ApiManagementApiDiagnostic#frontend_response}

---

##### `HttpCorrelationProtocol`<sup>Optional</sup> <a name="HttpCorrelationProtocol" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.httpCorrelationProtocol"></a>

```go
HttpCorrelationProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#http_correlation_protocol ApiManagementApiDiagnostic#http_correlation_protocol}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#id ApiManagementApiDiagnostic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogClientIp`<sup>Optional</sup> <a name="LogClientIp" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.logClientIp"></a>

```go
LogClientIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#log_client_ip ApiManagementApiDiagnostic#log_client_ip}.

---

##### `OperationNameFormat`<sup>Optional</sup> <a name="OperationNameFormat" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.operationNameFormat"></a>

```go
OperationNameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#operation_name_format ApiManagementApiDiagnostic#operation_name_format}.

---

##### `SamplingPercentage`<sup>Optional</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.samplingPercentage"></a>

```go
SamplingPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#sampling_percentage ApiManagementApiDiagnostic#sampling_percentage}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.timeouts"></a>

```go
Timeouts ApiManagementApiDiagnosticTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts">ApiManagementApiDiagnosticTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#timeouts ApiManagementApiDiagnostic#timeouts}

---

##### `Verbosity`<sup>Optional</sup> <a name="Verbosity" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticConfig.property.verbosity"></a>

```go
Verbosity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#verbosity ApiManagementApiDiagnostic#verbosity}.

---

### ApiManagementApiDiagnosticFrontendRequest <a name="ApiManagementApiDiagnosticFrontendRequest" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendRequest {
	BodyBytes: *f64,
	DataMasking: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking,
	HeadersToLog: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.bodyBytes"></a>

```go
BodyBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.dataMasking"></a>

```go
DataMasking ApiManagementApiDiagnosticFrontendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest.property.headersToLog"></a>

```go
HeadersToLog *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticFrontendRequestDataMasking <a name="ApiManagementApiDiagnosticFrontendRequestDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking {
	Headers: interface{},
	QueryParams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.queryParams">QueryParams</a></code> | <code>interface{}</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking.property.queryParams"></a>

```go
QueryParams interface{}
```

- *Type:* interface{}

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendResponse <a name="ApiManagementApiDiagnosticFrontendResponse" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendResponse {
	BodyBytes: *f64,
	DataMasking: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking,
	HeadersToLog: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | data_masking block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}. |

---

##### `BodyBytes`<sup>Optional</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.bodyBytes"></a>

```go
BodyBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#body_bytes ApiManagementApiDiagnostic#body_bytes}.

---

##### `DataMasking`<sup>Optional</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.dataMasking"></a>

```go
DataMasking ApiManagementApiDiagnosticFrontendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

data_masking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#data_masking ApiManagementApiDiagnostic#data_masking}

---

##### `HeadersToLog`<sup>Optional</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse.property.headersToLog"></a>

```go
HeadersToLog *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers_to_log ApiManagementApiDiagnostic#headers_to_log}.

---

### ApiManagementApiDiagnosticFrontendResponseDataMasking <a name="ApiManagementApiDiagnosticFrontendResponseDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking {
	Headers: interface{},
	QueryParams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.queryParams">QueryParams</a></code> | <code>interface{}</code> | query_params block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#headers ApiManagementApiDiagnostic#headers}

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking.property.queryParams"></a>

```go
QueryParams interface{}
```

- *Type:* interface{}

query_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#query_params ApiManagementApiDiagnostic#query_params}

---

### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams {
	Mode: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#mode ApiManagementApiDiagnostic#mode}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParams.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#value ApiManagementApiDiagnostic#value}.

---

### ApiManagementApiDiagnosticTimeouts <a name="ApiManagementApiDiagnosticTimeouts" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

&apimanagementapidiagnostic.ApiManagementApiDiagnosticTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#create ApiManagementApiDiagnostic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#delete ApiManagementApiDiagnostic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#read ApiManagementApiDiagnostic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/api_management_api_diagnostic#update ApiManagementApiDiagnostic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams"></a>

```go
func PutQueryParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.resetQueryParams"></a>

```go
func ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headers"></a>

```go
func Headers() ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticBackendRequestDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParams"></a>

```go
func QueryParams() ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```go
func QueryParamsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticBackendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendRequestOutputReference <a name="ApiManagementApiDiagnosticBackendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticBackendRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking"></a>

```go
func PutDataMasking(value ApiManagementApiDiagnosticBackendRequestDataMasking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetBodyBytes"></a>

```go
func ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetDataMasking"></a>

```go
func ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.resetHeadersToLog"></a>

```go
func ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMasking"></a>

```go
func DataMasking() ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticBackendRequestDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytesInput"></a>

```go
func BodyBytesInput() *f64
```

- *Type:* *f64

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.dataMaskingInput"></a>

```go
func DataMaskingInput() ApiManagementApiDiagnosticBackendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestDataMasking">ApiManagementApiDiagnosticBackendRequestDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLogInput"></a>

```go
func HeadersToLogInput() *[]*string
```

- *Type:* *[]*string

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.bodyBytes"></a>

```go
func BodyBytes() *f64
```

- *Type:* *f64

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.headersToLog"></a>

```go
func HeadersToLog() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticBackendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendRequest">ApiManagementApiDiagnosticBackendRequest</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams"></a>

```go
func PutQueryParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.resetQueryParams"></a>

```go
func ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headers"></a>

```go
func Headers() ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticBackendResponseDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParams"></a>

```go
func QueryParams() ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```go
func QueryParamsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticBackendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticBackendResponseOutputReference <a name="ApiManagementApiDiagnosticBackendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticBackendResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticBackendResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking"></a>

```go
func PutDataMasking(value ApiManagementApiDiagnosticBackendResponseDataMasking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetBodyBytes"></a>

```go
func ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetDataMasking"></a>

```go
func ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.resetHeadersToLog"></a>

```go
func ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMasking"></a>

```go
func DataMasking() ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticBackendResponseDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytesInput"></a>

```go
func BodyBytesInput() *f64
```

- *Type:* *f64

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.dataMaskingInput"></a>

```go
func DataMaskingInput() ApiManagementApiDiagnosticBackendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseDataMasking">ApiManagementApiDiagnosticBackendResponseDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLogInput"></a>

```go
func HeadersToLogInput() *[]*string
```

- *Type:* *[]*string

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.bodyBytes"></a>

```go
func BodyBytes() *f64
```

- *Type:* *f64

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.headersToLog"></a>

```go
func HeadersToLog() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticBackendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticBackendResponse">ApiManagementApiDiagnosticBackendResponse</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams"></a>

```go
func PutQueryParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.resetQueryParams"></a>

```go
func ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headers"></a>

```go
func Headers() ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendRequestDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParams"></a>

```go
func QueryParams() ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.queryParamsInput"></a>

```go
func QueryParamsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticFrontendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendRequestOutputReference <a name="ApiManagementApiDiagnosticFrontendRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticFrontendRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking"></a>

```go
func PutDataMasking(value ApiManagementApiDiagnosticFrontendRequestDataMasking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetBodyBytes"></a>

```go
func ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetDataMasking"></a>

```go
func ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.resetHeadersToLog"></a>

```go
func ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMasking"></a>

```go
func DataMasking() ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendRequestDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytesInput"></a>

```go
func BodyBytesInput() *f64
```

- *Type:* *f64

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.dataMaskingInput"></a>

```go
func DataMaskingInput() ApiManagementApiDiagnosticFrontendRequestDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestDataMasking">ApiManagementApiDiagnosticFrontendRequestDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLogInput"></a>

```go
func HeadersToLogInput() *[]*string
```

- *Type:* *[]*string

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.bodyBytes"></a>

```go
func BodyBytes() *f64
```

- *Type:* *f64

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.headersToLog"></a>

```go
func HeadersToLog() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticFrontendRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendRequest">ApiManagementApiDiagnosticFrontendRequest</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams">PutQueryParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParams` <a name="PutQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams"></a>

```go
func PutQueryParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.putQueryParams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.resetQueryParams"></a>

```go
func ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams">QueryParams</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headers"></a>

```go
func Headers() ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList">ApiManagementApiDiagnosticFrontendResponseDataMaskingHeadersList</a>

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParams"></a>

```go
func QueryParams() ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList">ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.queryParamsInput"></a>

```go
func QueryParamsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticFrontendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get"></a>

```go
func Get(index *f64) ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingQueryParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementApiDiagnosticFrontendResponseOutputReference <a name="ApiManagementApiDiagnosticFrontendResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticFrontendResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticFrontendResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking">PutDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetBodyBytes">ResetBodyBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetDataMasking">ResetDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetHeadersToLog">ResetHeadersToLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataMasking` <a name="PutDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking"></a>

```go
func PutDataMasking(value ApiManagementApiDiagnosticFrontendResponseDataMasking)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.putDataMasking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---

##### `ResetBodyBytes` <a name="ResetBodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetBodyBytes"></a>

```go
func ResetBodyBytes()
```

##### `ResetDataMasking` <a name="ResetDataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetDataMasking"></a>

```go
func ResetDataMasking()
```

##### `ResetHeadersToLog` <a name="ResetHeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.resetHeadersToLog"></a>

```go
func ResetHeadersToLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMasking">DataMasking</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytesInput">BodyBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMaskingInput">DataMaskingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLogInput">HeadersToLogInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytes">BodyBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLog">HeadersToLog</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataMasking`<sup>Required</sup> <a name="DataMasking" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMasking"></a>

```go
func DataMasking() ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference">ApiManagementApiDiagnosticFrontendResponseDataMaskingOutputReference</a>

---

##### `BodyBytesInput`<sup>Optional</sup> <a name="BodyBytesInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytesInput"></a>

```go
func BodyBytesInput() *f64
```

- *Type:* *f64

---

##### `DataMaskingInput`<sup>Optional</sup> <a name="DataMaskingInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.dataMaskingInput"></a>

```go
func DataMaskingInput() ApiManagementApiDiagnosticFrontendResponseDataMasking
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseDataMasking">ApiManagementApiDiagnosticFrontendResponseDataMasking</a>

---

##### `HeadersToLogInput`<sup>Optional</sup> <a name="HeadersToLogInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLogInput"></a>

```go
func HeadersToLogInput() *[]*string
```

- *Type:* *[]*string

---

##### `BodyBytes`<sup>Required</sup> <a name="BodyBytes" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.bodyBytes"></a>

```go
func BodyBytes() *f64
```

- *Type:* *f64

---

##### `HeadersToLog`<sup>Required</sup> <a name="HeadersToLog" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.headersToLog"></a>

```go
func HeadersToLog() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiManagementApiDiagnosticFrontendResponse
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticFrontendResponse">ApiManagementApiDiagnosticFrontendResponse</a>

---


### ApiManagementApiDiagnosticTimeoutsOutputReference <a name="ApiManagementApiDiagnosticTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/apimanagementapidiagnostic"

apimanagementapidiagnostic.NewApiManagementApiDiagnosticTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementApiDiagnosticTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementApiDiagnostic.ApiManagementApiDiagnosticTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



