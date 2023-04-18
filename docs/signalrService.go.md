# `azurerm_signalr_service`

Refer to the Terraform Registory for docs: [`azurerm_signalr_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service).

# `signalrService` Submodule <a name="`signalrService` Submodule" id="@cdktf/provider-azurerm.signalrService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrService <a name="SignalrService" id="@cdktf/provider-azurerm.signalrService.SignalrService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service azurerm_signalr_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrService(scope Construct, id *string, config SignalrServiceConfig) SignalrService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig">SignalrServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.signalrService.SignalrService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig">SignalrServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace">PutLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint">PutUpstreamEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled">ResetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled">ResetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled">ResetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace">ResetLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled">ResetLiveTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled">ResetMessagingLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds">ResetServerlessConnectionTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode">ResetServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled">ResetTlsClientCertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint">ResetUpstreamEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.signalrService.SignalrService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors"></a>

```go
func PutCors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putCors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity"></a>

```go
func PutIdentity(value SignalrServiceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `PutLiveTrace` <a name="PutLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace"></a>

```go
func PutLiveTrace(value SignalrServiceLiveTrace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putLiveTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku"></a>

```go
func PutSku(value SignalrServiceSku)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts"></a>

```go
func PutTimeouts(value SignalrServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

---

##### `PutUpstreamEndpoint` <a name="PutUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint"></a>

```go
func PutUpstreamEndpoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrService.SignalrService.putUpstreamEndpoint.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAadAuthEnabled` <a name="ResetAadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetAadAuthEnabled"></a>

```go
func ResetAadAuthEnabled()
```

##### `ResetConnectivityLogsEnabled` <a name="ResetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetConnectivityLogsEnabled"></a>

```go
func ResetConnectivityLogsEnabled()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetCors"></a>

```go
func ResetCors()
```

##### `ResetHttpRequestLogsEnabled` <a name="ResetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetHttpRequestLogsEnabled"></a>

```go
func ResetHttpRequestLogsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLiveTrace` <a name="ResetLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTrace"></a>

```go
func ResetLiveTrace()
```

##### `ResetLiveTraceEnabled` <a name="ResetLiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLiveTraceEnabled"></a>

```go
func ResetLiveTraceEnabled()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetMessagingLogsEnabled` <a name="ResetMessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetMessagingLogsEnabled"></a>

```go
func ResetMessagingLogsEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetServerlessConnectionTimeoutInSeconds` <a name="ResetServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServerlessConnectionTimeoutInSeconds"></a>

```go
func ResetServerlessConnectionTimeoutInSeconds()
```

##### `ResetServiceMode` <a name="ResetServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetServiceMode"></a>

```go
func ResetServiceMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsClientCertEnabled` <a name="ResetTlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetTlsClientCertEnabled"></a>

```go
func ResetTlsClientCertEnabled()
```

##### `ResetUpstreamEndpoint` <a name="ResetUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.resetUpstreamEndpoint"></a>

```go
func ResetUpstreamEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.SignalrService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.SignalrService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.SignalrService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrService.SignalrService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort">PublicPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort">ServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint">UpstreamEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput">AadAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput">ConnectivityLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput">CorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput">HttpRequestLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput">LiveTraceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput">LiveTraceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput">MessagingLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput">ServerlessConnectionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput">ServiceModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput">TlsClientCertEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput">UpstreamEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled">LiveTraceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds">ServerlessConnectionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode">ServiceMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.cors"></a>

```go
func Cors() SignalrServiceCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList">SignalrServiceCorsList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identity"></a>

```go
func Identity() SignalrServiceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference">SignalrServiceIdentityOutputReference</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `LiveTrace`<sup>Required</sup> <a name="LiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTrace"></a>

```go
func LiveTrace() SignalrServiceLiveTraceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference">SignalrServiceLiveTraceOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryAccessKey"></a>

```go
func PrimaryAccessKey() *string
```

- *Type:* *string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicPort"></a>

```go
func PublicPort() *f64
```

- *Type:* *f64

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryAccessKey"></a>

```go
func SecondaryAccessKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverPort"></a>

```go
func ServerPort() *f64
```

- *Type:* *f64

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.sku"></a>

```go
func Sku() SignalrServiceSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference">SignalrServiceSkuOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeouts"></a>

```go
func Timeouts() SignalrServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference">SignalrServiceTimeoutsOutputReference</a>

---

##### `UpstreamEndpoint`<sup>Required</sup> <a name="UpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpoint"></a>

```go
func UpstreamEndpoint() SignalrServiceUpstreamEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList">SignalrServiceUpstreamEndpointList</a>

---

##### `AadAuthEnabledInput`<sup>Optional</sup> <a name="AadAuthEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabledInput"></a>

```go
func AadAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="ConnectivityLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabledInput"></a>

```go
func ConnectivityLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.corsInput"></a>

```go
func CorsInput() interface{}
```

- *Type:* interface{}

---

##### `HttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="HttpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabledInput"></a>

```go
func HttpRequestLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.identityInput"></a>

```go
func IdentityInput() SignalrServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LiveTraceEnabledInput`<sup>Optional</sup> <a name="LiveTraceEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabledInput"></a>

```go
func LiveTraceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LiveTraceInput`<sup>Optional</sup> <a name="LiveTraceInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceInput"></a>

```go
func LiveTraceInput() SignalrServiceLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MessagingLogsEnabledInput`<sup>Optional</sup> <a name="MessagingLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabledInput"></a>

```go
func MessagingLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerlessConnectionTimeoutInSecondsInput`<sup>Optional</sup> <a name="ServerlessConnectionTimeoutInSecondsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSecondsInput"></a>

```go
func ServerlessConnectionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ServiceModeInput`<sup>Optional</sup> <a name="ServiceModeInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceModeInput"></a>

```go
func ServiceModeInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.skuInput"></a>

```go
func SkuInput() SignalrServiceSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsClientCertEnabledInput`<sup>Optional</sup> <a name="TlsClientCertEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabledInput"></a>

```go
func TlsClientCertEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UpstreamEndpointInput`<sup>Optional</sup> <a name="UpstreamEndpointInput" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.upstreamEndpointInput"></a>

```go
func UpstreamEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.aadAuthEnabled"></a>

```go
func AadAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.connectivityLogsEnabled"></a>

```go
func ConnectivityLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.httpRequestLogsEnabled"></a>

```go
func HttpRequestLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LiveTraceEnabled`<sup>Required</sup> <a name="LiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.liveTraceEnabled"></a>

```go
func LiveTraceEnabled() interface{}
```

- *Type:* interface{}

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.messagingLogsEnabled"></a>

```go
func MessagingLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServerlessConnectionTimeoutInSeconds`<sup>Required</sup> <a name="ServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serverlessConnectionTimeoutInSeconds"></a>

```go
func ServerlessConnectionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ServiceMode`<sup>Required</sup> <a name="ServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.serviceMode"></a>

```go
func ServiceMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tlsClientCertEnabled"></a>

```go
func TlsClientCertEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.signalrService.SignalrService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceConfig <a name="SignalrServiceConfig" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Sku: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.signalrService.SignalrServiceSku,
	AadAuthEnabled: interface{},
	ConnectivityLogsEnabled: interface{},
	Cors: interface{},
	HttpRequestLogsEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.signalrService.SignalrServiceIdentity,
	LiveTrace: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.signalrService.SignalrServiceLiveTrace,
	LiveTraceEnabled: interface{},
	LocalAuthEnabled: interface{},
	MessagingLogsEnabled: interface{},
	PublicNetworkAccessEnabled: interface{},
	ServerlessConnectionTimeoutInSeconds: *f64,
	ServiceMode: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.signalrService.SignalrServiceTimeouts,
	TlsClientCertEnabled: interface{},
	UpstreamEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#location SignalrService#location}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#name SignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors">Cors</a></code> | <code>interface{}</code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#id SignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled">LiveTraceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds">ServerlessConnectionTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode">ServiceMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#tags SignalrService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint">UpstreamEndpoint</a></code> | <code>interface{}</code> | upstream_endpoint block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#location SignalrService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#name SignalrService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#resource_group_name SignalrService#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.sku"></a>

```go
Sku SignalrServiceSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#sku SignalrService#sku}

---

##### `AadAuthEnabled`<sup>Optional</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.aadAuthEnabled"></a>

```go
AadAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#aad_auth_enabled SignalrService#aad_auth_enabled}.

---

##### `ConnectivityLogsEnabled`<sup>Optional</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.connectivityLogsEnabled"></a>

```go
ConnectivityLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.cors"></a>

```go
Cors interface{}
```

- *Type:* interface{}

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#cors SignalrService#cors}

---

##### `HttpRequestLogsEnabled`<sup>Optional</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.httpRequestLogsEnabled"></a>

```go
HttpRequestLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#id SignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.identity"></a>

```go
Identity SignalrServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#identity SignalrService#identity}

---

##### `LiveTrace`<sup>Optional</sup> <a name="LiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTrace"></a>

```go
LiveTrace SignalrServiceLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#live_trace SignalrService#live_trace}

---

##### `LiveTraceEnabled`<sup>Optional</sup> <a name="LiveTraceEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.liveTraceEnabled"></a>

```go
LiveTraceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#live_trace_enabled SignalrService#live_trace_enabled}.

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#local_auth_enabled SignalrService#local_auth_enabled}.

---

##### `MessagingLogsEnabled`<sup>Optional</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.messagingLogsEnabled"></a>

```go
MessagingLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#public_network_access_enabled SignalrService#public_network_access_enabled}.

---

##### `ServerlessConnectionTimeoutInSeconds`<sup>Optional</sup> <a name="ServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serverlessConnectionTimeoutInSeconds"></a>

```go
ServerlessConnectionTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#serverless_connection_timeout_in_seconds SignalrService#serverless_connection_timeout_in_seconds}.

---

##### `ServiceMode`<sup>Optional</sup> <a name="ServiceMode" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.serviceMode"></a>

```go
ServiceMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#service_mode SignalrService#service_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#tags SignalrService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.timeouts"></a>

```go
Timeouts SignalrServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts">SignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#timeouts SignalrService#timeouts}

---

##### `TlsClientCertEnabled`<sup>Optional</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.tlsClientCertEnabled"></a>

```go
TlsClientCertEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#tls_client_cert_enabled SignalrService#tls_client_cert_enabled}.

---

##### `UpstreamEndpoint`<sup>Optional</sup> <a name="UpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceConfig.property.upstreamEndpoint"></a>

```go
UpstreamEndpoint interface{}
```

- *Type:* interface{}

upstream_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#upstream_endpoint SignalrService#upstream_endpoint}

---

### SignalrServiceCors <a name="SignalrServiceCors" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceCors {
	AllowedOrigins: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCors.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#allowed_origins SignalrService#allowed_origins}.

---

### SignalrServiceIdentity <a name="SignalrServiceIdentity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#type SignalrService#type}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#type SignalrService#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#identity_ids SignalrService#identity_ids}.

---

### SignalrServiceLiveTrace <a name="SignalrServiceLiveTrace" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceLiveTrace {
	ConnectivityLogsEnabled: interface{},
	Enabled: interface{},
	HttpRequestLogsEnabled: interface{},
	MessagingLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#enabled SignalrService#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}. |

---

##### `ConnectivityLogsEnabled`<sup>Optional</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.connectivityLogsEnabled"></a>

```go
ConnectivityLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#connectivity_logs_enabled SignalrService#connectivity_logs_enabled}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#enabled SignalrService#enabled}.

---

##### `HttpRequestLogsEnabled`<sup>Optional</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.httpRequestLogsEnabled"></a>

```go
HttpRequestLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#http_request_logs_enabled SignalrService#http_request_logs_enabled}.

---

##### `MessagingLogsEnabled`<sup>Optional</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace.property.messagingLogsEnabled"></a>

```go
MessagingLogsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#messaging_logs_enabled SignalrService#messaging_logs_enabled}.

---

### SignalrServiceSku <a name="SignalrServiceSku" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceSku {
	Capacity: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#capacity SignalrService#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#name SignalrService#name}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#capacity SignalrService#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSku.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#name SignalrService#name}.

---

### SignalrServiceTimeouts <a name="SignalrServiceTimeouts" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#create SignalrService#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#delete SignalrService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#read SignalrService#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#update SignalrService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#create SignalrService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#delete SignalrService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#read SignalrService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#update SignalrService#update}.

---

### SignalrServiceUpstreamEndpoint <a name="SignalrServiceUpstreamEndpoint" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

&signalrservice.SignalrServiceUpstreamEndpoint {
	CategoryPattern: *[]*string,
	EventPattern: *[]*string,
	HubPattern: *[]*string,
	UrlTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern">CategoryPattern</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern">EventPattern</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern">HubPattern</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate">UrlTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#url_template SignalrService#url_template}. |

---

##### `CategoryPattern`<sup>Required</sup> <a name="CategoryPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.categoryPattern"></a>

```go
CategoryPattern *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#category_pattern SignalrService#category_pattern}.

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.eventPattern"></a>

```go
EventPattern *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#event_pattern SignalrService#event_pattern}.

---

##### `HubPattern`<sup>Required</sup> <a name="HubPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.hubPattern"></a>

```go
HubPattern *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#hub_pattern SignalrService#hub_pattern}.

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpoint.property.urlTemplate"></a>

```go
UrlTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/signalr_service#url_template SignalrService#url_template}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceCorsList <a name="SignalrServiceCorsList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceCorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SignalrServiceCorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get"></a>

```go
func Get(index *f64) SignalrServiceCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignalrServiceCorsOutputReference <a name="SignalrServiceCorsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SignalrServiceCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignalrServiceIdentityOutputReference <a name="SignalrServiceIdentityOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SignalrServiceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() SignalrServiceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceIdentity">SignalrServiceIdentity</a>

---


### SignalrServiceLiveTraceOutputReference <a name="SignalrServiceLiveTraceOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceLiveTraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SignalrServiceLiveTraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled">ResetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled">ResetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled">ResetMessagingLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityLogsEnabled` <a name="ResetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```go
func ResetConnectivityLogsEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHttpRequestLogsEnabled` <a name="ResetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```go
func ResetHttpRequestLogsEnabled()
```

##### `ResetMessagingLogsEnabled` <a name="ResetMessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```go
func ResetMessagingLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput">ConnectivityLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput">HttpRequestLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput">MessagingLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="ConnectivityLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```go
func ConnectivityLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="HttpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```go
func HttpRequestLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MessagingLogsEnabledInput`<sup>Optional</sup> <a name="MessagingLogsEnabledInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```go
func MessagingLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```go
func ConnectivityLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```go
func HttpRequestLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```go
func MessagingLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTraceOutputReference.property.internalValue"></a>

```go
func InternalValue() SignalrServiceLiveTrace
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceLiveTrace">SignalrServiceLiveTrace</a>

---


### SignalrServiceSkuOutputReference <a name="SignalrServiceSkuOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SignalrServiceSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() SignalrServiceSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceSku">SignalrServiceSku</a>

---


### SignalrServiceTimeoutsOutputReference <a name="SignalrServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SignalrServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignalrServiceUpstreamEndpointList <a name="SignalrServiceUpstreamEndpointList" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceUpstreamEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SignalrServiceUpstreamEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get"></a>

```go
func Get(index *f64) SignalrServiceUpstreamEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SignalrServiceUpstreamEndpointOutputReference <a name="SignalrServiceUpstreamEndpointOutputReference" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/signalrservice"

signalrservice.NewSignalrServiceUpstreamEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SignalrServiceUpstreamEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput">CategoryPatternInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput">HubPatternInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput">UrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern">CategoryPattern</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern">EventPattern</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern">HubPattern</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate">UrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryPatternInput`<sup>Optional</sup> <a name="CategoryPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPatternInput"></a>

```go
func CategoryPatternInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPatternInput"></a>

```go
func EventPatternInput() *[]*string
```

- *Type:* *[]*string

---

##### `HubPatternInput`<sup>Optional</sup> <a name="HubPatternInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPatternInput"></a>

```go
func HubPatternInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlTemplateInput`<sup>Optional</sup> <a name="UrlTemplateInput" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplateInput"></a>

```go
func UrlTemplateInput() *string
```

- *Type:* *string

---

##### `CategoryPattern`<sup>Required</sup> <a name="CategoryPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.categoryPattern"></a>

```go
func CategoryPattern() *[]*string
```

- *Type:* *[]*string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.eventPattern"></a>

```go
func EventPattern() *[]*string
```

- *Type:* *[]*string

---

##### `HubPattern`<sup>Required</sup> <a name="HubPattern" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.hubPattern"></a>

```go
func HubPattern() *[]*string
```

- *Type:* *[]*string

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.urlTemplate"></a>

```go
func UrlTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.signalrService.SignalrServiceUpstreamEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



