# `azurerm_traffic_manager_nested_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_traffic_manager_nested_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint).

# `trafficManagerNestedEndpoint` Submodule <a name="`trafficManagerNestedEndpoint` Submodule" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerNestedEndpoint <a name="TrafficManagerNestedEndpoint" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint azurerm_traffic_manager_nested_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.NewTrafficManagerNestedEndpoint(scope Construct, id *string, config TrafficManagerNestedEndpointConfig) TrafficManagerNestedEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig">TrafficManagerNestedEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig">TrafficManagerNestedEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet">PutSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation">ResetEndpointLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings">ResetGeoMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4">ResetMinimumRequiredChildEndpointsIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6">ResetMinimumRequiredChildEndpointsIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader"></a>

```go
func PutCustomHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putCustomHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubnet` <a name="PutSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet"></a>

```go
func PutSubnet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putSubnet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value TrafficManagerNestedEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

---

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetCustomHeader"></a>

```go
func ResetCustomHeader()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEndpointLocation` <a name="ResetEndpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetEndpointLocation"></a>

```go
func ResetEndpointLocation()
```

##### `ResetGeoMappings` <a name="ResetGeoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetGeoMappings"></a>

```go
func ResetGeoMappings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetMinimumRequiredChildEndpointsIpv4` <a name="ResetMinimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv4"></a>

```go
func ResetMinimumRequiredChildEndpointsIpv4()
```

##### `ResetMinimumRequiredChildEndpointsIpv6` <a name="ResetMinimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetMinimumRequiredChildEndpointsIpv6"></a>

```go
func ResetMinimumRequiredChildEndpointsIpv6()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.resetWeight"></a>

```go
func ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TrafficManagerNestedEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.TrafficManagerNestedEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.TrafficManagerNestedEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.TrafficManagerNestedEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.TrafficManagerNestedEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TrafficManagerNestedEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TrafficManagerNestedEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TrafficManagerNestedEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TrafficManagerNestedEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet">Subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput">CustomHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput">EndpointLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput">GeoMappingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput">MinimumChildEndpointsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input">MinimumRequiredChildEndpointsIpv4Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input">MinimumRequiredChildEndpointsIpv6Input</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput">SubnetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation">EndpointLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings">GeoMappings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints">MinimumChildEndpoints</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4">MinimumRequiredChildEndpointsIpv4</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6">MinimumRequiredChildEndpointsIpv6</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeader"></a>

```go
func CustomHeader() TrafficManagerNestedEndpointCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList">TrafficManagerNestedEndpointCustomHeaderList</a>

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnet"></a>

```go
func Subnet() TrafficManagerNestedEndpointSubnetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList">TrafficManagerNestedEndpointSubnetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeouts"></a>

```go
func Timeouts() TrafficManagerNestedEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference">TrafficManagerNestedEndpointTimeoutsOutputReference</a>

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.customHeaderInput"></a>

```go
func CustomHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointLocationInput`<sup>Optional</sup> <a name="EndpointLocationInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocationInput"></a>

```go
func EndpointLocationInput() *string
```

- *Type:* *string

---

##### `GeoMappingsInput`<sup>Optional</sup> <a name="GeoMappingsInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappingsInput"></a>

```go
func GeoMappingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MinimumChildEndpointsInput`<sup>Optional</sup> <a name="MinimumChildEndpointsInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpointsInput"></a>

```go
func MinimumChildEndpointsInput() *f64
```

- *Type:* *f64

---

##### `MinimumRequiredChildEndpointsIpv4Input`<sup>Optional</sup> <a name="MinimumRequiredChildEndpointsIpv4Input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4Input"></a>

```go
func MinimumRequiredChildEndpointsIpv4Input() *f64
```

- *Type:* *f64

---

##### `MinimumRequiredChildEndpointsIpv6Input`<sup>Optional</sup> <a name="MinimumRequiredChildEndpointsIpv6Input" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6Input"></a>

```go
func MinimumRequiredChildEndpointsIpv6Input() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.subnetInput"></a>

```go
func SubnetInput() interface{}
```

- *Type:* interface{}

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointLocation`<sup>Required</sup> <a name="EndpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.endpointLocation"></a>

```go
func EndpointLocation() *string
```

- *Type:* *string

---

##### `GeoMappings`<sup>Required</sup> <a name="GeoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.geoMappings"></a>

```go
func GeoMappings() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MinimumChildEndpoints`<sup>Required</sup> <a name="MinimumChildEndpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumChildEndpoints"></a>

```go
func MinimumChildEndpoints() *f64
```

- *Type:* *f64

---

##### `MinimumRequiredChildEndpointsIpv4`<sup>Required</sup> <a name="MinimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv4"></a>

```go
func MinimumRequiredChildEndpointsIpv4() *f64
```

- *Type:* *f64

---

##### `MinimumRequiredChildEndpointsIpv6`<sup>Required</sup> <a name="MinimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.minimumRequiredChildEndpointsIpv6"></a>

```go
func MinimumRequiredChildEndpointsIpv6() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerNestedEndpointConfig <a name="TrafficManagerNestedEndpointConfig" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

&trafficmanagernestedendpoint.TrafficManagerNestedEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MinimumChildEndpoints: *f64,
	Name: *string,
	ProfileId: *string,
	TargetResourceId: *string,
	CustomHeader: interface{},
	Enabled: interface{},
	EndpointLocation: *string,
	GeoMappings: *[]*string,
	Id: *string,
	MinimumRequiredChildEndpointsIpv4: *f64,
	MinimumRequiredChildEndpointsIpv6: *f64,
	Priority: *f64,
	Subnet: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints">MinimumChildEndpoints</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId">ProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader">CustomHeader</a></code> | <code>interface{}</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation">EndpointLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings">GeoMappings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4">MinimumRequiredChildEndpointsIpv4</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6">MinimumRequiredChildEndpointsIpv6</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet">Subnet</a></code> | <code>interface{}</code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MinimumChildEndpoints`<sup>Required</sup> <a name="MinimumChildEndpoints" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumChildEndpoints"></a>

