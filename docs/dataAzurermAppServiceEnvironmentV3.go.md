# `dataAzurermAppServiceEnvironmentV3` Submodule <a name="`dataAzurermAppServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceEnvironmentV3 <a name="DataAzurermAppServiceEnvironmentV3" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.NewDataAzurermAppServiceEnvironmentV3(scope Construct, id *string, config DataAzurermAppServiceEnvironmentV3Config) DataAzurermAppServiceEnvironmentV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config">DataAzurermAppServiceEnvironmentV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config">DataAzurermAppServiceEnvironmentV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermAppServiceEnvironmentV3Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">AllowNewPrivateEndpointConnections</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting">ClusterSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount">DedicatedHostCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix">DnsSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses">ExternalInboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies">InboundNetworkDependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses">InternalInboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode">InternalLoadBalancingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount">IpSslAddressCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses">LinuxOutboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier">PricingTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses">WindowsOutboundIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant">ZoneRedundant</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllowNewPrivateEndpointConnections`<sup>Required</sup> <a name="AllowNewPrivateEndpointConnections" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```go
func AllowNewPrivateEndpointConnections() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClusterSetting`<sup>Required</sup> <a name="ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting"></a>

```go
func ClusterSetting() DataAzurermAppServiceEnvironmentV3ClusterSettingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a>

---

##### `DedicatedHostCount`<sup>Required</sup> <a name="DedicatedHostCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```go
func DedicatedHostCount() *f64
```

- *Type:* *f64

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix"></a>

```go
func DnsSuffix() *string
```

- *Type:* *string

---

##### `ExternalInboundIpAddresses`<sup>Required</sup> <a name="ExternalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```go
func ExternalInboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InboundNetworkDependencies`<sup>Required</sup> <a name="InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```go
func InboundNetworkDependencies() DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `InternalInboundIpAddresses`<sup>Required</sup> <a name="InternalInboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```go
func InternalInboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalLoadBalancingMode`<sup>Required</sup> <a name="InternalLoadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```go
func InternalLoadBalancingMode() *string
```

- *Type:* *string

---

##### `IpSslAddressCount`<sup>Required</sup> <a name="IpSslAddressCount" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```go
func IpSslAddressCount() *f64
```

- *Type:* *f64

---

##### `LinuxOutboundIpAddresses`<sup>Required</sup> <a name="LinuxOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```go
func LinuxOutboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PricingTier`<sup>Required</sup> <a name="PricingTier" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier"></a>

```go
func PricingTier() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts"></a>

```go
func Timeouts() DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `WindowsOutboundIpAddresses`<sup>Required</sup> <a name="WindowsOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```go
func WindowsOutboundIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant"></a>

```go
func ZoneRedundant() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSetting <a name="DataAzurermAppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

&dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3ClusterSetting {

}
```


### DataAzurermAppServiceEnvironmentV3Config <a name="DataAzurermAppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

&dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts"></a>

```go
Timeouts DataAzurermAppServiceEnvironmentV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

### DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

&dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies {

}
```


### DataAzurermAppServiceEnvironmentV3Timeouts <a name="DataAzurermAppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

&dataazurermappserviceenvironmentv3.DataAzurermAppServiceEnvironmentV3Timeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSettingList <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.NewDataAzurermAppServiceEnvironmentV3ClusterSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermAppServiceEnvironmentV3ClusterSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get"></a>

```go
func Get(index *f64) DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.NewDataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermAppServiceEnvironmentV3ClusterSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a>

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.NewDataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```go
func Get(index *f64) DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.NewDataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference <a name="DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/dataazurermappserviceenvironmentv3"

dataazurermappserviceenvironmentv3.NewDataAzurermAppServiceEnvironmentV3TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



