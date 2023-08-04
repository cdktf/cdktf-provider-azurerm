# `azurerm_traffic_manager_external_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_traffic_manager_external_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint).

# `trafficManagerExternalEndpoint` Submodule <a name="`trafficManagerExternalEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerExternalEndpoint <a name="TrafficManagerExternalEndpoint" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint azurerm_traffic_manager_external_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.NewTrafficManagerExternalEndpoint(scope Construct, id *string, config TrafficManagerExternalEndpointConfig) TrafficManagerExternalEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig">TrafficManagerExternalEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig">TrafficManagerExternalEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet">PutSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEndpointLocation">ResetEndpointLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetGeoMappings">ResetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader"></a>

```go
func PutCustomHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubnet` <a name="PutSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet"></a>

```go
func PutSubnet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putSubnet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value TrafficManagerExternalEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>

---

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetCustomHeader"></a>

```go
func ResetCustomHeader()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEndpointLocation` <a name="ResetEndpointLocation" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetEndpointLocation"></a>

```go
func ResetEndpointLocation()
```

##### `ResetGeoMappings` <a name="ResetGeoMappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetGeoMappings"></a>

```go
func ResetGeoMappings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.resetWeight"></a>

```go
func ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.TrafficManagerExternalEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.TrafficManagerExternalEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.TrafficManagerExternalEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList">TrafficManagerExternalEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnet">Subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList">TrafficManagerExternalEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference">TrafficManagerExternalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeaderInput">CustomHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocationInput">EndpointLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappingsInput">GeoMappingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnetInput">SubnetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocation">EndpointLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappings">GeoMappings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeader"></a>

```go
func CustomHeader() TrafficManagerExternalEndpointCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList">TrafficManagerExternalEndpointCustomHeaderList</a>

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnet"></a>

```go
func Subnet() TrafficManagerExternalEndpointSubnetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList">TrafficManagerExternalEndpointSubnetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeouts"></a>

```go
func Timeouts() TrafficManagerExternalEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference">TrafficManagerExternalEndpointTimeoutsOutputReference</a>

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.customHeaderInput"></a>

```go
func CustomHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointLocationInput`<sup>Optional</sup> <a name="EndpointLocationInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocationInput"></a>

```go
func EndpointLocationInput() *string
```

- *Type:* *string

---

##### `GeoMappingsInput`<sup>Optional</sup> <a name="GeoMappingsInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappingsInput"></a>

```go
func GeoMappingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.subnetInput"></a>

```go
func SubnetInput() interface{}
```

- *Type:* interface{}

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointLocation`<sup>Required</sup> <a name="EndpointLocation" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.endpointLocation"></a>

```go
func EndpointLocation() *string
```

- *Type:* *string

---

##### `GeoMappings`<sup>Required</sup> <a name="GeoMappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.geoMappings"></a>

```go
func GeoMappings() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerExternalEndpointConfig <a name="TrafficManagerExternalEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

&trafficmanagerexternalendpoint.TrafficManagerExternalEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProfileId: *string,
	Target: *string,
	CustomHeader: interface{},
	Enabled: interface{},
	EndpointLocation: *string,
	GeoMappings: *[]*string,
	Id: *string,
	Priority: *f64,
	Subnet: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.profileId">ProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.customHeader">CustomHeader</a></code> | <code>interface{}</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.endpointLocation">EndpointLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.geoMappings">GeoMappings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.subnet">Subnet</a></code> | <code>interface{}</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#profile_id TrafficManagerExternalEndpoint#profile_id}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#target TrafficManagerExternalEndpoint#target}.

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.customHeader"></a>

```go
CustomHeader interface{}
```

- *Type:* interface{}

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#custom_header TrafficManagerExternalEndpoint#custom_header}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#enabled TrafficManagerExternalEndpoint#enabled}.

---

##### `EndpointLocation`<sup>Optional</sup> <a name="EndpointLocation" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.endpointLocation"></a>

```go
EndpointLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#endpoint_location TrafficManagerExternalEndpoint#endpoint_location}.

---

##### `GeoMappings`<sup>Optional</sup> <a name="GeoMappings" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.geoMappings"></a>

```go
GeoMappings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#geo_mappings TrafficManagerExternalEndpoint#geo_mappings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#id TrafficManagerExternalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#priority TrafficManagerExternalEndpoint#priority}.

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.subnet"></a>

```go
Subnet interface{}
```

- *Type:* interface{}

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#subnet TrafficManagerExternalEndpoint#subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.timeouts"></a>

```go
Timeouts TrafficManagerExternalEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts">TrafficManagerExternalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#timeouts TrafficManagerExternalEndpoint#timeouts}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#weight TrafficManagerExternalEndpoint#weight}.

---

### TrafficManagerExternalEndpointCustomHeader <a name="TrafficManagerExternalEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

&trafficmanagerexternalendpoint.TrafficManagerExternalEndpointCustomHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#value TrafficManagerExternalEndpoint#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#name TrafficManagerExternalEndpoint#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#value TrafficManagerExternalEndpoint#value}.

---

### TrafficManagerExternalEndpointSubnet <a name="TrafficManagerExternalEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

&trafficmanagerexternalendpoint.TrafficManagerExternalEndpointSubnet {
	First: *string,
	Last: *string,
	Scope: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.first">First</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#first TrafficManagerExternalEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.last">Last</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#last TrafficManagerExternalEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.scope">Scope</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#scope TrafficManagerExternalEndpoint#scope}. |

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.first"></a>

```go
First *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#first TrafficManagerExternalEndpoint#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.last"></a>

```go
Last *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#last TrafficManagerExternalEndpoint#last}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnet.property.scope"></a>

```go
Scope *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#scope TrafficManagerExternalEndpoint#scope}.

---

### TrafficManagerExternalEndpointTimeouts <a name="TrafficManagerExternalEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

&trafficmanagerexternalendpoint.TrafficManagerExternalEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#create TrafficManagerExternalEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#delete TrafficManagerExternalEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#read TrafficManagerExternalEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/traffic_manager_external_endpoint#update TrafficManagerExternalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerExternalEndpointCustomHeaderList <a name="TrafficManagerExternalEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.NewTrafficManagerExternalEndpointCustomHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TrafficManagerExternalEndpointCustomHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get"></a>

```go
func Get(index *f64) TrafficManagerExternalEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerExternalEndpointCustomHeaderOutputReference <a name="TrafficManagerExternalEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.NewTrafficManagerExternalEndpointCustomHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TrafficManagerExternalEndpointCustomHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointCustomHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerExternalEndpointSubnetList <a name="TrafficManagerExternalEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.NewTrafficManagerExternalEndpointSubnetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TrafficManagerExternalEndpointSubnetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get"></a>

```go
func Get(index *f64) TrafficManagerExternalEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerExternalEndpointSubnetOutputReference <a name="TrafficManagerExternalEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.NewTrafficManagerExternalEndpointSubnetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TrafficManagerExternalEndpointSubnetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLast` <a name="ResetLast" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.firstInput">FirstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.lastInput">LastInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.first">First</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.last">Last</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scope">Scope</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.firstInput"></a>

```go
func FirstInput() *string
```

- *Type:* *string

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.lastInput"></a>

```go
func LastInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.first"></a>

```go
func First() *string
```

- *Type:* *string

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.last"></a>

```go
func Last() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.scope"></a>

```go
func Scope() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointSubnetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerExternalEndpointTimeoutsOutputReference <a name="TrafficManagerExternalEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerexternalendpoint"

trafficmanagerexternalendpoint.NewTrafficManagerExternalEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TrafficManagerExternalEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerExternalEndpoint.TrafficManagerExternalEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