```go
MinimumChildEndpoints *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#minimum_child_endpoints TrafficManagerNestedEndpoint#minimum_child_endpoints}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#profile_id TrafficManagerNestedEndpoint#profile_id}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#target_resource_id TrafficManagerNestedEndpoint#target_resource_id}.

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.customHeader"></a>

```go
CustomHeader interface{}
```

- *Type:* interface{}

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#custom_header TrafficManagerNestedEndpoint#custom_header}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#enabled TrafficManagerNestedEndpoint#enabled}.

---

##### `EndpointLocation`<sup>Optional</sup> <a name="EndpointLocation" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.endpointLocation"></a>

```go
EndpointLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#endpoint_location TrafficManagerNestedEndpoint#endpoint_location}.

---

##### `GeoMappings`<sup>Optional</sup> <a name="GeoMappings" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.geoMappings"></a>

```go
GeoMappings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#geo_mappings TrafficManagerNestedEndpoint#geo_mappings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#id TrafficManagerNestedEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumRequiredChildEndpointsIpv4`<sup>Optional</sup> <a name="MinimumRequiredChildEndpointsIpv4" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv4"></a>

```go
MinimumRequiredChildEndpointsIpv4 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv4 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv4}.

---

##### `MinimumRequiredChildEndpointsIpv6`<sup>Optional</sup> <a name="MinimumRequiredChildEndpointsIpv6" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.minimumRequiredChildEndpointsIpv6"></a>

```go
MinimumRequiredChildEndpointsIpv6 *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#minimum_required_child_endpoints_ipv6 TrafficManagerNestedEndpoint#minimum_required_child_endpoints_ipv6}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#priority TrafficManagerNestedEndpoint#priority}.

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.subnet"></a>

```go
Subnet interface{}
```

- *Type:* interface{}

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#subnet TrafficManagerNestedEndpoint#subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.timeouts"></a>

```go
Timeouts TrafficManagerNestedEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts">TrafficManagerNestedEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#timeouts TrafficManagerNestedEndpoint#timeouts}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#weight TrafficManagerNestedEndpoint#weight}.

---

### TrafficManagerNestedEndpointCustomHeader <a name="TrafficManagerNestedEndpointCustomHeader" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

&trafficmanagernestedendpoint.TrafficManagerNestedEndpointCustomHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#name TrafficManagerNestedEndpoint#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#value TrafficManagerNestedEndpoint#value}.

---

### TrafficManagerNestedEndpointSubnet <a name="TrafficManagerNestedEndpointSubnet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

&trafficmanagernestedendpoint.TrafficManagerNestedEndpointSubnet {
	First: *string,
	Last: *string,
	Scope: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first">First</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last">Last</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope">Scope</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}. |

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.first"></a>

```go
First *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#first TrafficManagerNestedEndpoint#first}.

---

##### `Last`<sup>Optional</sup> <a name="Last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.last"></a>

```go
Last *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#last TrafficManagerNestedEndpoint#last}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnet.property.scope"></a>

```go
Scope *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#scope TrafficManagerNestedEndpoint#scope}.

---

### TrafficManagerNestedEndpointTimeouts <a name="TrafficManagerNestedEndpointTimeouts" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

&trafficmanagernestedendpoint.TrafficManagerNestedEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#create TrafficManagerNestedEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#delete TrafficManagerNestedEndpoint#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#read TrafficManagerNestedEndpoint#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/traffic_manager_nested_endpoint#update TrafficManagerNestedEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerNestedEndpointCustomHeaderList <a name="TrafficManagerNestedEndpointCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.NewTrafficManagerNestedEndpointCustomHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TrafficManagerNestedEndpointCustomHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get"></a>

```go
func Get(index *f64) TrafficManagerNestedEndpointCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerNestedEndpointCustomHeaderOutputReference <a name="TrafficManagerNestedEndpointCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.NewTrafficManagerNestedEndpointCustomHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TrafficManagerNestedEndpointCustomHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointCustomHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerNestedEndpointSubnetList <a name="TrafficManagerNestedEndpointSubnetList" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.NewTrafficManagerNestedEndpointSubnetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TrafficManagerNestedEndpointSubnetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get"></a>

```go
func Get(index *f64) TrafficManagerNestedEndpointSubnetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerNestedEndpointSubnetOutputReference <a name="TrafficManagerNestedEndpointSubnetOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.NewTrafficManagerNestedEndpointSubnetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TrafficManagerNestedEndpointSubnetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast">ResetLast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLast` <a name="ResetLast" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetLast"></a>

```go
func ResetLast()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput">FirstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput">LastInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first">First</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last">Last</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope">Scope</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstInput`<sup>Optional</sup> <a name="FirstInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.firstInput"></a>

```go
func FirstInput() *string
```

- *Type:* *string

---

##### `LastInput`<sup>Optional</sup> <a name="LastInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.lastInput"></a>

```go
func LastInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.first"></a>

```go
func First() *string
```

- *Type:* *string

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.last"></a>

```go
func Last() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.scope"></a>

```go
func Scope() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointSubnetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerNestedEndpointTimeoutsOutputReference <a name="TrafficManagerNestedEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagernestedendpoint"

trafficmanagernestedendpoint.NewTrafficManagerNestedEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TrafficManagerNestedEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerNestedEndpoint.TrafficManagerNestedEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



